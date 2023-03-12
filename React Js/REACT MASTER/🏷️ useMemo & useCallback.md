# Fibonacci Series

![](https://i.imgur.com/5f9Lek8.png)


**its take time because when do high calculation. its stuck the page and crash the application**

- its slow the application. because when we do anything
- or components re render
- its do the calculation again
- and its get application slow
- because this take time to re calculate the value.

# now do useMemo

```js
import { useMemo, useState } from "react";

function fib(n) {

  if (n === 1 || n === 2) return 1;

  return fib(n - 1) + fib(n - 2);

}

function Counter() {

  console.log("render Counter");

  const [number, setNumber] = useState(40);

  

  function handleClick(e) {

    e.stopPropagation();

    setNumber((number) => number + 1);

    setNumber((number) => number + 1);

    setNumber((number) => number + 1);

  }

  

  const fibMemorized = useMemo(() => fib(number), [number]);

  

  return (

    <>

      <h1 style={{ color: "white" }}>{number} | {fibMemorized}</h1>

      <button onClick={handleClick}>Add</button>

    </>

  );

}

  

export default Counter;
```

![](https://i.imgur.com/VKFjjw4.png)


- so now its working fine.
- if we do plus + 1 like we change number then it will take again that much time
- so its store the calculation which is using again and again but if we change value then it will take as much time as calculation required.

# now if we do fib function inside components function

![](https://i.imgur.com/Shmd1cx.png)


and useMemo will require the fib dependency and if we pass the function dependency then it will also cause the error because of every render fib function re call.

- over here we are not memorization the function
- we are memorizing the value.


