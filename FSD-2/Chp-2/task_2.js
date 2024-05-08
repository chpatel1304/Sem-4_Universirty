var fs=require("fs")
var d={'name':'yasvi','age':'2'}
fs.writeFileSync("task2.txt",JSON.stringify(d))
var con=fs.readFileSync("task2.txt","utf-8")
console.log(con);
console.log(JSON.parse(con));