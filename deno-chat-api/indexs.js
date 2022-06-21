addEventListener("fetch", (event) => {
  const response = new Response("Standing Man coming soon!", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
