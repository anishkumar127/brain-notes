Find the `index` of the array element you want to remove using [`indexOf`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf), and then remove that index with [`splice`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

> The splice() method changes the contents of an array by removing existing elements and/or adding new elements.

```javascript
const array = [2, 5, 9];

console.log(array);

const index = array.indexOf(5);
if (index > -1) { // only splice array when item is found
  array.splice(index, 1); // 2nd parameter means remove one item only
}

// array = [2, 9]
console.log(array); 
```

The second parameter of `splice` is the number of elements to remove. Note that `splice` modifies the array in place and returns a new array containing the elements that have been removed.

---

For the reason of completeness, here are functions. The first function removes only a single occurrence (i.e. removing the first match of `5` from `[2,5,9,1,5,8,5]`), while the second function removes all occurrences:

```javascript
function removeItemOnce(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

function removeItemAll(arr, value) {
  var i = 0;
  while (i < arr.length) {
    if (arr[i] === value) {
      arr.splice(i, 1);
    } else {
      ++i;
    }
  }
  return arr;
}
// Usage
console.log(removeItemOnce([2,5,9,1,5,8,5], 5))
console.log(removeItemAll([2,5,9,1,5,8,5], 5))
```

 ## Removing multiple items (ECMAScript 7 code)

An additional advantage of this method is that you can remove multiple items

```javascript
let forDeletion = [2, 3, 5]

let arr = [1, 2, 3, 4, 5, 3]

arr = arr.filter(item => !forDeletion.includes(item))
// !!! Read below about array.includes(...) support !!!

console.log(arr)
// [ 1, 4 ]
```


**Use `indexOf` and `splice` (indexof):**

```javascript
function indexof(arr, val) {
  var i;
  while ((i = arr.indexOf(val)) != -1) {
    arr.splice(i, 1);
  }
}
```

**Use only `splice` (splice):**

```javascript
function splice(arr, val) {
  for (var i = arr.length; i--;) {
    if (arr[i] === val) {
      arr.splice(i, 1);
    }
  }
}
```

