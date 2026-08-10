const fs=require("fs");
const readStream=fs.createReadStream("read.txt");
readStream.on("data",chunk=>{
    console.log(chunk.toString());
});