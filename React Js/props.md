```js
import { useState } from 'react';

import reactLogo from './assets/react.svg';

import './App.css';

function Button(props) {

  console.log(props);

  return <button> Click mere </button>;

}

function App() {

  return (

    <>

      <Button label="click here" color="red" />

      <Button label="Login" color="blue" />

    </>

  );

}

  

export default App;
```


![](https://i.imgur.com/M10uBqD.png)


# Props Handle Event 



```js
import { useState } from 'react';

import reactLogo from './assets/react.svg';

import './App.css';

function Button(props) {

  const { color ,children, style,handler} = props;

  return <button  style={style} onClick={handler}> {children}</button>;

}

  

function App() {

  const style = {

    color:"red",

    fontSize :"20px",

    backgroundColor:"white"

  }

  const loginButtonHandler = () =>{

    console.log("Login");

  }

  const logoutButtonHandler = () =>{

    console.log("Logout");

  }

  return (

    <>

    <Button handler={logoutButtonHandler}  style={style}> <p> click here  </p> </Button>

    <Button handler={loginButtonHandler} style={style}>Login </Button>

  </>

  );

}

  

export default App;
```

![](https://i.imgur.com/0FXHIy7.png)


![](https://i.imgur.com/tyToznn.png)



