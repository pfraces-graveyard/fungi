@fungi/array/each
=================

    each(arr: array, fn: function): void

Iterates over the given array or array-like object, calling the given function
for each element

    fn(item, index)

`fn` is called with the item and its index in `arr`
=
Install
-------

    npm install --save @fungi/array/each

Usage
-----

```js
var each = require('@fungi/array/each');

each(['foo', 'bar', 'qux'], function (item, index) {
  console.log(index + ': ' + item);
});

// 0: foo
// 1: bar
// 2: qux
```

License
-------

ISC
