"use strict";

/**
 * Idea from http://stackoverflow.com/questions/23387960/how-to-solve-nodeschools-duplexer-challange-without-the-duplexer-package
 *
 * @type {exports}
 */
var Stream = require("stream");

var DuplexStream = function (stdin, stdout) {
  Stream.Duplex.call(this);
  this.stdin = stdin;
  this.stdout = stdout;
};

require("util").inherits(DuplexStream, Stream.Duplex);

DuplexStream.prototype._write = function (chunk, enc, cb) {
  this.stdin.write(chunk, enc, cb);
};

DuplexStream.prototype._read = function (size) {
  return this.stdout.read(size);
};

DuplexStream.prototype.end = function (chunk, enc, cb) {
  this.stdin.end(chunk, enc, cb);
};

module.exports = DuplexStream;
