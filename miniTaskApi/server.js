import http  from "http";
import { taskRoutes } from "./routes/taskRoutes.js";


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

    taskRoutes(req, res);
})

server.listen(port, hostname, () => {
    console.log(`Server running on port ${[port]}`)
})