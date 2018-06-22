var is = require('@fungi/type/is');
var array = require('@fungi/array/from.js');

var _concat = Array.prototype.concat;

var concat = function (a, b) {
  return _concat.call(is.array(a) ? a : array(a), is.array(b) ? b : array(b));
};

module.exports = concat;
