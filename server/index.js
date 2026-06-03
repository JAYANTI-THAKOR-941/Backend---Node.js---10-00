// module js syntax
// import http from 'http';

// common js syntax
const http = require('http')

const server = http.createServer((req,res)=>{
    res.end("Server is running.!")
})

server.listen(3000,()=>{
    console.log('SERVER IS RUNNING ON : http://localhost:3000')
})