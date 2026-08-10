const fs=require("fs");
const writeStream=fs.createWriteStream("write.txt");
writeStream.write("Hello, this is a write stream example.");
writeStream.end();