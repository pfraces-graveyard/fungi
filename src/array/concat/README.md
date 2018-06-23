@fungi/array.concat
===================

    concat(arr1: array, arr2: array): array

Returns a new array by concatenating two given arrays or array-like objects

Install
-------

    npm install --save @fungi/array.concat

Usage
-----

```js
var concat = require('@fungi/array/concat');

var realArray = ['a', 'b', 'c'];

var arrayLike = {
  '0': 'x',
  '1': 'y',
  '2': 'z',
  'length': 3
};

console.log(concat(realArray, arrayLike)); // ['a', 'b', 'c', 'x', 'y', 'z']
console.log(concat(arrayLike, realArray)); // ['x', 'y', 'z', 'a', 'b', 'c']
```

License
-------

ISC
