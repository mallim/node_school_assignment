"use strict";

var http = require('http');

var callback = function(response) {

    var str = '';

    //another chunk of data has been recieved, so append it to `str`
    response.on('data', function (chunk) {
        // console.log("chunk=", chunk );
        str += chunk +"\n";
    });

    //the whole response has been recieved, so we just print it out here
    response.on('end', function () {
        process.stdout.write(str);
    });
};

http.get(process.argv[2], callback).end();
