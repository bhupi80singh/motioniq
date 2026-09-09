// Caches the app shell so the page opens offline. The pose model is fetched from the CDN on first use and cached by the browser.
const C='motioniq-v1', FILES=['./','./index.html','./manifest.json','./icon.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(FILES))));
self.addEventListener('fetch',e=>{ if(e.request.url.startsWith(self.location.origin)) e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))); });
