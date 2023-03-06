

**event bubbling happen to html element. its start from child to move till parent. so its happend the event bubbling.**



Assume this case. console.log("App") running with every other components 

![[Pasted image 20230306191301.png]]



**so we will stop them from event object.**

```js
  e.stopPropagation();
```
**it will stop propagation of html**

```js
import React, { useState } from "react";

  

const ButtonChild = ({ message, children, onPlay, onPause }) => {

  let [PlayStatus, setPlayStatus] = useState(false);

  const handleClick = (e) => {

    e.stopPropagation();

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

**e.preventDefault() remove the default behavior of form.**


