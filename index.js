var http =require('http');

var server =http.creeateServer(function(req, res) {
  res.writeHeader(200, {'Content-Type': 'text/plain; charset=utf-8'});
  res.end('hello');
});
server.listen(4000, '127.0.0.1');
console.log("Сервер порт 4000");
