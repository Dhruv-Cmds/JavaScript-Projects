import express from "express";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.set("view engine", "ejs");

app.use(express.static(join(__dirname, "public")));

app.get("/", (req, res) => {

  let arr = [35, 535, 345]

  res.render("index", {
    siteName: "Dhruv",
    searchText: "Search Now",
    arr
  });
});

app.get("/blog/:slug", (req, res) => {
  res.render("index", {
    blogTitle: req.params.slug,
    blogContent: "This blog page is rendered with EJS.",
  });
});

app.listen(3000);
