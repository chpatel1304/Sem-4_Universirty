var url = require("url")
var http=require("http")
// var addr="http://localhost:8080/default.html?year=2024&Month=Feb"
// var q=url.parse(addr,true)
// var year=q.query.year
// var month=q.query.Month
http.createServer(function (req,res){
    res.writeHead(200,{'content-type':'text/html'})
    var url1=url.parse(req.url,true).query
    var text =url1.year+""+url1.month
    res.end(text)
}).listen(8085)