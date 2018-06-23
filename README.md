fungi
=====

Functional JavaScript Helpers

Type
----

### @fungi/type.is

A collection of basic type checks

```js
var is = require('@fungi/type/is');
console.log(is.number(3)); // true
console.log(is.defined()); // false
console.log(is.nil()); // true
```

Function
--------

### @fungi/fn.apply

    apply(fn: function, args: array): any

Applies the given function to the given array of arguments and returns its
returning value

```js
var apply = require('@fungi/fn/apply');
console.log(apply(Math.max, [3, 7, 44, 21])); // 44
```

### @fungi/fn.partial

    partial(fn: function, args: array): function

Returns a function which when called will apply the provided function `fn`
to the concatenation of `args` and its arguments

```js
var partial = require('@fungi/fn/partial');

var multiply = function (a, b) {
  return a * b;
};

var double = partial(multiply, 2);
console.log(double(3)); // 6
```

Array
-----

### @fungi/array.from

Creates a new array from the given array-like object

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

### @fungi/array.concat

    concat(arr1: array, arr2: array): array

Returns a new array by concatenating two given arrays or array-like objects

```js
var concat = require('@fungi/array/concat');
console.log(concat([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
```

### @fungi/array.each

    each(arr: array, fn: function): void

Iterates over the given array or array-like object, calling the given function
for each element

```js
var each = require('@fungi/array/each');
var acc = 0;

each([1, 2, 3, 4], function (item) {
  acc =+ item;
});

console.log(acc); // 10
```

### @fungi/array.map

    map(arr: array, fn: function): array

Returns a new array by projecting each element of the given array through the
the given function

```js
var map = require('@fungi/array/map');
var numbers = [1, 2, 3, 4];

var doubles = map(numbers, function (x) {
  return x * 2
});

console.log(doubles); // [2, 4, 6, 8]
```

### @fungi/array.filter

    filter(arr: array, fn: function): array

Returns a new array with the elements of the given array which satisfy the
given predicate

```js
var filter = require('@fungi/array/filter');
var numbers = [1, 2, 3, 4];

var odds = filter(numbers, function (number) {
  return number % 2;
});

console.log(odds); // [1, 3]
```

### @fungi/array.reduce

    reduce(arr: array, fn: function, seed?: <T>): T

Reduces the given array or array-like object by passing its elements to the
given function and accumulating its results

```js
var reduce = require('@fungi/array/reduce');

var sum = function (a, b) {
  return a + b;
};

console.log(reduce([1, 2, 3, 4], sum)); // 10
```

Object
------

### @fungi/object.each

    each(obj: object, fn: function): void

Iterates over the given object, calling the given function for each attribute

```js
var each = require('@fungi/object/each');
var acc = 0;

each({ a: 1, b: 2, c: 3 }, function (item) {
  acc += item;
});

console.log(acc); // 6
```

License
-------

ISC
