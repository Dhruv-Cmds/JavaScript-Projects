/* Generate a dummy data ni this formate in collection called Employees in a db called company

{
    name:"dhurv",
    salary: 45000,
    language: "Python",
    city: "New Your",
    isManager: true,
}

*/

// Generate 10 such records when a button called generate data is clicked!

// Create an Express app with mongoose to acheive it

// Everytime the button is clicked , you should clear the collection

import express, { application } from "express";
import mongoose from "mongoose";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { Employee } from "./models/company.js";
import { randomBytes } from "node:crypto";

const app = express()

const conn = await mongoose.connect("mongodb://localhost:27017/company")

const __dirname = dirname(fileURLToPath(import.meta.url));

app.set("view engine", "ejs");

app.use(express.static(join(__dirname, "public")));


const nameArr = ["Abhi", "Ajay", "Ashok"]
const salarayArr = [46742, 297616, 90726]
const languageArr = ["Python", "Java", "Rust"]
const cityArr = ["New York", "Time Square", "Toranto"]
const managerArr = [true, false]

app.get("/", async (req, res) => {
    res.render("index", { btnText: "Generate Data" })
})

app.post("/generate-data", async (req, res) => {

    await Employee.deleteMany({})

    for (let i = 0; i < 10; i++) {

        await Employee.create({

            name: nameArr[Math.floor(Math.random() * 3)],
            salary: salarayArr[Math.floor(Math.random() * 3)],
            language: languageArr[Math.floor(Math.random() * 3)],
            city: cityArr[Math.floor(Math.random() * 3)],
            isManager: managerArr[Math.floor(Math.random() * 2)],
        })
    }

    res.json({ message: "Data generated successfully" })
})

app.listen(3000)
