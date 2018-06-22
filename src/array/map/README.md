@fungi/array/map
================

    map(arr: array, fn: function): array

Returns a new array by projecting each element of the given array through the
the given function

    fn(item, index)

`fn` is called with the item and its index in `arr`

Install
-------

    npm install --save @fungi/array/map

Usage
-----

```js
var map = require('@fungi/array/map');

var numbers = [1, 2, 3, 4];

var doubles = map(numbers, function (x) {
  return x * 2
});

console.log(doubles); // [2, 4, 6, 8]
```

License
-------

ISC
