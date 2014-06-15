"use strict";

var stream = require('stream');
var liner = require('./liner');

var transformer = new stream.Transform( { objectMode: true } );
transformer._transform = function (line, encoding, done) {
  // console.error("Incoming line", line);
  if( this.counter === undefined ) this.counter = 0;
  this.counter++;
  // console.error("counter=", this.counter);
  // console.error("line=", line );
  if( line === undefined || line === null ) {
    // this.push("\n");
    done();
  }

  var result = "";
  if( this.counter % 2 === 1 )
  {
    result = line.toLowerCase();
  }
  else
  {
    result = line.toUpperCase();
  }
  // console.error("result=", result );
  this.push( result + "\n");
  done();
};

transformer._flush = function (done) {
  this.push( "");
  done();
};

var rs = process.stdin;
var os = process.stdout;

// pipe the input to the output, via transformation functions
rs.pipe(liner)
  .pipe(transformer) // transform the data
  .pipe(os); // write the data to the output stream
