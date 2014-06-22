"use strict";

var rs = process.stdin;
var os = process.stdout;

var Transform = require('stream').Transform;

var modifyingBuffer = new Transform({objectMode: true});
modifyingBuffer._transform = function(data, encoding, done) {

  if(data=== undefined) return;

  // console.error("data=", data );
  for (var i = 0; i < data.length; i++) {
    if (data[i] === 0x2e) data[i] = 0x21;
  }

  console.log(data);
  // this.push(data);
  done();
};

rs.pipe(modifyingBuffer);


