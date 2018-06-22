var each = require('./each.js');
var is = require('../type/is.js');

var reduce = function (arr, fn, seed) {
  var acc = is.defined(seed) ? seed : arr.shift();

  each(arr, function (item, index) {
    acc = fn(acc, item, index);
  });

  return acc;
};

module.exports = reduce;
