// which fetch file name form requested url and print that files data on hhtp 
var url = require("url")
var http=require("http")
http.createServer(function (req,res){
    res.writeHead(200,{'content-type':'text/html'})
    var url1=url.parse(req.url,true)
    res.write(url1)
}).listen(8082)