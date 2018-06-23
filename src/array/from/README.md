@fungi/array.from
=================

Creates a new array from the given array-like object

Install
-------

    npm install --save @fungi/array.from

Usage
-----

```js
var from = require('@fungi/array/from');

var arrayLike = {
  0: 'foo',
  1: 'bar',
  2: 'qux',
  length: 3
};

from(arrayLike).slice(1); // ['bar', 'qux']
```

License
-------

ISC
