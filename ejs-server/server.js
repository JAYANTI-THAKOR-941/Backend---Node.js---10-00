const express = require('express');

const app = express();

const products = require("./data/products");

// setup ejs
app.set("view engine","ejs");

// middlewares
app.use(express.urlencoded({extended:true}))

// get all products
app.get('/',(req,res)=>{
    res.render("index",{products});
})


// get add form
app.get('/add',(req,res)=>{
    res.render("add");
})

// add new product
app.post("/add",(req,res)=>{
    const {name,price} = req.body;

    products.push({
        id:products.length + 1,
        name,
        price
    })

    res.redirect('/')
})

// get edit form
app.get('/edit/:id',(req,res)=>{
    const product = products.find((p)=> p.id == req.params.id)
    res.render('edit',{product})
})

// update product
app.post("/update/:id",(req,res)=>{
    const product = products.find((p)=> p.id == req.params.id)

    product.name = req.body.name;
    product.price = req.body.price;

    res.redirect('/')
})


//delete
app.get("/delete/:id",(req,res)=>{
    const index = products.findIndex((p)=>p.id == req.params.id);

    products.splice(index,1);

    res.redirect('/')
})


app.listen(5000,()=>{
    console.log("Server is running on http://localhost:5000")
})


