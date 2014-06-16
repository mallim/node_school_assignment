"use strict";

/**
 * A simple upper-case stream converter.
 *
 * Source code from http://loose-bits.com/2012/08/02/nodejs-read-write-streams-pipes.html
 */
var UpperCaseStream = function () {
  this.readable = true;
  this.writable = true;
};

require("util").inherits(UpperCaseStream, require("stream"));

/**
 * Handle various params and upper-case string data.
 *
 * Signature can be in format of:
 *  - string, [encoding]
 *  - buffer
 *
 * Our example implementation hacks the data into a simpler
 # (string) form -- real implementations would need more.
 */
UpperCaseStream.prototype._transform = function (data) {
  // Here, we'll just shortcut to a string.
  data = data ? data.toString() : "";

  // Upper-case the string and emit data event with transformed data.
  this.emit("data", data.toUpperCase());
};

/**
 * Stream write (override).
 */
UpperCaseStream.prototype.write = function () {
  this._transform.apply(this, arguments);
};

/**
 * Stream end (override).
 */
UpperCaseStream.prototype.end = function () {
  this._transform.apply(this, arguments);
  this.emit("end");
};

module.exports = UpperCaseStream;