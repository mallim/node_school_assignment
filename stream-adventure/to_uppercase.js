"use strict";

var stream = require('stream');

var transformer = new stream.Transform( { objectMode: true } );
transformer._transform = function (line, encoding, done) {
  // console.error(line);
  this.push( line.toUpperCase() + "\n");
  done();
};

module.exports = transformer;
