var express=require("express")
var app=express()
var path=require("path")
const sp=path.join(__dirname,"../public")
app.use(express.static(sp,{index:'form.html'}))
app.get("/process_get",(req,res)=>{
    const resp={fname:req.query.uname,
                pass:req.query.pass,
                comm:req.query.cmnt
    }
    res.send(resp)
})
app.listen(6060)
// scrpit print message in next line spliting by fullstop and use get method to submit the data html file contains form of text area for message and submit button 