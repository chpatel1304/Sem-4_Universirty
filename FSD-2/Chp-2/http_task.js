// create hhtp webpage on whichi home page display welcome to home page student page display welcome to student page any other page not found
var http = require('http');
const { text } = require('stream/consumers');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  var a={'sub':['FSD','PY']}
  text=JSON.stringify(a)
  res.write(text)
  res.end()
  
}).listen(8080);