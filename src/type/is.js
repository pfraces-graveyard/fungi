var each = require('../array/each.js');

var datatype = (function () {
  var START = '[object '.length;
  var END = -(']'.length);
  var toString = Object.prototype.toString;
  
  return function (data) {
    return toString.call(data).slice(START, END).toLowerCase();
  };
})();

var is = (function (types) {
  var check = {};

  each(types, function (type) {
    check[type] = function (data) {
      return datatype(data) === type;
    };
  });

  return check;
})(['boolean', 'number', 'string', 'object', 'array']);

is.defined = function (data) {
  return typeof data !== 'undefined';
};

is.nil = function (data) {
  return data == null;
};

is.fn = function (data) {
  return datatype(data) === 'function';
}

module.exports = is;
