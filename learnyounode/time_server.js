"use strict";

var net = require('net');
var moment = require('moment');

net.createServer(function (socket) {
    socket.write(moment().format("YYYY-MM-DD HH:mm"));
    socket.write(moment().format("\n"));
    socket.end();
}).listen(process.argv[2]);


