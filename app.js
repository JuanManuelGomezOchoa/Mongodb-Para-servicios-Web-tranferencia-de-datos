import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { test } from "./backend/controllers/jugadoresController.js";

dotenv.config()
mongoose.connect(process.env.url_db)
.then(()=>{
    console.log("exito")
})
.catch((error)=>{
    console.log("error", error)
})

const app = express()
app.use(cors())
app.listen(4003, ()=>{
    console.log("El servidor se escucha")
})

test()