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

        // Check for updates periodically
        setInterval(() => {
          registration.update();
        }, 60000); // Check every minute
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
