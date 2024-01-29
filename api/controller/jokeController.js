import express from "express";
import fs from "fs";
import path, {dirname, resolve} from "path";
import { fileURLToPath } from "url";

const router= express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const jokeDataPath = path.join(__dirname, "..", "data", "jokes.json");


//tüm şakalar
router.get("/", async(request,response) => {
    getJokes()
    .then((jokes) =>response.json(jokes))
    .catch((error) =>response.status(401).json(error))
})



const getJokes= () => {
    return new Promise((resolve,reject)=> {
        fs.readFile(jokeDataPath, "utf8", (err,data) => {
            err ? reject(err): resolve(JSON.parse(data));
        });
    });
};


export default router;