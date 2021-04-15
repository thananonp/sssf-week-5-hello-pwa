window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        console.log("Registering sw.js")
        navigator.serviceWorker
            .register('./sw.js').then(r => {
            console.log("Sw registered", r)
        }).catch(e => {
            console.error("sw failed", e)
        });
    }
}