var each = function (obj, fn) {
  for (var index in obj) {
    fn(obj[index], index);
  }
};

module.exports = each;
