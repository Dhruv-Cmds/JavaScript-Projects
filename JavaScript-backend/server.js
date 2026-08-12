// type common js to import 
// const http = require('node:http');

// type module to import (Ecma)
import http from "http"

// const hostname = "127.0.0.1"
// const port = 3000;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hello\n");
});

server.listen(3000, "127.0.0.1", () => {
    console.log(`Server running at http://${"127.0.0.1"}:${3000}/`);    
});