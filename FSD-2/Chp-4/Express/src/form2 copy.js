var express=require("express")
var app=express()
var cp=require("cookie-parser")
app.use(cp())
var path=require("path")
const staticpath=path.join(__dirname,"../public")
app.use(express.static(staticpath,{"index":"form2.html"}))
app.get("/",(req,res)=>{
   
})

app.get("/mid",(req,res,next)=>{
    name1=JSON.stringify(req.query)
    res.cookie("info",name1)
    res.set("content-type","text/html")
    res.write("Submitted")
    res.write(req.cookies.info)
    res.write("<a href=form2.html> Logout! </a>")
    next()
    res.send()
})

app.listen(9090)
