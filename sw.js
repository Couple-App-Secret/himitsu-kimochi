const CACHE_NAME = 'himitsu-v1';
const urlsToCache = [
  '/himitsu-kimochi/',
  '/himitsu-kimochi/index.html',
  '/himitsu-kimochi/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
