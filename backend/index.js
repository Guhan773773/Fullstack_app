import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv"
import userRouter from "./router/useRouter.js";


const app = express();

app.use(bodyParser.json());

dotenv.config();

const PORT = process.env.PORT || 5000;
const URL  =process.env.MONGO_URL;

mongoose
        .connect(URL)
        .then(()=>{
            console.log("DB CONECCTED")
            app.listen(PORT,()=>{
                console.log("server connnected")
            })
        })

app.use('/user',userRouter);
