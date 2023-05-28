const coreAssets = [
    './',
    'index.html',
    'manifest.json',
    'sw.js',
    './css/index.css',
    './css/breaker-style-four.css',
    './css/breaker-style-one.css',
    './css/breaker-style-three.css',
    './css/breaker-style-two.css',
    './css/color-blue.css',
    './css/color-green.css',
    './css/color-malt.css',
    './css/color-orange.css',
    './css/color-purple.css',
    './css/color-red.css',
    './css/Monotoncss.css',
    './css/Poppinscss.css',
    './css/Ralewaycss.css',
    './js/gsap.min.js',
    './js/index.js',
    './js/jquery.min.js',
    './js/particles.min.js',
    './js/pwa.js',
    './images/favicon/favicon.ico',
    './images/about.jpg',
    './images/bulb.png',
    './images/call.png',
    './images/coding.png',
    './images/contact-back.jpg',
    './images/copyright.png',
    './images/facebook_logo.png',
    './images/gear.png',
    './images/icon-email.png',
    './images/icon-location.png',
    './images/icon-name.png',
    './images/icon-phone.png',
    './images/instagram_logo.png',
    './images/instagram.png',
    './images/linkedin_logo.png',
    './images/mail.png',
    './images/man-1.jpg',
    './images/man.jpg',
    './images/placeholder-five.png',
    './images/placeholder-four.png',
    './images/placeholder-one.png',
    './images/placeholder-three.png',
    './images/placeholder-two.png',
    './images/portfolio-first.jpg',
    './images/portfolio-fourth.jpg',
    './images/portfolio-second.jpg',
    './images/portfolio-third.jpg',
    './images/post-five.jpg',
    './images/post-four.jpg',
    './images/post-one.jpg',
    './images/post-six.jpg',
    './images/post-three.jpg',
    './images/post-two.jpg',
    './images/RC_Logo_Black.png',
    './images/twitter_logo.png',
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
    './css/woff2/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVuEorCFPrEHJA.woff2',
    './css/woff2/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVuEorCGPrEHJA.woff2',
    './css/woff2/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVuEorCHPrEHJA.woff2',
    './css/woff2/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVuEorCIPrE.woff2',
    './css/woff2/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVuEorCMPrEHJA.woff2',
    './css/woff2/5h1aiZUrOngCibe4TkHLQg.woff2',
    './css/woff2/pxiByp8kv8JHgFVrLGT9Z1JlFc-K.woff2',
    './css/woff2/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2',
    './css/woff2/pxiByp8kv8JHgFVrLGT9Z11lFc-K.woff2',
    './pdf/RajeshChavda.pdf',
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