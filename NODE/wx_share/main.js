// live-server
// commonjs 模块化方案
const http = require('http');  ///require（请求）一个内置模块
const https = require('https');
let i=1;

http
    .createServer(function(request,response){
        i++;
        response.end(`hello world${i}`);
    })
    .listen(3000);

// web服务就是一个HTTP访问的服务