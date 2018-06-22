var each = function (arr, fn) {
  var length = arr.length;

  for (var index = 0; index < length; index++) {
    fn(arr[index], index);
  }
};

module.exports = each;
