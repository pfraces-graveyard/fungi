var each = require('@fungi/array/each');
var is = require('@fungi/type/is');

var reduce = function (arr, fn, seed) {
  var acc = is.defined(seed) ? seed : arr.shift();

  each(arr, function (item, index) {
    acc = fn(acc, item, index);
  });

  return acc;
};

module.exports = reduce;
