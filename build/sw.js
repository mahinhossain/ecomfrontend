let chacheData = "appV1";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(chacheData).then((cache) => {
      cache.addAll([
        "/static/js/bundle.js",
        "/static/js/main.chunk.js",
        "/static/js/0.chunk.js",
        "/",
      ]);
    })
  );
});
this.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((result) => {
      if (result) {
        return result;
      }
    })
  );
});
// this.addEventListener("fetch", (event) => {
//   // Prevent the default, and handle the request ourselves.
//   event.respondWith(
//     (async function () {
//       // Try to get the response from a cache.
//       const cachedResponse = await caches.match(event.request);
//       // Return it if we found one.
//       if (cachedResponse) return cachedResponse;
//       // If we didn't find a match in the cache, use the network.
//       return fetch(event.request);
//     })()
//   );
// });
