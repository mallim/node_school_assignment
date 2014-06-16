"use strict";

var spawn = require('child_process').spawn;
var DuplexStream = require("./DuplexStream");

module.exports = function (cmd, args) {
  // spawn the process and return a single stream
  var child = spawn(cmd, args);
  // joining together the stdin and stdout here
  return new DuplexStream(child.stdin, child.stdout);
};
