var is = require('../type/is.js');
var arrayFrom = require('../array/arrayFrom.js');

var concat = function (a, b) {
  return []
    .concat(is.array(a) ? a : arrayFrom(a))
    .concat(is.array(b) ? b : arrayFrom(b));
};

module.exports = concat;
