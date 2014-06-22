"use strict";

var rs = process.stdin;
var Transform = require('stream').Transform;

var typedArrayTransform = new Transform({objectMode: true});
typedArrayTransform._transform = function(data, encoding, done) {
  if(data=== undefined) return;
  console.log(JSON.stringify(new Uint8Array(data)));
  done();
};
rs.pipe(typedArrayTransform);



