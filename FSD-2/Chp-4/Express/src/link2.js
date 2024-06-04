const { log } = require("console")
var express=require("express")
var app=express()
var path=require("path")

const staticpath=path.join(__dirname,"../public")
app.use(express.static(staticpath))
app.listen(5252)
console.log(staticpath);
