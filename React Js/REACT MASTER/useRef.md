
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


