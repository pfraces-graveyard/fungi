@fungi/array/filter
===================

    filter(arr: array, fn: function): array

Returns a new array with the elements of the given array which satisfy the
given predicate

    fn(item, index)

`fn` is called with the item and its index in `arr`

Install
-------

    npm install --save @fungi/array/filter

Usage
-----

```js
var filter = require('@fungi/array/filter');

var isOdd = function (value) {
  return value % 2;
};

console.log(filter([1, 2, 3, 4, 5, 6, 7], isOdd)); // [1, 3, 5, 7]
```

License
-------

ISC
