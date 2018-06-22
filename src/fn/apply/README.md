fungi/fn/apply
==============

    apply(fn: function, args: array): any

Applies the given function to the given array of arguments and returns its
returning value

Install
-------

    npm install --save @fungi/fn/apply

Usage
-----

```js
var apply = require('@fungi/fn/apply');
console.log(apply(Math.max, [3, 7, 44, 21])); // 44
```

License
-------

ISC
