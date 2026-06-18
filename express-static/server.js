const express = require("express");
const path = require("path");

const app = express();

// custom middleware - for admin
const isAdmin = (req,res,next)=>{
    const user = {
        name:"jayanti thakor",
        role:"admin"
    }

    if(user.role == "admin"){
        next();
    }
    else{
        res.end("unAuthorized access.!!!");
    }
}

// middlewares
app.use(express.static(path.join(__dirname,"public")))

app.get("/admin",isAdmin,(req,res)=>{
    res.send("<h1>Welcome to Admin Dashboard.!</h1>")
})

app.listen(5000,()=>{
    console.log("Server is running on http://localhost:5000")
})