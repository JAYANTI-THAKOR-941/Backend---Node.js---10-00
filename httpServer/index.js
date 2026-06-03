const http = require('http');
// const path = require('path')
// import http from 'http'

const server = http.createServer((req,res)=>{
    res.end("Welcome to Http Server.!!");
})

server.listen(5000,()=>{
    console.log("SERVER IS RUNNING ON : http://localhost:5000");
})