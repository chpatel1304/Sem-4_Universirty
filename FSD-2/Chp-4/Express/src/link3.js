// scrpit print message in next line spliting by fullstop and use get method to submit the data html file contains form of text area for message and submit button 
var express=require("express")
var app=express()
var path=require("path")
const sp=path.join(__dirname,"../public")
app.use(express.static(sp,{index:'form.html'}))
app.get("/process_get",(req,res)=>{
    var resp=req.query.text.split(".")
    res.send(resp)
})
app.listen(6065)
