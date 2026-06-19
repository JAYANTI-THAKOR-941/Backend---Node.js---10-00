import mongoose from "mongoose";

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database Connected successfully.!")
    }
    catch(err){
        console.log("Failed to connect database.!!")
    }
}

export default connectDB;