# Easy and BEST 

```js
function maxFreq(arr) {

  const map = new Map();

  for (el of arr) {

    if (!map.has(el)) {

      map.set(el, 1);

    } else map.set(el, map.get(el) + 1);

  }
  console.log(map);
  }

maxFreq("aabbcdee");

```
**output:-
Map(5) {'a' => 2, 'b' => 2, 'c' => 1, 'd' => 1, 'e' => 2}



# increase frequency
```js
function maxFreq(arr){
  
  const map = new Map();
  
  for(let i=0; i<arr.length; i++){
  if (map[arr[i]]) map[arr[i]]++;
    else map[arr[i]] = 1; 
  }
  
  console.log(map);
  
}
maxFreq("aabbcdee")
// console.log();
```


https://stackoverflow.com/questions/62494748/frequency-of-an-array-using-hashmaps-and-objects



# You can use an object to hold the results:


```javascript
const arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
const counts = {};

for (const num of arr) {
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}

console.log(counts);
console.log(counts[5], counts[2], counts[9], counts[4]);
```
So, now your `counts` object can tell you what the count is for a particular number:

```javascript
console.log(counts[5]); // logs '3'
```

If you want to get an array of members, just use the `keys()` functions

```javascript
keys(counts); // returns ["5", "2", "9", "4"]
```




# Reduce method
```javascript
const occurrences = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4].reduce(function (acc, curr) {
  return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
}, {});

console.log(occurrences) // => {2: 5, 4: 1, 5: 3, 9: 1}
```


# One line ES6 solution. using an actual [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

```javascript
const map = arr.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
```

Use [`map.keys()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/keys) to get unique elements

Use [`map.values()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/values) to get the occurrences

Use [`map.entries()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/entries) to get the pairs [element, frequency]

```javascript
var arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4]

const map = arr.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());

console.info([...map.keys()])
console.info([...map.values()])
console.info([...map.entries()])
```



# Map 

```js
const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// Expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// Expected output: 97

console.log(map1.size);
// Expected output: 3

map1.delete('b');

console.log(map1.size);
// Expected output: 2

```


The correct usage for storing data in the Map is through the `set(key, value)` method.

```js
const contacts = new Map()
contacts.set('Jessie', {phone: "213-555-1234", address: "123 N 1st Ave"})
contacts.has('Jessie') // true
contacts.get('Hilary') // undefined
contacts.set('Hilary', {phone: "617-555-4321", address: "321 S 2nd St"})
contacts.get('Jessie') // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete('Raymond') // false
contacts.delete('Jessie') // true
console.log(contacts.size) // 1
```



# key and value iterating

```js

function maxFreq(arr){
  
  const map = new Map();
  

  for(let i=0; i<arr.length; i++){
    map.set(arr[i],i);
  }
  
  // key 
  for(const key of map.keys()){
    console.log(key)
  }
   // value
  for(const value of map.values()){
    console.log(value);
  }
  
}
maxFreq("aabbcdee")
```


# key value both 

```js


function maxFreq(arr){
  
  const map = new Map();

  for(let i=0; i<arr.length; i++){
    map.set(arr[i],i);
  }
 
  // key value both 
  
  for(const [key,value] of map){
    console.log(`${key} , ${value}`)
  }

}
maxFreq("aabbcdee")
```



# entries
```js
for (const [key, value] of map.entries()) {
  console.log(`${key} = ${value}`);
}
```



# Iterate using forEach Loop

```js
map.forEach((value, key) => {
  console.log(`${key} = ${value}`);
});

```




# has  - its as a contain

```js
const map1 = new Map();
map1.set('bar', 'foo');

console.log(map1.has('bar'));
// Expected output: true

console.log(map1.has('baz'));
// Expected output: false

```



# Iteration using for and for of loop
```js
const myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

for (const entry of myMap) {
  console.log(entry);
}
// ["0", "foo"]
// [1, "bar"]
// [{}, "baz"]

for (const [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}
// 0: foo
// 1: bar
// [Object]: baz

```

# hand rolling iterator

```js
const myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

const mapIter = myMap[Symbol.iterator]();

console.log(mapIter.next().value); // ["0", "foo"]
console.log(mapIter.next().value); // [1, "bar"]
console.log(mapIter.next().value); // [Object, "baz"]

```


# entries

```js
const map1 = new Map();

map1.set('0', 'foo');
map1.set(1, 'bar');

const iterator1 = map1.entries();

console.log(iterator1.next().value);
// Expected output: Array ["0", "foo"]

console.log(iterator1.next().value);
// Expected output: Array [1, "bar"]


```