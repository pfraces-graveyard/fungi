var from = require('@fungi/array/from');
var apply = require('@fungi/fn/apply');
var concat = require('@fungi/array/concat');

var partial = function (/* fn, args... */) {
  var args = from(arguments);
  var fn = args.shift();

  return function (/* arguments... */) {
    return apply(fn, concat(args, arguments));
  };
};

module.exports = partial;
