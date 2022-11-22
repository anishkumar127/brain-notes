
```js
import React from "react";

import reactLogo from "./assets/react.svg";

import "./App.css";

import Modal from "./components/Modal";

function App() {

  

  const clickHandler = () =>{

    console.log("clicked done...");

  }

  return (

    <>

     <button onClick={clickHandler}>Click me</button>

    </>

  );

}

  

export default App;
```

- when click on Click me button clickHandler function excute.
- and in close print clicked done...


# handler()

 
```js
    <button onClick={clickHandler()}>Click me</button>
```

if we do this its automatic call the function
and we don't want to do that

we cant to when we do click then function call. so that we don't use () in the onClick method.






# JavaScript Event handling

```js
<!DOCTYPE html>
<html>
  <head>
    <title>Hello, World!</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
     
     <button onclick ="clickHandler(event)">click me</button>
      <script>
        
        function clickHandler(event){
          console.log(event);
        }
      </script>
  </body>
</html>
```

<!--⚠️Imgur upload failed, check dev console-->
![](https://i.imgur.com/u87iwp3.png)



# event in JavaScript and React


**- JavaScript Have Pointer Event**

![](https://i.imgur.com/ieoy7sB.png)



**- React have  SyntheticBaseEvent**

![](https://i.imgur.com/iWjxVZa.png)




> javaScript
 - in javaScript **Event**


![](https://i.imgur.com/bpMRvo6.png)


>React
in react have inside nativeEvent pointerEvent
in React native Event inside the syntheticbaseEvent

![](https://i.imgur.com/Jqv148Y.png)





SyntheticBaseEvent is a wrapper
React give extra functionality


_why javaScript and react event different ?_


# event value get

when we type anything inside input box.
so value we can see inside native event   and side native event have InputEvent
and inside input Event we have target input and inside target input we have value. and inside value we have our value which we typed in the input box.


![](https://i.imgur.com/Ce192tm.png)



 so get direct value we use ``event.target.value`` so from this we can get our direct value or we can  say we see or access our value direct which we are typing in input box.

![](https://i.imgur.com/8XQV88j.png)




``{changeHandler}`` there we are passing just reference.
``(event) => changeHandler(event)`` this we are passing body.
inside body we can pass anything. like console.log and anything.



# React Level of Return

react return only 1 level.
example we can see.

![](https://i.imgur.com/TZB1Ltq.png)

in this example return will not call or return.
bcz react return only 1 level. 
bcz not calling on it  body 
react only call 1 body.
