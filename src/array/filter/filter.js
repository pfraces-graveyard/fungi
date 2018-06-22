var each = require('@fungi/array/each');

var filter = function (arr, fn) {
  var result = [];

  each(arr, function (item, index) {
    if (!fn(item, index)) { return; }
    result.push(item);
  });

  return result;
};

module.exports = filter;
