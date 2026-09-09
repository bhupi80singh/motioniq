// Bump CACHE on every release so old files are dropped. Network-first for the app shell
// means a fresh index.html is fetched whenever you're online; the cache is only a fallback.
const CACHE = 'motioniq-v2';
const SHELL = ['./','./index.html','./manifest.json','./icon.png'];

self.addEventListener('message', e => { if (e.data === 'skip') self.skipWaiting(); });
self.addEventListener('install', e => { self.skipWaiting(); e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL))); });
self.addEventListener('activate', e => { e.waitUntil(
  caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())
); });
self.addEventListener('fetch', e => {
  const url = e.request.url;
  if (!url.startsWith(self.location.origin)) return;              // let CDN (pose model) use the browser cache
  e.respondWith(
    fetch(e.request).then(res => {                                 // network first
      const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return res;
    }).catch(() => caches.match(e.request))                        // offline fallback
  );
});
