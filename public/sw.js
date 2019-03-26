console.log('heyaaa')

var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    '/',
    '/css/main.min.css',
    '/js/jquery-3.3.1.js'
];

self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function (cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});