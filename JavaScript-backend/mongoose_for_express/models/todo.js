import mongoose from "mongoose";
// title:{type: String, required: ture, defult: "Hey"},

const tasks = new mongoose.Schema({
    title:String,
    desc:String,
    isDone: Boolean
});


export const Todo = mongoose.model('Todo', tasks);
