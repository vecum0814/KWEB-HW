const http = require('http');
const hostname = '127.0.0.1'; const port = 4000;
const crtTime = new Date();
const server = http.createServer((req, res) => { 
    res.statusCode = 200; res.setHeader('Content-Type', 'text/plain'); 
    res.end(crtTime.toString());
});
server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});