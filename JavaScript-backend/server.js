const http = require('node:http');

// const hostname = "127.0.0.1"
// const port = 3000;

const server = http.createServer((req,res) => {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hello world\n");
});

server.listen(3000, "127.0.0.1", () => {
    console.log(`Server running at http://${"127.0.0.1"}:${3000}/`);    
});