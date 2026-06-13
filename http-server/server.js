const http = require('http');
const fs = require('fs');
// import http from 'http';

const PORT = 5000;

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        fs.readFile('index.html','utf8',(err,data)=>{
            if(err){
                res.writeHead(500,{"Content-Type" : "text/plain"})
                res.end("Failed to read file!")
            }
            res.writeHead(200,{"Content-Type" : "text/html"})
            res.end(data);
        })
    }
    else if(req.url === '/about'){
        fs.readFile('about.html','utf8',(err,data)=>{
            if(err){
                res.writeHead(500,{"Content-Type" : "text/plain"})
                res.end("Failed to read file!")
            }
            res.writeHead(200,{"Content-Type" : "text/html"})
            res.end(data);
        })
    }
    else{
        res.writeHead(500,{"Content-Type" : "text/plain"})
        res.end("Internal server error.!")
    }
})

server.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
})

