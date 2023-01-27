addEventListener("fetch", (event) => {
  const response = new Response("Standing Man coming RYan!", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
