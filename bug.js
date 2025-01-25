const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello from Node.js!' }));
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});

// Uncommon Error:  Improper handling of request errors
// The server starts, but doesn't handle errors properly if the request fails unexpectedly.
// For example, a network issue or a sudden server shutdown could leave the client hanging.

//To fix this, add error handling using server.on('error', err => { ... })