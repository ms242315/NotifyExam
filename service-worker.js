self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
});
 
self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
});

self.addEventListener("push", function (event) {
    console.log('[ServiceWorker] Push');
    console.log(event);
    const message = event.data.json();
    self.registration.showNotification(message.title, { body: message.text });
});

self.addEventListener("fetch", (event) => {
    console.log('[ServiceWorker] Fetch');
    const time = 5000;
    setTimeout(function() {
        // event.ports[0].postMessage(event.data.wait + "秒待ちました。");
        self.registration.showNotification("秒待ちました。", {
            body: "HelloWorld!",
            icon: "./img/onigiri.png",
        });
    }, time);
});