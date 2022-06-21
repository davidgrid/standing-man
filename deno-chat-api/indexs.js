addEventListener("fetch", (event) => {
  const response = new Response("Hello Worlds!", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
