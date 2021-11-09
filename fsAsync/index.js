const fs=require("fs");

// fs.mkdir("thapa",(err)=>{
//   console.log("Created folder");
// })
const data=fs.writeFile("./thapa/Ass.txt"," I am JARWAL BOY",(err)=>{
  console.log(" CreATEED a fhile");
});
  
fs.appendFile("./thapa/Ass.txt"," And Meena ji ",(err)=>{
  console.log(" add more data ");
});

const date=fs.readFile("./thapa/Ass.txt","utf-8",(err,date)=>{
  console.log("Read fhiles ");
  console.log(date);
});

fs.rename("./thapa/Ass.txt","./thapa/Ruf.txt",(err)=>{
  console.log(" CHange name of this fhile");
});

fs.unlink("./thapa/Ruf.txt",(err)=>{
  console.log("Delete this fhile ");
});