
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



![[Pasted image 20221122212815.png]]



# event in JavaScript and React


- JavaScript Have Pointer Event
![](https://i.imgur.com/ieoy7sB.png)



- React have  SyntheticBaseEvent

- ![](https://i.imgur.com/iWjxVZa.png)


