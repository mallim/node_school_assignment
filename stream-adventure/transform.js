"use strict";

var liner = require('./liner');
var toUpper = require("./to_uppercase");
var rs = process.stdin;
var os = process.stdout;

// pipe the input to the output, via transformation functions
rs.pipe(liner) // transform the input stream into per-line events
  .pipe(toUpper) // transform the data
  .pipe(os); // write the data to the output stream
