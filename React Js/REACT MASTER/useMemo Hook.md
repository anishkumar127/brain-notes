



# Performance Issue

![](https://i.imgur.com/KNjVwAf.png)


```js
import React, { useEffect, useLayoutEffect, useState } from "react";

  

const App = () => {

  const [num, setNum] = useState(0);

  const [show, setShow] = useState(false);

  console.log(num);

  return (

    <div>

      <p>{num}</p>

      <button onClick={() => setNum(num + 1)}>count</button>

      <button onClick={() => setShow(!show)}>

        {show ? "you clicked me" : "click me"}

      </button>

    </div>

  );

};

  

export default App;
```

**its again and again re render the counter value. but fun fact is. we just doing the show and not show button**
**and show not show button not belongs to the count function.**
**show its the performance issue. for avoid this we will use useMemo hooks**

![](https://i.imgur.com/bQnnDtb.png)




# Huge Performance Issue

```js
import React, { useState } from "react";

  

const App = () => {

  const [num, setNum] = useState(0);

  const [show, setShow] = useState(false);

  console.log(num);

  

  const countNumber = (myNum) => {

    for (let i = 0; i <= 1000000000; i++) {}

    return myNum;

  };

  const CheckData = () => {

    return countNumber(num);

  };

  return (

    <div>

      <p>{num}</p>

      <button onClick={() => setNum(num + 1)}>count</button>

      <p>my number := {<CheckData />}</p>

      <button onClick={() => setShow(!show)}>

        {show ? "you clicked me" : "click me"}

      </button>

    </div>

  );

};

  

export default App;
```

**in this for loop running. and its run ever time if i click on click me or you clicked me. button**
**the for loop run unnecessary and its generating the performance issue. because of this. application getting slow when i do count or i do click me clicked me button its taking 2 seconds.**


# useMemo () 

```js
import React, { useMemo, useState } from "react";

  

const App = () => {

  const [num, setNum] = useState(0);

  const [show, setShow] = useState(false);

  console.log(num);

  

  const countNumber = (myNum) => {

    for (let i = 0; i <= 1000000000; i++) {}

    return myNum;

  };

  const CheckData = useMemo(() => {

    return countNumber(num);

  }, []);

  return (

    <div>

      <p>{num}</p>

      <button onClick={() => setNum(num + 1)}>count</button>

      <p>my number := {CheckData}</p>

      <button onClick={() => setShow(!show)}>

        {show ? "you clicked me" : "click me"}

      </button>

    </div>

  );

};

  

export default App;
```

**now its working fast and better.**

```js
import React, { useMemo, useState } from "react";

  

const App = () => {

  const [num, setNum] = useState(0);

  const [show, setShow] = useState(false);

  console.log(num);

  

  const countNumber = (myNum) => {

    for (let i = 0; i <= 1000000000; i++) {}

    return myNum;

  };

  const CheckData = useMemo(() => {

    return countNumber(num);

  }, [num]);

  return (

    <div>

      <p>{num}</p>

      <button onClick={() => setNum(num + 1)}>count</button>

      <p>my number := {CheckData}</p>

      <button onClick={() => setShow(!show)}>

        {show ? "you clicked me" : "click me"}

      </button>

    </div>

  );

};

  

export default App;
```

**now only when run that's for loop when i click on counter button otherwise click me clicked me time it will not work.**


![](https://i.imgur.com/sgERnjp.png)


