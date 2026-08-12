import { getTasks, addTasks, putTasks, deleteTasks } from "../controllers/taskController.js";

export function taskRoutes(req, res) {

    if (req.method === "GET" && req.url === "/tasks") {

        getTasks(req, res);
        return;

    }

    else if (req.method === "POST" && req.url === "/tasks/add") {

        addTasks(req, res);
        return;

    }

    else if (req.method === "PUT" && req.url === "/tasks/put") {

        putTasks(req, res)
        return;

    }

    else if (req.method === "DELETE" && req.url === "/tasks/delete") {

        deleteTasks(req, res);
        return;

    }

    else {

        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route not found" }));

    }


};