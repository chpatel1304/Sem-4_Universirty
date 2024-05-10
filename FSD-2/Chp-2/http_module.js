var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  // res.write('Bye');
  // res.write("<h1>Hello World</h1>")
  res.write(req.url)
  res.end("GoodBye");
}).listen(8080);
// create hhtp webpage on whichi home page display welcome to home page student page display welcome to student page any other page not found