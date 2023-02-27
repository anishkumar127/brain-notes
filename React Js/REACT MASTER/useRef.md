
# infinite counter 

**its happening because of the useEffect whenever state change componenets re render by the useEffect and then its do count++ and this will happen infinite times**

```js
import React, { useEffect, useState } from "react";

  

const App = () => {

  const [userInput, setUserInput] = useState("");

  const [count, setCount] = useState(0);
  
   useEffect(() => {

     setCount(count + 1);

   });

  return (

    <div>

      <input

        type="text"

        value={userInput}

        onChange={(e) => setUserInput(e.target.value)}

      />

      <p> counter : {count} </p>

    </div>

  );

};

  

export default App;
```

**this happened because of useState and useEffect**

**to avoid this infinite loop  we will use useRef hooks**

# useRef

```js
import React, { useEffect, useRef, useState } from "react";

  

const App = () => {

  const [userInput, setUserInput] = useState("");

  const count = useRef(0);

  useEffect(() => {

    count.current = count.current + 1;

  });

  return (

    <div>

      <input

        type="text"

        value={userInput}

        onChange={(e) => setUserInput(e.target.value)}

      />

  

      <p> counter : {count.current} </p>

    </div>

  );

};

  

export default App;
```

*so over here. useState re render the components because input box we are filling the value. and then when components change useEffect re Rednder and then reRender then useRef only count+1 at one time and then again only oneTime so it's will not run like infinite loop*

# useRef -> background change and focus

```js
import React, { useRef } from "react";

  

const App = () => {

  const inputRef = useRef();

  const changeBorder = () => {

    inputRef.current.focus();

    inputRef.current.style.backgroundColor = "lightgreen";

  };

  return (

    <div>

      <input type="text" ref={inputRef} />

  

      <button onClick={changeBorder}>Submit</button>

    </div>

  );

};

  

export default App;
```

*help of that we can directly access the DOM elements.*


