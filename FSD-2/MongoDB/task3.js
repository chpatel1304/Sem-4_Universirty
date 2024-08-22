var expr=require("express")
var app=expr()
const mg=require("mongoose")

mg.connect("mongodb://127.0.0.1:27017/mydbs")
    .then(()=>{
         console.log('Success');
    })
    .catch((err)=>{
        console.log(err); 
    })

mg.pluralize(null)
const myschema=new mg.Schema({
    uname:{type:String,required:true},
    password:{type:String,required:true}
},{versionKey:false})

const person=new mg.model("data1",myschema)

app.use(expr.static(__dirname,{index:"task3.html"}))
app.get("/process_get",(req,res)=>{
    const personData=new person({
        uname:req.query.uname,
        password:req.query.password
    }) 
    personData.save()
    res.send("Data Inserted")
})
app.listen(3000)                        