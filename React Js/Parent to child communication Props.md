**app.js**
```js
import React from "react";

import reactLogo from "./assets/react.svg";

import "./App.css";

import Card from "./components/Card";

function App() {

  const userProfile = [

    {

      name: "anish",

      age: 22,

    },

    {

      name: "kumar",

      age: 23,

    },

    {

      name: "bishnoi",

      age: 24,

    },

  ];

  return (

    <>

      {userProfile.map(({ name, age },index) => {

        return <Card key={index} name={name} age={age} />;

      })}

    </>

  );

}

  

export default App;
```

**Card.jsx**

```js
  

const Card = ({name,age}) =>{

    return(

        <>

    <h1>name : {name}</h1>

    <h2>age : {age}</h2>

        </>

    )

}

  

export default Card;
```


