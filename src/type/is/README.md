@fungi/type/is
==============

A collection of basic type checks

Install
-------

    npm install --save @fungi/type/is

Usage
-----

```js
var is = require('@fungi/type/is');
console.log(is.number(3)); // true
console.log(is.defined()); // false
console.log(is.nil()); // true
```

API
---

### `is.bool(value): boolean`

Checks whether the given value is a boolean

```js
console.log(is.bool(false)); // true
console.log(is.bool('true')); // false
```

### `is.number(value): boolean`

Checks whether the given value is a number

```js
console.log(is.number(3); // true
console.log(is.number('3')); // false
```

### `is.string(value): boolean`

Checks whether the given value is a string

```js
console.log(is.string('abc')); // true
console.log(is.string(3)); // false
```

### `is.object(value): boolean`

Checks whether the given value is an object

```js
console.log(is.object({})); // true
console.log(is.object([])); // false
```

### `is.array(value): boolean`

Checks whether the given value is an array

```js
console.log(is.array([])); // true
console.log(is.array({ 0: 'foo', length: 1 })); // false
```

### `is.fn(value): boolean`

Checks whether the given value is a function

```js
console.log(is.fn(function () {})); // true
console.log(is.fn('foo')); // false
```

### `is.defined(value): boolean`

Checks whether the given value is defined (which is a positive way to
check if it is not `undefined`)

```js
console.log(is.defined(false)); // true
console.log(is.defined()); // false
```

### `is.nil(value): boolean`

Checks whether the given value is either `null` or `undefined`

```js
console.log(is.nil(null)); // true
console.log(is.nil('foo')); // false
```

License
-------

ISC
