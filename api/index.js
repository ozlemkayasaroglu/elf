import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser"

import jokeController from "./controller/jokeController.js";

const app=express();

const LOCAL_HOST = process.env.LOCAL_HOST || "http://localhost:3000";

const corsOptions = {
    origin: LOCAL_HOST,
    credentials: true,
    methods: "GET",
    allowedHeaders: "Content-Type, Authorization",
    optionsSuccessStatus: 200,

}


app.use(cors(corsOptions));
app.use(cookieParser());
app.use(bodyParser.json());

app.use("/joke", jokeController)



app.listen(3001, () => {
    console.log("elf şakaları 3001'de çalışıyor")
})

