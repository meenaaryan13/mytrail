// syncronase 


const fs= require("fs");

//const data= fs.readFileSync("write.txt","utf8");
// console.log(data);
// console.log("After complete ");

// Asyncronase 


const data=fs.readFile("write.txt","utf-8",(err,data)=>{
    console.log(data);
});
console.log(" I am Aryan");
