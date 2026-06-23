import express from "express";
import dotenv from 'dotenv';
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000

// database connection
connectDB();

// middlewares
app.use(express.json());

//import routes
import productRoutes from './routes/productRoutes.js';

app.use('/api/product',productRoutes);

// http://localhost:5000/api/product/create
// http://localhost:5000/api/product/update/:id
// http://localhost:5000/api/product/delete/:id
// http://localhost:5000/api/product/all
// http://localhost:5000/api/product/:id

app.get("/",(req,res)=>{
    res.send("<h1>BookStore Server is Working.!</h1>")
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})