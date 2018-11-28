const http = require('http');

var port = 8080,
    ip   = '0.0.0.0';

const server = http.createServer((req, res) => {
  console.log('handling a request for %s', req.url);
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  var idxVerb = req.url.indexOf("say_hello");
  console.log('index of say_hello is %s', idxVerb);
  
  
  if (idxVerb == 1) {
	  var strName = req.url.substring(11);
	  res.end('Hello, '+ strName + '\n');
  } else {
	  res.end('Hello, World!\n');
  }
  
});

server.listen(port, ip, () => {
  console.log('Server running at http://%s:%s/', ip, port);
});