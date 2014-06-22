"use strict";

var hl = require("highland");
var zlib = require('zlib');
var es = require('event-stream');

var newData = [];

var processInputThru = es.through(

  function write(data) {
    if( data.type === "genre" )
    {
      newData.push( {name:data.name,books:[]} );
    }
    if( data.type === "book" )
    {
      newData[ newData.length - 1 ].books.push(data.name);
    }
    if( newData.length > 1 )
    {
      this.emit('data',newData[ 0 ]);
      newData.shift();
    }
  },
  function end () { //optional
    if( newData ) {
      this.emit('data', newData[ 0 ]);
    }
    this.emit('end');
  });

module.exports = function () {
  return hl.pipeline( es.split(), es.parse(), processInputThru, es.stringify(), zlib.createGzip() );
};
