import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

dotenv.config();

const app = express();

// database connection
connectDB();

const PORT = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("Server is working.!!")
})

// middlewares
app.use(express.json())

// import routes
import userRoutes from './routes/userRoutes.js';

app.use("/api/user",userRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})

