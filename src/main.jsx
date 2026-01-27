import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Register Service Worker for offline support and caching
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {

        // Check for updates less frequently and on focus
        setInterval(() => {
          registration.update();
        }, 900000); // Check every 15 minutes

        document.addEventListener('visibilitychange', () => {
          if (document.visibilityState === 'visible') {
            registration.update();
          }
        });
      })
      .catch((error) => {
        console.log('Service Worker registration failed:', error);
      });

    // Listen for Service Worker updates
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      console.log('Service Worker updated');
    });
  });
}
