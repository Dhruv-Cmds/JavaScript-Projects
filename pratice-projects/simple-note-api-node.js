import http from "http";
import { json } from "stream/consumers";
import { brotliCompressSync } from "zlib";

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Alice" }
];

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {

  // Get

  // req = what use ask
  if (req.method === "GET" && req.url === "/user") {

    // res = what your server send
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end((JSON.stringify(users)));

  }

  // POST

  else if (req.method === "POST" && req.url === "/user") {


    let body = "";

    /* req.on() = "Listen for something that happens to this request,
    req.on() = means "tell me whenever data arrives */


    // data = the event name
    // chunk = the piece of data that just arrived
    // => = the function to run when that happens

    req.on("data", chunk => {
      body += chunk;
    });

    // body after whole data recive in chunk which going in body, now body will containe whole data


    /* req.on("end", ...) = means tell me when all data has arrived. */
    // res.end("You made [POST] request");
    res.on("end", () => {
      const newUser = JSON.parse(body);

      newUser.id = users.length + 1;
      users.push(newUser);

    });

    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(newUser))

  }

  // PUT

  else if (req.method === "PUT" && req.url === "/user") {

    let body = "";

    req.on("data", chunk => {
      body += chunk;
    });

    req.on("end", () => {

      const updateUser = JSON.parse(body);

      users[0].name = updateUser.name;

      res.end(JSON.stringify(users[0]));
      res.writeHead(200, { 'Content-Type': 'application/json' });

    });

  }

  // DELETE

  else if (req.method === "DELETE" && req.url === "/users") {

    users = users.filter(user => user.id !== 1);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: "User deleted" }));

  }

  else {

    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));

  }

});


server.listen(port, hostname);