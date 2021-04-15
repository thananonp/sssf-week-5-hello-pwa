
const  cacheName = 'hello-pwa';
const filesToCache = [
    './',
    './index.html',
    './favicon.ico',
    './css/style.css',
    './css/all.css',
    './fonts/Rubik-Medium.ttf',
    './js/main.js',
    './webfonts',
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
    console.log("sw install")
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
    console.log("sw fetch")
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});