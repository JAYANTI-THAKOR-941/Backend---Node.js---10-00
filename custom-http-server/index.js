const http = require("http");

const PORT = 5000;

const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        res.writeHead(200,{"Content-Type" : "text/html"});
        res.end("<h1>Welcome to Http Server.!</h1>");
    }
    else if(req.url == "/about"){
        res.writeHead(200,{"Content-Type" : "text/html"});
        res.end("<h1>About Http Server</h1>");
    }
    else if(req.url == "/contact"){
        res.writeHead(200,{"Content-Type" : "text/html"});
        res.end("<h1>Contact - 8160041921</h1>");
    }
    else{
        res.writeHead(404,{"Content-Type" : "text/html"});
        res.end("<h1>Page not found.!</h1>");
    }
})

server.listen(PORT,()=>{
    console.log(`Server in running on http://localhost:${PORT}`)
})