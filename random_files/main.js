/* You have to write a Node.js program to clear clutter inside of a directory and oraganize the contents of that directory into different folders */

/* for example, these files become:

name.jpg
name.png
name.pdf
ram.zip
raj.zip
name.jpg

*/

/* this:

jpg/name.jpg, jpg/cat.jpg 
png/name.png
pdf/name.pdf
zip/ram.zip zip/raj.zip

*/


import fs from "fs";
import path from "path";


let files = fs.readdirSync("./random_files");

files.forEach(file => {

    if (file.endsWith(".jpg")) {

        console.log(file)

        const sourcePath = path.join("random_files", file);
        // example:
        // file = "cat.jpg"
        // sourcePath = "random_files/cat.jpg"

        const folderPath = path.join("random_files", "jpg");
        // folderPath = "random_files/jpg"

        fs.mkdirSync(folderPath, { recursive: true })

        fs.renameSync(sourcePath, path.join(folderPath, file))

    }


    if (file.endsWith(".png")) {

        console.log(file)

        const sourcePath = path.join("random_files", file);
        const folderPath = path.join("random_files", "png");

        fs.mkdirSync(folderPath, { recursive: true })

        fs.renameSync(sourcePath, path.join(folderPath, file))

    }

    if (file.endsWith(".pdf")) {

        console.log(file)

        const sourcePath = path.join("random_files", file);
        const folderPath = path.join("random_files", "pdf");

        fs.mkdirSync(folderPath, { recursive: true })

        fs.renameSync(sourcePath, path.join(folderPath, file))

    }


    if (file.endsWith(".zip")) {

        console.log(file)

        const sourcePath = path.join("random_files", file);
        const folderPath = path.join("random_files", "zip");

        fs.mkdirSync(folderPath, { recursive: true })

        fs.renameSync(sourcePath, path.join(folderPath, file))

    }
});