var http = require('http');
var fs = require('fs');
var ccap = require('ccap')();//Instantiated ccap class

http.createServer(function (request, response) {

  if(request.url == '/favicon.ico')return response.end('');//Intercept request favicon.ico

  var ary = ccap.get();

  var txt = ary[0];

  var buf = ary[1];

  response.end(buf);

  console.log(txt);

  var imageBuffer = new Buffer(buf, 'base64');
  fs.writeFileSync('captcha.jpg', imageBuffer);

}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');
