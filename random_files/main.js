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