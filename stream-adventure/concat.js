"use strict";

var rs = process.stdin;
var os = process.stdout;
var stream = require('stream');
var concat = new stream.Transform();

concat.buffers = [];
concat._transform = function (chunk, encoding, done) {
  // console.error("chunk=",chunk);
  if( chunk == null ){
    process.stdout.write( "" );
    done();
  }
  this.buffers.push(chunk);
  done();
};

concat._flush = function(done){
  if( ! this.buffers.length  ) done();
  var result = Buffer.concat( this.buffers ).toString();
  process.stdout.write( result.split("").reverse().join("") );
  done();
};

// pipe the input to the output, via transformation functions
rs.pipe(concat); // transform the input stream into per-line events

