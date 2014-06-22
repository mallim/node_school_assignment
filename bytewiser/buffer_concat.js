"use strict";

var es = require("event-stream");

var result = new Buffer("");

var through = es.through(
  function write(data) {
    result = Buffer.concat( [ result, data ] );
  },
  function end () { //optional
    console.log(result);
    this.emit('end');
  }
);

process.stdin.pipe(through);


