const HOST = 'https://williammayy.github.io/todo_buttons'

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register(`${HOST}/service-worker.js`)
        .then(function() { console.log('Service Worker Registered'); });
}

var cacheName = 'contadorApp';
var filesToCache = [
    `${HOST}/imagens/edit.png`,
    `${HOST}/imagens/remove.png`,
    `${HOST}/imagens/logo128.png`,
    `${HOST}/imagens/logo144.png`,
    `${HOST}/imagens/logo152.png`,
    `${HOST}/imagens/logo192.png`,
    `${HOST}/imagens/logo256.png`,
    `${HOST}/lib/bulma.css`,
    `${HOST}/app.css`,
    `${HOST}/index.html`,
    `${HOST}/store.js`,
    `${HOST}/todo_e6.js`,
    `${HOST}/service-worker.js`,
    `${HOST}/manifest.json`
];

self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.open(cacheName).then(function(cache) {
            return cache.match(event.request).then(function(response) {
                return response || fetch(event.request).then(function(response) {
                    cache.put(event.request, response.clone());
                    return response;
                });
            });
        })
    );
});