"use strict";

var crypto = require('crypto');
var rs = process.stdin;
var os = process.stdout;
rs.pipe(crypto.createDecipher('aes256', process.argv[2])) // transform the data
  .pipe(os); // write the data to the output stream