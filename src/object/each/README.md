@fungi/object/each
==================

    each(obj: object, fn: function): void

Iterates over the given object, calling the given function for each attribute

    fn(item, index)

`fn` is called with the item and its index in `obj`

Install
-------

    npm install --save @fungi/object/each

Usage
-----

```js
var each = require('@fungi/object/each');

each({ a: 1, b: 2, c: 3 }, function (item, index) {
  console.log(index + ') ' + item);
});

// a) 1
// b) 2
// c) 3
```

License
-------

ISC
