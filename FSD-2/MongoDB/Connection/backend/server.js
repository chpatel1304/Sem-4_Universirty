const express=require("express")
const mg=require("mongoose")
const bodyparser=require("body-parser")
const cors=require("cors")
const app=express()
app.use(cors())
app.use(bodyparser.json())

mg.connect("mongodb://127.0.0.1:27017/User")
    .then(()=>{
         console.log('Success');
    })
    .catch((err)=>{
        console.log(err); 
    })

mg.pluralize(null)

const userschema=new mg.Schema({
    username:{type:String,required:true}
},{versionKey:false})

const user=new mg.model("user",userschema)

