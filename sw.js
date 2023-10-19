const coreAssets = [
    './',
    'index.html',
    'manifest.json',
    'sw.js',
    './css/style.css',
    './css/colorswitcher.css',
    './css/skins/blue.css',
    './css/skins/blue2.css',
    './css/skins/dark.css',
    './css/skins/goldenrod.css',
    './css/skins/green.css',
    './css/skins/green2.css',
    './css/skins/light.css',
    './css/skins/orange.css',
    './css/skins/pink.css',
    './css/skins/pink2.css',
    './css/skins/red.css',
    './css/skins/yellow.css',

    './js/colorswitcher.js',
    './js/index.js',
    './js/custom.js',
    './js/pwa.js',

    './images/favicon/favicon.ico',

    './img/mypicture-160x160-old.jpg',
    './img/mypicture-160x160.jpg',
    './img/mypicture-old.jpg',
    './img/mypicture.jpg',
    './img/shape1.png',
    './img/shape2.png',
    './img/shape3.png',

    './img/projects/project-1-big.jpg',
    './img/projects/project-1.jpg',
    './img/projects/project-2-big.jpg',
    './img/projects/project-2.jpg',
    './img/projects/project-3-big.jpg',
    './img/projects/project-3.jpg',
    './img/projects/project-4-big.jpg',
    './img/projects/project-4.jpg',
    './img/projects/project-5-big.jpg',
    './img/projects/project-5.jpg',
    './img/projects/project-6-big.jpg',
    './img/projects/project-6.jpg',
    './img/projects/project-7-big.jpg',
    './img/projects/project-7.jpg',
    './img/projects/project-8-big.jpg',
    './img/projects/project-8.jpg',
    

    './images/man.jpg',

    './images/RC_Logo_Black.png',
    './images/RC_Logo_White.png',
    './images/manifest/bulb-icon.svg',
    './images/manifest/contact-icon.svg',
    './images/manifest/email-icon.svg',
    './images/manifest/home-icon.svg',
    './images/manifest/icon-96x96.png',
    './images/manifest/icon-192x192.png',
    './images/manifest/icon-512x512.png',
    './images/manifest/icon-512x512.svg',
    './images/manifest/main.png',
    './images/manifest/port-icon.svg',
    './images/manifest/SSn1.png',
    './images/manifest/SSn2.png',
    './images/manifest/SSn3.png',
    './images/manifest/SSn4.png',
    './images/manifest/SSw1.png',
    './images/manifest/SSw2.png',
    './images/manifest/SSw3.png',
    './images/manifest/SSw4.png',

    './fonts/icomoon_avargk.eot',
    './fonts/icomoon_avargk.svg',
    './fonts/icomoon_avargk.ttf',
    './fonts/icomoon_avargk.woff',

    './pdf/RajeshChavda.pdf',
    
    './sounds/click.mp3',
    './sounds/hover.mp3',
    './sounds/hover2.mp3',
    './sounds/hover3.mp3',
    './sounds/paper.mp3',
    './sounds/paperaboutdown.mp3',
    './sounds/paperaboutup.mp3',
    './sounds/skin.mp3',
];

// On install, cache core assets
self.addEventListener('install', function (event) {

    // Cache core assets
    event.waitUntil(caches.open('app').then(function (cache) {
        for (let asset of coreAssets) {
            cache.add(new Request(asset));
        }
        return cache;
    }));

});

// Listen for request events
self.addEventListener('fetch', function (event) {
    // Get the request
    let request = event.request;
    
    // Bug fix
    // https://stackoverflow.com/a/49719964
    if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') return;
    
    // HTML files
    // Network-first
    // if (request.headers.get('Accept').includes('text/html','text')) {
        event.respondWith(
            fetch(request).then(function (response) {

                // Create a copy of the response and save it to the cache
                let copy = response.clone();
                event.waitUntil(caches.open('app').then(function (cache) {
                    return cache.put(request, copy);
                }));

                // Return the response
                return response;

            }).catch(function (error) {

                // If there's no item in cache, respond with a fallback
                return caches.match(request).then(function (response) {
                    return response || caches.match('/offline.html');
                });

            })
        );
    // }

    // CSS & JavaScript
    // Offline-first
    // if (request.headers.get('Accept').includes('text/css') || (request.headers.get('Accept').includes('text/javascript') && request.headers.get('Accept').includes('*/*') ) || request.headers.get('Accept').includes('*/*') ) {
    //     event.respondWith(
    //         caches.match(request).then(function (response) {
    //             return response || fetch(request).then(function (response) {

    //                 // Return the response
    //                 return response;

    //             });
    //         })
    //     );
    //     return;
    // }

    // Images
    // Offline-first
    // if (request.headers.get('Accept').includes('image/*')) {
    //     event.respondWith(
    //         caches.match(request).then(function (response) {
    //             return response || fetch(request).then(async function (response) {

    //                 // Save a copy of it in cache
    //                 let copy = response.clone();
    //                 await event.waitUntil(caches.open('app').then(function (cache) {
    //                     return cache.put(request, copy);
    //                 }));

    //                 // Return the response
    //                 return response;

    //             });
    //         })
    //     );
    // }

});