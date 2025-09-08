const http=require('http');
const myServer=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    if(req.url=="/"){
        res.statusCode=200;
        res.end("<h1>hello World</h1>");
    }
    else
    {
        if(req.url=="/home"){
            res.statusCode=200;
            res.end("<h1>Welcome home</h1>");
        }
        else if(req.url=="/about"){
            res.statusCode=200;
            res.end("<h1>Welcome to about us</h1>");
        }
        else if(req.url=="/node"){
            res.statusCode=200;
            res.end("<h1>Welcome to node js project</h1>");
        }
        else{
            res.statusCode=404;
            res.end("<h1>404! Page not found</h1>");
        }
    }
});
myServer.listen(3000,()=>{
    console.log("Server is running at port 3000");
});