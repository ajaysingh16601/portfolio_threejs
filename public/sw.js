const CACHE_NAME = 'portfolio-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
];

// Assets that should be cached with network-first strategy
const ASSET_CACHE = 'portfolio-assets-v1';

// Install event - cache essential files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== ASSET_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip cross-origin requests
  if (url.origin !== self.location.origin) {
    return;
  }

  // HTML - Network first, fallback to cache
  if (request.destination === 'document') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (!response || !response.ok) {
            return response;
          }
          // Clone before caching
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseToCache);
          });
          return response;
        })
        .catch(() => {
          return caches.match(request).then((cached) => {
            return cached || new Response('Offline', { status: 503 });
          });
        })
    );
    return;
  }

  // Assets (CSS, JS, images) - Cache first, fallback to network
  if (
    request.destination === 'style' ||
    request.destination === 'script' ||
    request.destination === 'image' ||
    request.destination === 'font'
  ) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) {
          return cached;
        }
        return fetch(request).then((response) => {
          if (!response || !response.ok) {
            return response;
          }
          // Clone before caching
          const responseToCache = response.clone();
          caches.open(ASSET_CACHE).then((cache) => {
            cache.put(request, responseToCache);
          });
          return response;
        }).catch((error) => {
          console.error('Fetch failed for:', request.url, error);
          // Return null which will trigger browser default behavior
          return new Response('Resource unavailable', { status: 503 });
        });
      })
    );
    return;
  }

  // 3D models - Cache first with long expiration
  if (
    request.url.includes('.glb') ||
    request.url.includes('.gltf') ||
    request.url.includes('/models/')
  ) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) {
          return cached;
        }
        return fetch(request).then((response) => {
          if (!response || !response.ok) {
            return response;
          }
          // Clone before caching
          const responseToCache = response.clone();
          caches.open(ASSET_CACHE).then((cache) => {
            cache.put(request, responseToCache);
          });
          return response;
        }).catch((error) => {
          console.error('Failed to fetch model:', request.url, error);
          return new Response('Model unavailable', { status: 503 });
        });
      })
    );
    return;
  }

  // Default - Network first
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (!response || !response.ok) {
          return response;
        }
        // Clone before caching
        const responseToCache = response.clone();
        caches.open(ASSET_CACHE).then((cache) => {
          cache.put(request, responseToCache);
        });
        return response;
      })
      .catch(() => {
        return caches.match(request).then((cached) => {
          return cached || new Response('Network error', { status: 503 });
        });
      })
  );
});

// Handle messages from clients
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }

  if (event.data && event.data.type === 'CLEAR_CACHE') {
    caches.keys().then((cacheNames) => {
      cacheNames.forEach((cacheName) => {
        caches.delete(cacheName);
      });
    });
  }
});
