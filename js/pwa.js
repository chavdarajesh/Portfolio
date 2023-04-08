if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(registration => {
        console.log('SW registration');
    }).catch(error=>{
        console.log('error',error);
    })
}