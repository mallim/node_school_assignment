"use strict";

var http = require('http');
var url = require('url');
var moment = require('moment');

var server = http.createServer( function( request, response ) {
    var body = "";

    if(request.method == "GET"){

        var url_parts = url.parse(request.url, true);
        var query = url_parts.query;
        var isoFormat = query.iso;

        if( url_parts.pathname === "/api/parsetime"){
            // console.log("isoFormat", isoFormat );
            var temp = moment(isoFormat);
            response.writeHead(200, { 'Content-Type': 'application/json' });
            var toReturn = {hour:temp.hour(),minute:temp.minute(),second:temp.second() };
            response.end( JSON.stringify( toReturn ) );
        }
        if( url_parts.pathname === "/api/unixtime"){
          var temp2 = moment(isoFormat);
          response.writeHead(200, { 'Content-Type': 'application/json' });
          response.end(JSON.stringify({unixtime:moment(temp2).valueOf()}));
        }

        response.writeHead(404);
        response.end();
    }

}).listen(process.argv[2]);

