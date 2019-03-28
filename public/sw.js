console.log('heyaaa')

var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    '/',
    '/css/main.min.css',
    '/js/jquery-3.3.1.min.js',
    '/offline.html',
    '../fonts/Germania_One/GermaniaOne-Regular.ttf',
    '../fonts/Raleway/Raleway-Light.ttf'
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

self.addEventListener('fetch', function (event) {
    if (
        event.request.mode === 'navigate' ||
        (event.request.method === 'GET' &&
            event.request.headers.get('accept').includes('text/html'))
    ) {
        event.respondWith(
            fetch(event.request.url).catch(error => {
                // Return the offline page
                return caches.match('/offline.html')
            })
        )
    } else {
        event.respondWith(
            caches.match(event.request)
            .then(function (response) {
                return response || fetch(event.request);
            })
        );
    }
});