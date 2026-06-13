import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

// server 
const app = express();

const PORT = process.env.PORT;

app.get('/',(req,res)=>{
    res.send("Server is working properly.!!")
})

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
})