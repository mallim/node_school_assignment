"use strict";

var _ = require("lodash");

var bytes2= _.chain(process.argv)
               .filter(function(data) { return !isNaN(data); } )
               .map(function( arg ) {
                  return parseInt(arg);
                })
               .valueOf();

console.log(new Buffer(bytes2).toString('hex'));

