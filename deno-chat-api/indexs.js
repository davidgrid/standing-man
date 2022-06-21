addEventListener("fetch", (event) => {
  const response = new Response("Standing Mans!", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
