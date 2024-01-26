import express from "express";
import cors from "cors";
import fs from "fs";
import path, {dirname, resolve} from "path";
import { fileURLToPath } from "url";


const router= express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const jokeDataPath = path.join(__dirname, "../elf", "data", "jokes.json");

const app=express();

const corsOptions = {
    origin: "PORT",
    credentials: true,
    methods: "GET",
    allowedHeaders: "Content-Type, Authorization",
    optionsSuccessStatus: 200,
}


app.use(cors(corsOptions));



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



console.log(await getJokes())


const PORT = process.env.PORT || 3000;
app.listen(3001, () => {
    console.log("elf şakaları 3001'de çalışıyor")
})

export default router;