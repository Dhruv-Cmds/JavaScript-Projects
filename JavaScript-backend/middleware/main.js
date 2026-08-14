import express from "express"
import fs from "fs"


const app = express()

// Middleware 1
app.use((req, res, next) => {
  
  fs.appendFileSync("log.txt", `\n${Date.now()} is a ${req.method} and endpoint is ${req.url}`)
  console.log(`${Date.now()} is a ${req.method}`)
  next()
})

// Middleware 2
app.use((req, res, next) => {
  console.log("m2")
  next() 
})

app.get("/", (req, res) => {
  res.send("Hi im GET request")
})
app.get("/about", (req, res) => {
  res.send("Hi im GET request from about")
})
 
app.listen(3000)