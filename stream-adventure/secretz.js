"use strict";

var crypto = require('crypto');
var zlib = require('zlib');
var tarStream = require('tar-stream');
var extract = tarStream.extract();
extract.on('entry', function(header, stream, callback) {

  if (header.type !== 'file') {
    callback();
    return;
  }

  stream.pipe(crypto.createHash('md5', { encoding: 'hex' }))
        .pipe(process.stdout);
  callback();
  stream.on('end', function() {
    if (header.type === 'file') process.stdout.write( " " + header.name + "\n");
  });
});

var cipher = process.argv[2];
var pw = process.argv[3];
process.stdin
  .pipe(crypto.createDecipher(cipher, pw))
  .pipe(zlib.createGunzip())
  .pipe(extract);