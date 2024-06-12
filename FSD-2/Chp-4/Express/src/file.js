var express=require("express")
const app=express()
const multer=require("multer")
var path=require("path")
var fs=require("fs")
const staticpath=path.join(__dirname,"../public")
var str=multer.diskStorage({
    destination:"myfolder",
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
var upload=multer({storage:str}).single("mypic")
app.use(express.static(staticpath,{index:"fileform.html"}))
app.post("/uploadfile",upload,(req,res)=>{
    if(req.file){
        res.writeHead(200,{'content-type':['image/jpg','text/html']})
        res.write("<h1> Your File Is Send In "+req.file.destination+"with name as "+req.file.originalname+"</h1>")
        var img=fs.readFileSync("C:\\Sem 4\\Sem-4_Universirty\\FSD-2\\Chp-4\\myfolder\\"+req.file.originalname)
        res.write(img)
        res.send()
    }
})
app.listen(9899)