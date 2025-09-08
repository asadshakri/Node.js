const http=require('http');
const routes=require('./routes');
const server=http.createServer(routes.routesHandler)

server.listen(3000,()=>{
    console.log("Server  is running at port 3000");
});