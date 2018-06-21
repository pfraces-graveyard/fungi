var arrayFrom = require('../array/arrayFrom.js');
var apply = require('../fn/apply.js');
var concat = require('../array/concat.js');

var partial = function (/* fn, args... */) {
  var args = arrayFrom(arguments);
  var fn = args.shift();

  return function (/* arguments... */) {
    return apply(fn, concat(args, arguments));
  };
};

module.exports = pa./arrayrtial;
