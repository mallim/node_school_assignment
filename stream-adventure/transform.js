"use strict";

var rs = process.stdin;
var os = process.stdout;

var UpperCaseStream = require("./UpperCaseStream");
var toUpper2 = new UpperCaseStream();

rs.pipe(toUpper2)
  .pipe(os); // write the data to the output stream
