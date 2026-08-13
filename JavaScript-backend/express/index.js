import express from "express"
import shop from "./routes/shop.js"
const app = express()

app.use("/shop", shop)


app.use("/index", express.static("."))

app.get("/", (req, res) => {
  res.send("Hi im GET request")
})

app.post("/", (req, res) => {
  res.send("Hi im POST request")
})

app.put("/", (req, res) => {
  res.send("Hi im PUT request")
})

app.delete("/", (req, res) => {
  res.send("Hi im DELETE request")
})


app.get("/index", (req, res) => {
  res.sendFile('index.html', {root: __dirname})
})

app.get("/api", (req, res) => {
  res.json({
    a: 1,
    b: 2,
    c: 3
  })
})


app.listen(3000)