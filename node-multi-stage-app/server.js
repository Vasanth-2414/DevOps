const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello from multi-stage Dockerfile Node.js app!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

