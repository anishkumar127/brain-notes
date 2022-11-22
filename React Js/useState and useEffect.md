```js
import React, { useState, useEffect } from "react";

  

export default function App() {

const [count, setCount] = useState(0);

const [countSecond, setCountSecond] = useState(0);

const [data, setData] = useState("");

const [isTrue, setIsTrue] = useState(true);

const handleCount = () => {

if (countSecond <= -5) {

setData("no more decrease");

setIsTrue(false);

} else setCountSecond(countSecond - 1);

};

const handleCountIncrease = () => {

if (count >= 5) {

setData("no more increase");

setIsTrue(false);

} else setCount(count + 1);

};

  

// useEffect

useEffect(() => {

// console.log("useEffect called", "first", count, "second", countSecond);

console.log("called for set data", data);

}, [data]);

return (

<>

<h1> counting on click</h1>

<button onClick={handleCountIncrease}>click me </button>

<p> see count is increasing : {isTrue ? count : data}</p>

  

<button onClick={handleCount}>click me </button>

<p> see count is decreasing : {isTrue ? countSecond : data}</p>

</>

);

}

```


  

so useEffect we can create depedency for which useState or which state it should
re render every time.
if we do not provide then [] empty array it will run only one time.
if we do not provide anything then it will run every time.
and we [data] in that we pass many state which we want change anything then call useEffect




# SetTimeOut method with useEffect and useState

```js
import React, { useState, useEffect } from "react";

  

export default function App() {

// useEffect

const [count, setCount] = useState(0);

useEffect(() => {

setTimeout(() => {

setCount((count) => count + 1);

}, 1000);

});

  
  

return (

<>

<h1> counting on {count}</h1>

</>

);

}
```

![](https://i.imgur.com/MBrjd4R.png)

But wait!! It keeps counting even though it should only count once!

`useEffect` runs on every render. That means that when the count changes, a render happens, which then triggers another effect.

This is not what we want. There are several ways to control when side effects run.

We should always include the second parameter which accepts an array. We can optionally pass dependencies to `useEffect` in this array.



# useState and useEffect

- when click on increase count its also increase the cal
```js
import React, { useState, useEffect } from "react";

  

export default function App() {

// useEffect

const [count, setCount] = useState(0);

const [cal, setCal] = useState(1);

useEffect(() => {

setCal(cal * 2);

}, [count]);

  

return (

<>

<button onClick={() => setCount(count + 1)}>click me</button>

<h1> counting on {count}</h1>

<p>{cal}</p>

</>

);

}
```
![](https://i.imgur.com/6WvIl3O.png)


in useState we have to put the dependency [] or count if not put then `cal*2` its show ***infinity*



## Effect Cleanup

Some effects require cleanup to reduce memory leaks.

Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.

We do this by including a return function at the end of the `useEffect` Hook.


```js
import React, { useState, useEffect } from "react";

  

export default function App() {

// useEffect

const [count, setCount] = useState(0);

useEffect(() => {

let timer = setTimeout(() => {

setCount((count) => count + 1);

}, 1000);

  

return () => clearTimeout(timer);

}, []);

return (

<>

{/* <button onClick={() => setCount(count + 1)}>click me</button> */}

<h1> counting on {count}</h1>

</>

);

}
```

![](https://i.imgur.com/ZH3BOd4.png)
**Note:** To clear the timer, we had to name it.

_its run only one time  after that its return_


