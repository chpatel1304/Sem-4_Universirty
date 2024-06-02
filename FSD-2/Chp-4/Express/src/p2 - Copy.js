var expr=require("express")
var app=expr()
app.get("/:id",(req,res)=>{
    res.send("The Id You Entered is "+req.params.id)
})
app.listen(5001)