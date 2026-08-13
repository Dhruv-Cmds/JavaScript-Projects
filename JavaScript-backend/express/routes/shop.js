import express from "express";

const shop = express.Router()

shop.get("/", (req, res) => {
    res.send("Hi im get req")
})

shop.get("/about", (req, res) => {
    res.send("Hi im get req again but from about end point")
})

shop.get("/blogpost/:slug", (req, res) => {
    res.send(`Hi im get req again but this time im from blogpost end point ${req.params.slug}`)
})

export default shop;