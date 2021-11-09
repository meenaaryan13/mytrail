const fs = require("fs");


// create new fhile
fs.writeFileSync('read.txt'," Aryan ji meena,Welcome my new fhile ");
fs.appendFileSync("read.txt",  "  helo mr.How are you ");


// reda data any fhile 
// const a=fs.readFileSync("read.txt");
// o=a.toString();
// console.log(o);


// Rename file name

// fs.renameSync("read.txt","readwrite.txt");
