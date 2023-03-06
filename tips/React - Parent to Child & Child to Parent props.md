# Parent to Child
**Parent**

```js
import React from "react";

import ButtonChild from "./ButtonChild";

  

const Parent = () => {

  return (

    <div>

      <ButtonChild message="Playing..." name="Play" />

      <ButtonChild message="Pausing..." name="Pause" />

    </div>

  );

};

  

export default Parent;
```


**Child**

```js
import React from "react";

  

const ButtonChild = ({ name, message }) => {

  const handleButton = () => {

    console.log(message);

  };

  return (

    <button

      style={{

        backgroundColor: "black",

        color: "white",

        marginRight: "10px",

        padding: "10px",

        height: "50px",

        width: "70px",

        borderRadius: "50%",

      }}

      onClick={handleButton}

    >

      {name}

    </button>

  );

};

  

export default ButtonChild;
```



# Child to Parent

**Parent**

```js
import React, { useState } from "react";

import ButtonChild from "./ButtonChild";

  

const Parent = () => {

  const [name, setName] = useState("");

  

  const writeName = (receivedName) => {

    setName(receivedName);

  };

  return (

    <div>

      {name}

      <ButtonChild writeName={writeName} />

    </div>

  );

};

  

export default Parent;
```

**child**

```js
import React from "react";

  

const ButtonChild = ({ writeName }) => {

  const myName = "anish bishnoi";

  return <button onClick={() => writeName(myName)}>GET NAME</button>;

};

  

export default ButtonChild;
```



# Child to parent Array pass

```js
import React, { useState } from "react";

import ButtonChild from "./ButtonChild";

  

const Parent = () => {

  const [name, setName] = useState([]);

  

  const writeName = (receivedName) => {

    // console.log(receivedName);

    // console.log([...receivedName]);

    setName(receivedName);

  };

  return (

    <div>

      {name.map((item, index) => {

        return (

          <ul key={index}>

            <li>{item.id}</li>

            <li>{item.name}</li>

            <li>{item.email}</li>

          </ul>

        );

      })}

      <ButtonChild writeName={writeName} />

    </div>

  );

};

  

export default Parent;
```


```js
import React from "react";

  

const ButtonChild = ({ writeName }) => {

  const data = [

    {

      id: 1,

      name: "anish",

      email: "anish@gmail.com",

    },

    {

      id: 2,

      name: "anish",

      email: "anish@gmail.com",

    },

    {

      id: 3,

      name: "anish",

      email: "anish@gmail.com",

    },

  ];

  return <button onClick={() => writeName(data)}>GET NAME</button>;

};

  

export default ButtonChild;
```

