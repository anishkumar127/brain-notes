

![](https://i.imgur.com/WqsxI3q.png)


**app**
```js
import { useReducer } from "react";

import reducer from "./reducer/reducer";

const initialValue = 0;

function App() {

  const [count, dispatch] = useReducer(reducer, initialValue);

  return (

    <div className="App">

      <header className="App-header">

        <button onClick={() => dispatch({ type: "INC" })}>+</button>

        <h3>{count}</h3>

        <button onClick={() => dispatch({ type: "DEC" })}>-</button>

      </header>

    </div>

  );

}

  

export default App;
```


**reducer**
```js
const reducer = (state, action) => {

  if (action.type === "INC") {

    return (state = state + 1);

  }

  if (action.type === "DEC") {

    return (state = state - 1);

  }

  return state;

};

export default reducer;
```

**myself handling less then zero**

```js
const reducer = (state, action) => {

  if (action.type === "INC") {

    return (state = state + 1);

  }

  if (action.type === "DEC") {

    if (state <= 0) return (state = 0);

    return (state = state - 1);

  }

  return state;

};

export default reducer;
```

**also alternative**

```js
const reducer = (state, action) => {

  if (action.type === "INC") {

    return (state = state + 1);

  }

  if (action.type === "DEC") {

    let newNumber = 0;

    state >= 1 ? (newNumber = state - 1) : (newNumber = 0);

    return newNumber;

  }

  return state;

};

export default reducer;
```


# Using Switch Case useReducer

```js
const reducer = (state, action) => {

  switch (action.type) {

    case "INC":

      return (state += 1);

    case "DEC":

      return state <= 0 ? (state = 0) : (state -= 1);

    default:

      return state;

  }

};

export default reducer;
```

