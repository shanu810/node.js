
const http = require('http')
const server = http.createServer((req,res)=>{
    // res.statusCode=200
    // res.setHeader('Content-Type','text/plain')
    // res.end('<h1>My first request</h1>')
    console.log(req.url)
})
server.listen('3000',()=>{
    console.log('server is running');
})


const http = require('http')
const server = http.createServer((req,res)=>{
    res.statusCode=200
    res.setHeader('Content-Type','text/plain')
    res.end('<h1>My first request</h1>')
})
server.listen('3000',()=>{
    console.log('server is running');
    console.log(__dirname);
    console.log(__filename);
})

// export code:
// let array1=['sanhar','shibin'];
// console.log(array1);
// export default(array1)
// module.exports=array1


// import code:
// const abc = require('./people')
import abc from './people.js'
console.log(abc);
