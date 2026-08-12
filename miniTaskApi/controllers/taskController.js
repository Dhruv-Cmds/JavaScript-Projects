import { json } from "stream/consumers";
import { getAllTasks } from "../services/taskService.js";
import { addTask, putTask, deleteTask } from "../services/taskService.js";

export function getTasks(req, res) {

    const tasks = getAllTasks();

    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify(tasks));

};

export function addTasks(req, res) {

    let body = "";

    req.on("data", chunk => {
        body += chunk;
    });

    req.on("end", () => {

        const newTask = JSON.parse(body);

        const task = addTask(newTask)

        res.writeHead(201, { "Content-Type": "application/json" });

        res.end(JSON.stringify({
            message: "Task added successfully",
            task: task
        }));

    });

};

export function putTasks(req, res) {

    let body = "";

    req.on("data", chunk => {
        body += chunk;
    });

    req.on("end", () => {

        const updateTask = JSON.parse(body);

        const task = putTask(updateTask);

        res.writeHead(200, { "Content-Type": "application/json" });

        res.end(JSON.stringify({
            message: "Task successfully put",
            task: task
        }));

    });

};

export function deleteTasks(req, res) {

    const id = Number(req.url.split("/")[2]);

    const deletedTask = deleteTask(id);

    res.writeHead(200, { "Content-Type": "application/json" });

    res.end(JSON.stringify({
        message: "Task successfully deleted",
        task: deletedTask
    }));
}