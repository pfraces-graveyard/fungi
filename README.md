fun.js
======

Functional JavaScript Helpers

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

    apply(fn, args)

### src/fn/partial.js

Partial application of arguments into a function

    partial(fn, args...)

### src/array/arrayFrom.js

Convert an array-compatible object (like `arguments`) to a real array

    arrayFrom(obj)

### src/array/concat.js

Concatenate two array-compatible data structures returning a new array

    concat(a, b)

### src/array/each.js

Iterate over an array

    each(arr, fn)
    fn(item, index)

### src/array/map.js

Project an array with a transform function

    map(arr, fn)
    fn(item, index)

### src/array/filter.js

Filter an array evaluating the items with a predicate function

    filter(arr, fn)
    fn(item, index)

### src/array/reduce.js

Reduce an array

If no seed is provided the first element is used as accumulator,
starting the iteration with the second element

    reduce(arr, fn, seed)
    fn(acc, item, index)
