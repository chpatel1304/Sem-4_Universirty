var a=require("fs")
a.mkdirSync("Hello")
a.writeFileSync("Hello/user.txt","Hello")
a.appendFileSync("Hello/user.txt"," \nNode Js Here")
var data=a.readFileSync("Hello/user.txt","utf-8")
console.log(data)