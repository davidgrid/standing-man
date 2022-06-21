addEventListener("fetch", (event) => {
  const response = new Response("Standing Mans 2!", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
