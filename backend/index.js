import express from 'express';
import dotenv from 'dotenv';
import databaseConnection from './utils/database.js';
import cookieParser from 'cookie-parser';
import userRoute from "./routes/userRoute.js"
import cors from "cors"
databaseConnection();
dotenv.config()

const app=express();
//middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
const corsoption={
    origin :"http://localhost:3000",
    credentials:true
}
app.use(cors(corsoption));
//api

app.use("/api/v1/user",userRoute);
app.listen(process.env.PORT,()=>{
console.log(`Server listen at ${process.env.PORT}`);
}) 