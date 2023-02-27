
- It's same as the useEffect
- the one difference is. useEffect is asynchronous.
- and useLayoutEffect is synchronous

**one also a issue which useEffect is data flickering**



# Data flickering with useEffect

**first show 0 then random then again show 0 and then random.**


```js
import React, { useEffect, useLayoutEffect, useState } from "react";

  

const App = () => {

  const [num, setNum] = useState(0);

  useEffect(() => {

    if (num === 0) setNum(num + Math.random() * 100);

  }, [num]);

  return (

    <div>

      <p>{num}</p>

      <button onClick={() => setNum(0)}>random number</button>

    </div>

  );

};

  

export default App;
```


# useLayoutEffect no data flickering

```js
import React, { useEffect, useLayoutEffect, useState } from "react";

  

const App = () => {

  const [num, setNum] = useState(0);

  useLayoutEffect(() => {

    if (num === 0) setNum(num + Math.random() * 100);

  }, [num]);

  return (

    <div>

      <p>{num}</p>

      <button onClick={() => setNum(0)}>random number</button>

    </div>

  );

};

  

export default App;
```

**because data first in background calculate and then render to the screen.**
**and useEffect first data print into screen and then calculate**


