var is = require('@fungi/type/is');
var from = require('@fungi/array/from.js');

var apply = function (fn, args) {
  return fn.apply(null, is.array(args) ? args : from(args));
};

module.exports = apply;
