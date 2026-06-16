// Minimal service worker — prevents 404 on browsers that probe for /sw.js
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
