"use strict";

var duplexer = require('duplexer');
var es = require('event-stream');

module.exports = function (counter) {

  var counts = {};

  var through = es.through(

    function write(data) {
      counts[data.country] = (counts[data.country] || 0) + 1;
    },
    function end () { //optional
      counter.setCounts(counts);
    }
  );

  return duplexer(through, counter);

};


