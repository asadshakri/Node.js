const fs = require('fs');
const http=require('http');
const server=http.createServer((req,res)=>{
    const url=req.url;
    if(url==='/')
    {
        res.setHeader('Content-Type','text/html');
        res.end(
            `<form action="/message" method="POST">
            <label>Name:</label>
            <input type='text' name='username'></input>
            <button type='submit'>Add</button>
            </form>`
            );
    }
    else{
        if(req.url==="/message"){
            const body=[];
            req.on('data',(chunk)=>{
                body.push(chunk);
            });
            req.on('end',()=>{
                const parseBody=Buffer.concat(body).toString();
                const message=parseBody.split('=');
                    console.log(message);
                 fs.writeFile("./message.txt",message[1],(err)=>{
                    res.statusCode=302;  //redirect
                    res.setHeader('Location','/');
                    res.end();
                }
                );
            });
        }
    }
});

server.listen(3000,()=>{
    console.log("Server  is running at port 3000");
});