import http from 'http';
import dotenv from 'dotenv';

dotenv.config();

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.writeHead(200,{"Content":"text/html"})
        res.end(`<h1>Welcome to Http Server.!</h1>`)
    }
    else if(req.url === "/about"){
        res.writeHead(200,{"Content":"text/html"})
        res.end(`<h1>Http Server.!</h1>
                <p>An HTTP server is a software program (or hardware running that software) that processes incoming client requests and delivers web data back over the internet using the Hypertext Transfer Protocol (HTTP). It forms the fundamental basis of communication for the entire World Wide Web</p>
            `)
    }
    else if(req.url === "/services"){
        res.writeHead(200,{"Content":"text/html"})
        res.end(`<h1>Http Server Services.!</h1>
                <p>An HTTP server is a software program (or hardware running that software) that processes incoming client requests and delivers web data back over the internet using the Hypertext Transfer Protocol (HTTP). It forms the fundamental basis of communication for the entire World Wide Web</p>
            `)
    }
    else{
        res.writeHead(200,{"Content":"text/html"})
        res.end(`<h1>Server is Working.!</h1>`)
    }
})

const port = process.env.PORT || 3000;


server.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})