**Parent**
```js
import React, { useState } from "react";

import ButtonChild from "./ButtonChild";

  

const Parent = () => {

  return (

    <div>

      <ButtonChild

        message="Playing..."

        onClick={() => console.log("Playing event occur")}

      >

        Play

      </ButtonChild>

      <ButtonChild

        message="Pausing.. "

        onClick={() => alert("Pausing Event Occur")}

      >

        Pause

      </ButtonChild>

    </div>

  );

};

  

export default Parent;
```



**child**

```js
import React from "react";

  

const ButtonChild = ({ message, children, onClick }) => {

  const handleClick = () => {

    console.log("handleClick");

    onClick();

  };

  return <button onClick={handleClick}>{children}</button>;

};

  

export default ButtonChild;
```


# Super Experiment.

```js
import React, { useState } from "react";

import ButtonChild from "./ButtonChild";

  

const Parent = () => {

  const [count, setCount] = useState(0);

  

  const Counter = () => {

    setCount(count + 1);

  };

  return (

    <div>

      <ButtonChild

        message="Playing..."

        onClick={() => console.log("Playing event occur")}

      >

        Play

      </ButtonChild>

      <ButtonChild

        message="Pausing.. "

        onClick={() => alert("Pausing Event Occur")}

      >

        Pause

      </ButtonChild>

      <ButtonChild onClick={Counter} Counter={Counter}>

        Count Increase{" "}

      </ButtonChild>

  

      <h1>{count}</h1>

    </div>

  );

};

  

export default Parent;
```


```js
import React from "react";

  

const ButtonChild = ({ message, children, onClick, Counter }) => {

  const handleClick = () => {

    console.log("handleClick");

    onClick();

    // Counter(); // for count it will run fine. onClick() ; and count. but not for other 2 button because not pass that method inside their props.

  };

  return <button onClick={handleClick}>{children}</button>;

};

  

export default ButtonChild;
```

![](https://i.imgur.com/FZWcqhT.png)


![](https://i.imgur.com/1zDlV5L.png)

![](https://i.imgur.com/TIKjOLw.png)





**onClick working or individual and different different.**

