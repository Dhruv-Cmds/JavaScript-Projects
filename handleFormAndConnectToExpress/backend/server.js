import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello");
});

app.post("/pp", (req, res) => {
    console.log(req.body);
    res.send("hi");
});

app.listen(3000, () => {
    console.log("Backend listening at http://localhost:3000");
});
