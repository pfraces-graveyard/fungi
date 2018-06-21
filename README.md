fun.js
======

Collection of utilities for functional JavaScript programming

API
---

### src/type/is.js

Type detection methods

  * `is.defined(data)`
  * `is.nil(data)`
  * `is.boolean(data)`
  * `is.number(data)`
  * `is.string(data)`
  * `is.object(data)`
  * `is.array(data)`
  * `is.fn(data)`

### src/fn/apply.js

Apply an array-compatible data structure into a function

`apply(fn, args)`

### src/fn/partial.js

Partial application of arguments into a function

`partial(fn, args...)`

### src/array/arrayFrom.js

Convert an array-compatible object (like `arguments`) to a real array

`arrayFrom(obj)`

### src/array/each.js

Iterate over an array

`each(arr, fn)`

### src/array/concat.js

Concatenate two array-compatible data structures returning a new array

`concat(a, b)`
