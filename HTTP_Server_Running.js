const http=require("http");
const server=http.createServer((req,res)=>{
    res.write("Hello Honey");
    res.end();
});
server.listen(3000,()=>{
    console.log("Server is ruuning on post 3000");
})