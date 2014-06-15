"use strict";

var http = require('http');
var stream = require('stream');
var toUpper = require("./to_uppercase");

var liner = new stream.Transform( { objectMode: true } );
liner._transform = function (chunk, encoding, done) {
  // console.error("chunk=", chunk);
  if( chunk === null || ! chunk.length ){
    // this.push("");
    done();
  }
  var data = chunk.toString();
  // console.error("data=", data);
  if( data === null || ! data.length )
  {
    // this.push("");
    done();
  }
  if (this._lastLineData) data = this._lastLineData + data;

  var lines = data.split('\n');
  // console.error("lines len=", lines.length);
  this._lastLineData = lines.splice(lines.length-1,1)[0];

  lines.forEach(this.push.bind(this));
  done();
};

var server = http.createServer(function (req, res) {
  // req is an http.IncomingMessage, which is a Readable Stream
  // res is an http.ServerResponse, which is a Writable Stream
  if( req.method !== 'POST' ) return;

  if (req.method === 'POST') {
    req.pipe(liner).pipe(toUpper).pipe(res);
    res.end();
  }
});
server.listen(process.argv[2]);
