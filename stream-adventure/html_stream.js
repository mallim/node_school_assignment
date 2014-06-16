"use strict";
var trumpet = require('trumpet');
var tr = trumpet();

var rs = process.stdin;
var os = process.stdout;

var UpperCaseStream = require("./UpperCaseStream");
var toUpper2 = new UpperCaseStream();

tr.selectAll('.loud', function (span) {
  var stream = span.createStream();
  stream.pipe(toUpper2).pipe(stream);
});

rs.pipe(tr).pipe(os);
