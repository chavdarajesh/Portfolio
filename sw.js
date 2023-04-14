const CACHE_VERSION = 1;
const CURRENT_CACHES = {
    prefetch: `prefetch-cache-v${CACHE_VERSION}`,
};

self.addEventListener("install", (event) => {
    const urlsToPrefetch = [
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
        './js/particles.js',
        './js/particles.min.js',
        './js/pwa.js',
        './images/about.jpg',
        './images/bulb.png',
        './images/call.png',
        './images/coding.png',
        './images/contact-back.jpg',
        './images/copyright.png',
        './images/facebook_logo.png',
        './images/favicon.png',
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
        './images/thumbnail.png',
        './images/twitter_logo.png',
        './images/willy_wonka_logo.png',
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

    console.log(
        "Handling install event. Resources to pre-fetch:",
        urlsToPrefetch
    );

    event.waitUntil(
        caches
            .open(CURRENT_CACHES["prefetch"])
            .then((cache) => {
                return cache
                    .addAll(
                        urlsToPrefetch.map((urlToPrefetch) => {
                            return new Request(urlToPrefetch, { mode: "no-cors" });
                        })
                    )
                    .then(() => {
                        console.log("All resources have been fetched and cached.");
                    });
            })
            .catch((error) => {
                console.error("Pre-fetching failed:", error);
            })
    );
});


self.addEventListener('fetch', (event) => {
    event.respondWith(
        (async function () {
            try {
                return await fetch(event.request);
            } catch (err) {
                return caches.match(event.request);
            }
        })(),
    );
});