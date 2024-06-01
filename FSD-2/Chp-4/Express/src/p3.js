var expr=require("express")
var app=expr()

app.get("/things/:name/:id",(req,res)=>{
    res.write("The Id You Entered Is : "+req.params.id)
    res.write("The Name You Entered is : "+req.params.name)
    res.send()
})
app.listen(8080)