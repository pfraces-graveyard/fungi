var each = require('@fungi/object/each');

var datatype = (function () {
  var START = '[object '.length;
  var END = -(']'.length);
  var toString = Object.prototype.toString;
  
  return function (data) {
    return toString.call(data).slice(START, END);
  };
})();

var is = (function (types) {
  var typeChecks = {};

  each(types, function (type, index) {
    typeChecks[index] = function (data) {
      return datatype(data) === type;
    };
  });

  return typeChecks;
})({
  bool:   'Boolean',
  number: 'Number',
  string: 'String',
  object: 'Object',
  array:  'Array',
  fn:     'Function'
});

is.defined = function (data) {
  return typeof data !== 'undefined';
};

is.nil = function (data) {
  return data == null;
};

module.exports = is;
