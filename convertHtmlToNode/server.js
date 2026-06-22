const express = require("express");
const path = require("path");

const app = express();

// static 
app.use(express.static(path.join(__dirname,"public")));

// middlewares
const isAdmin = (req,res,next)=>{
    const user = {
        name:"AdminUser",
        role:"user"
    }

    if(user.role == "admin"){
        next();
    }
    else{
        res.end("UnAuthorized access.!!")
    }
}


app.get("/admin-dashboard",isAdmin,(req,res)=>{
    res.send("<h2>Welcome to in Admin Dashboard.!</h2>")
})

app.listen(5000,()=>{
    console.log("Server is running on http://localhost:5000")
})