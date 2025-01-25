const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello from Node.js!' }));
};

const server = http.createServer(requestListener);

// Add error handling
server.on('error', (err) => {
  console.error('Server error:', err);
  // Add appropriate error handling logic here, e.g., logging, retrying, etc.
});

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});