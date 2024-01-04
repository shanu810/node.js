// stream and buffer
const fs = require("fs")
const readstream = fs.createReadStream('./new.txt',{encoding:'utf-8'})
const writestream = fs.createWriteStream('./wrkspace.js')
readstream.on('data',(chunk)=>{
    
    console.log("-----------------------------new chunk\n");
    console.log(chunk)
    writestream.write(chunk)
})