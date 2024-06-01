var expr=require("express")
var app=expr()
app.get("/",(req,res)=>{
    res.set("content-type","text/html")
    res.write("<h1>Helloww</h1>")
    // res.send("Hie Send")
})
app.listen(5000,()=>{
    console.log("Server Stared");
})