const fs=require('fs');
const routesHandler=(req,res)=>{
const url=req.url;
if(url==='/')
{
    fs.readFile('./message.txt',{encoding:'utf-8'},(err,data)=>{
        if(err) console.log(err);
    res.setHeader('Content-Type','text/html');
    res.write(
        `
        <html>
        <head><title>Enter Message</title></head>
        `
    )
    res.write(
        `<body>
        ${data}
        <form action="/message" method="POST">
        <input type='text' name='message'></input>
        <button type='submit'>Send</button>
        </form>
        </body>`)
    res.write(`</html>`);
    res.statusCode=200;
    res.end();

});
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
}

module.exports={
    routesHandler:routesHandler
}