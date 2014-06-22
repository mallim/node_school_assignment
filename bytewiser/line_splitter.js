"use strict";

var es = require("event-stream");

var fs = require('fs');

var through = es.through(
  function write(data) {
    console.log(new Buffer(data));
  }
);

fs.createReadStream(process.argv[2]).pipe(es.split()).pipe(through);


