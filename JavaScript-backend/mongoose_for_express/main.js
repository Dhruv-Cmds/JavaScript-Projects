// Node/Express project will use Mongoose
import mongoose from "mongoose";
import express from "express"
import { Todo } from "./models/todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/todo")

const app = express();

app.get("/", (req, res) => {

    const todo = new Todo (

        {
            title: "Hey first todo", 
            desc: "Description of this tod", 
            isDone: false
        }
    )

    todo.save()
    
    res.send("Hellow World!")
})

app.listen(3000)