import { tasks } from "../data/tasks.js";

export function getAllTasks(req, res) {

    return tasks;

};

export function addTask(newTask) {

    // to avoid duplicate user's id number
    newTask.id = tasks.length + 1;

    tasks.push(newTask);

    return newTask;
}

export function putTask(updateTask) {

    tasks[0].title = updateTask.title

    return tasks;
}

export function deleteTask(id) { 

    const index = tasks.findIndex(task => task.id === id);

    if (index === -1) {
        return null;
    }

    const deletedTask = tasks.splice(index, 1);

    return deleteTask[0];
}