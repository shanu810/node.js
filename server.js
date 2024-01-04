// const {error}=require("console");
// const fs=require('fs');
// // "type": "module",

// // fs.readFile('./text1.js',(err,data)=>{
// //     if(err){
// //         console.log(err);
// //     }
// //     else{(console.log(data.toString())
// //         )}
    
// // })
// // // fs.writeFile('./writefile',"sanhar",()=>{
// // //     console.log("write successfully");
// // // })
// // ``
// // // console.log()
// // console.log(fs.existsSync('./mkdir'));
// // fs.unlink('./text.js',(err)=>{
// //     if(err){
// //         console.log(err);
// //     }
// //     console.log("deleted");

    
// // })
// // fs.mkdir('./mkdir',(err)=>{
// //     if(err){
// //         console.log(err)
// //     }
// //     else{(console.log("successfully completed"))}
// // })





// const http = require('http')

// const server = http.createServer((req,res)=>{
//     console.log(req.url)
//     res.statusCode=200
//     res.setHeader('Content-Type','text/html')
//     fs.readFile('./views/project1.html',(err,data)=>{
//         if(err){
//             console.log(err);
//             res.end();
//         }else{
//             res.write(data);
//             res.end();
//         }
//     })
//     // res.end('<h1>My first request</h1>')
    
// })
// server.listen('3000',()=>{
//     console.log('server is running');
//     console.log(__dirname)
//     console.log(__filename);
// })
