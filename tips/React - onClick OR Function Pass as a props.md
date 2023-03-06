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



# Self Event Create 
# onSmash

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

        onSmash={() => console.log("Playing event occur")}

      >

        Play

      </ButtonChild>

      <ButtonChild

        message="Pausing.. "

        onSmash={() => alert("Pausing Event Occur")}

      >

        Pause

      </ButtonChild>

      <ButtonChild onSmash={Counter} Counter={Counter}>

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

  

const ButtonChild = ({ message, children, onSmash, Counter }) => {

  const handleClick = () => {

    console.log("handleClick");

    onSmash();

    // Counter(); // for count it will run fine. onClick() ; and count. but not for other 2 button because not pass that method inside their props.

  };

  return <button onClick={handleClick}>{children}</button>;

};

  

export default ButtonChild;
```




# Experiment 

```js
import React, { useState } from "react";

import ButtonChild from "./ButtonChild";

  

const Parent = () => {

  return (

    <div>

      <ButtonChild

        message="play"

        onPlay={() => console.log("Playing..")}

        onPause={() => console.log("Pause..")}

      >

        Click

      </ButtonChild>

    </div>

  );

};

  

export default Parent;
```

```js
import React from "react";

  

const ButtonChild = ({ message, children, onPlay, onPause }) => {

  let PlayStatus = false;

  

  const handleClick = () => {

    if (PlayStatus) {

      onPause();

      PlayStatus = false;

    } else {

      onPlay();

      PlayStatus = true;

    }

  };

  return <button onClick={handleClick}>{children}</button>;

};

  

export default ButtonChild;
```

**more short**

```js
import React from "react";

  

const ButtonChild = ({ message, children, onPlay, onPause }) => {

  let PlayStatus = false;

  

  const handleClick = () => {

    if (PlayStatus) onPause();

    else onPlay();

  

    PlayStatus = !PlayStatus;

  };

  return <button onClick={handleClick}>{children}</button>;

};

  

export default ButtonChild;
```


# condition not working.

```js
import React from "react";

  

const ButtonChild = ({ message, children, onPlay, onPause }) => {

  let PlayStatus = false;

  

  const handleClick = () => {

    if (PlayStatus) onPause();

    else onPlay();

  

    PlayStatus = !PlayStatus;

  };

  return (

    <button onClick={handleClick}>

      {" "}

      {children} - {PlayStatus ? "Pause" : "Play"}

    </button>

  );

};

  

export default ButtonChild;
```

![](https://i.imgur.com/2OUn8KD.png)
 **this is not changing.** 
 
 **its not happening because React only change State Variable.**

![](https://i.imgur.com/ctBv4LM.png)

**so don't use this** 


# self try to solve using useState

![](https://i.imgur.com/xk6dff2.png)

**working after below code**

```js
import React, { useState } from "react";

  

const ButtonChild = ({ message, children, onPlay, onPause }) => {

  let [PlayStatus, setPlayStatus] = useState(false);

  //   let PlayStatus = false; // don;t use this

  

  const handleClick = () => {

    if (PlayStatus) onPause();

    else onPlay();

  

    setPlayStatus((PlayStatus = !PlayStatus));

  };

  return (

    <button onClick={handleClick}>

      {" "}

      {children} - {PlayStatus ? "Pause" : "Play"}

    </button>

  );

};

  

export default ButtonChild;
```

**and its let because const not change value.**

# next other things

**children**
**inside componenets inside another componenets**
![](https://i.imgur.com/bNLqEzv.png)

![](https://i.imgur.com/fDXYIwo.png)

![](https://i.imgur.com/krxc2SQ.png)

