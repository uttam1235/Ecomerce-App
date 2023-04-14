import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from'./routes/authRoute.js';
import  cors from 'cors';
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'
import path from 'path';
import { fileURLToPath } from 'url';
//database config
connectDB();


// confrig env
dotenv.config()
//esmodula fix
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);


//rest object
const app=express()

//middle web
app.use(cors())
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'./client/build')))
//routes
app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/category",categoryRoutes);
app.use("/api/v1/product",productRoutes);

//resty api
app.use("*",function(req,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"))
});


//const port
const PORT=process.env.PORT||8080;
//run listen 
app.listen(PORT,()=>{
    console.log(`Server Running on ${process.env.DEV_MODE} mode on  ${PORT}`.bgCyan.white);
})
