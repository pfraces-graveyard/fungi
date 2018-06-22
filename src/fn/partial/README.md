@fungi/fn/partial
=================

    partial(fn: function, args: array): function

Returns a function which when called will apply the provided function `fn`
to the concatenation of `args` and its arguments 

Install
-------

    npm install --save @fungi/fn/partial

Usage
-----

```js
var partial = require('@fungi/fn/partial');

var multiply = function (a, b) {
  return a * b;
};

var double = partial(multiply, 2);
console.log(double(3)); // 6
```

License
-------

ISC
