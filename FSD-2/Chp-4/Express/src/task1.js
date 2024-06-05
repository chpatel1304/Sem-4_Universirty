var express=require("express")
var app=express()
var path=require("path")
const sp=path.join(__dirname,"../public")
app.use(express.static(sp,{index:'form1.html'}))
app.get("/calc",(req,res)=>{
    var n1=parseInt(req.query.n1)
    var n2=parseInt(req.query.n2)

    if (req.query.drop=="Addition"){
        res.send("Addition Is Performed And Answer is "+(n1+n2))
    }
    else if (req.query.drop=="Subtraction"){
        res.send("Subtraction Is Performed And Answer is "+(n1-n2))
    }
    else if (req.query.drop=="Multiplication"){
        res.send("Multiplication Is Performed And Answer is "+(n1*n2))
    }
    else if (req.query.drop=="Divison"){
        res.send("Divison Is Performed And Answer is "+(n1/n2))
    }
    else{
        res.send("Please Enter Any Operation")
    }

})
app.listen(6080)