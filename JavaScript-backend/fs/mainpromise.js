import fs from "fs/promises";

let a = await fs.readFile("dhruv.txt")

console.log(a.toString())