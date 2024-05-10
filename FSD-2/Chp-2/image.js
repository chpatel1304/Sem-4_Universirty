var fs=require("fs")
var h=require("http")
h.createServer(function (req,res){
    res.writeHead(200,{'content-type':'image/jpg'})
    var img=fs.readFileSync('APD07136.jpg')
    res.end(img)
}).listen(8081)