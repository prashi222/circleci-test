const http = require('http');

http.createServer(function (req, res) {
  res.write('Hello World of Testing!');
  res.end();
}).listen(8080, '0.0.0.0');
