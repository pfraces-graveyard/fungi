var each = require('@fungi/array/each');

var map = function (arr, fn) {
  var result = [];

  each(arr, function (item, index) {
    result[index] = fn(item, index);
  });

  return result;
};

module.exports = map;
