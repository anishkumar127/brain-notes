
```js
<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8" />

<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<meta http-equiv="X-UA-Compatible" content="ie=edge" />

<title>Static Template</title>

</head>

<body>

<h1>

Write a function to check if a property exists in a JS object using

atleast 2 different ways. Check output in console.

</h1>

<script>

function propExists1(a, b) {

// a receives object, b receives property-name string

//complete the function

for (let x in a) {

const res = a.hasOwnProperty(b);

// console.log("res", res);

if (res) {

if (a[b] || a[b] === undefined) {

console.log("TT");

} else {

console.log("FF");

}

} else {

console.log("FF");

}

// if (x[b] || x[b] === undefined) {

// console.log("T");

// } else {

// console.log("F");

// }

}

}

function propExists2(a, b) {

// a receives object, b receives property-name string

//complete the function

const map = new Map();

for (let x in a) {

const value = a[x];

map.set(x, value);

}

// console.log(map);

for (let x of map) {

if (map.has(b) || map.has(b) === undefined) {

console.log("TRUE");

} else {

console.log("FALSE");

}

}

// console.log("f2");

}

console.log(propExists1({ x: "a", y: "b", z: "c" }, "a")); // output: false

console.log(propExists2({ x: "a", y: "b", z: "c" }, "a")); // output: false

console.log(propExists1({ a: 1, b: 2, c: 3 }, "b")); // output: true

console.log(propExists2({ a: 1, b: 2, c: 3 }, "b")); // output: true

console.log(propExists1({ x: "a", y: "b", z: undefined }, "z")); // output: true

console.log(propExists2({ x: "a", y: "b", z: undefined }, "z")); // output: true

</script>

</body>

</html>
```


# Question 2nd


```js
<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8" />

<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<meta http-equiv="X-UA-Compatible" content="ie=edge" />

<title>Static Template</title>

</head>

<body></body>

<script>

function xTime(x, y) {

// Write your code here

let count = 0;

const timer = setInterval(() => {

count++;

const time = new Date();

console.log(time);

if (count == y) {

clearInterval(timer);

}

}, x * 1000);

}

  

xTime(2, 5);

  

/*

Expected Output in console example (if the current time is 7:59:41 am):

7:59:41 AM

7:59:43 AM

7:59:45 AM

7:59:47 AM

7:59:49 AM

*/

</script>

</html>
```

