var is = require('../type/is.js');
var arrayFrom = require('../array/arrayFrom.js');

var apply = function (fn, args) {
  return fn.apply(null, is.array(args) ? args : arrayFrom(args));
};

module.exports = apply;
