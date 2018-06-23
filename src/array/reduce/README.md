@fungi/array.reduce
===================

    reduce(arr: array, fn: function, seed?: <T>): T

Reduces the given array or array-like object by passing its elements to the
given function and accumulating its results

    fn(acc, item, index)

`fn` is called with the accumulator, the item and its index in `arr`

If no `seed` is provided the first element of `arr` is used as initial `acc`
and the iteration starts with the second element

Install
-------

    npm install --save @fungi/array.reduce

Usage
-----

```js
var reduce = require('@fungi/array/reduce');

var sum = function (a, b) {
  return a + b;
};

console.log(reduce([1, 2, 3, 4], sum)); // 10
```

License
-------

ISC
