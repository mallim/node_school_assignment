"use strict";

var http = require('http');

var server = http.createServer( function( request, response ) {
    var body = "";

    if(request.method == "GET") return;
    if( request.method == "POST" )
    {
        request.on('data', function(chunk) {
            body += chunk;
        });
        request.on('end', function () {
            response.writeHead(200);
            response.end(body.toUpperCase());
        });
    }

}).listen(process.argv[2]);
