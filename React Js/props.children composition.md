```js
import { useState } from "react";

import reactLogo from "./assets/react.svg";

import "./App.css";

import Feed from "./components/Feed";

function App() {

  const tweets = [

    {

      name: "anish",

     content:"this is my 1 content",

    },

    {

      name: "kumar",

      content:"this is my 2 content",

  

    },

    {

      name: "bishnoi",

      content:"this is my 3 content",

  

    },

  ];

  return (

    <>

      <Feed name={tweets[0].name}>

  

        this is my children content

      </Feed>

    </>

  );

}

  

export default App;

```

**feed.jsx**
```js
import React from 'react'

  

const Feed = (props) => {

  return (

    <div>

      {props.name}

      <p>{props.children}</p>

    </div>

  )

}

  

export default Feed****
```


above code we passing value as props.

and inside ``<Feed> there will be the children of the feed </Feed>``
to access this children we need to said to props to access children of feed.
for that we use `props.children`




# advanced used of children

- no need to created multiple model.
just create one model pass data as a children

and then can call components and pass inside multiple children

**app.jsx**

```js
import React from "react";

import reactLogo from "./assets/react.svg";

import "./App.css";

import Modal from "./components/Modal";

function App() {

  

  return (

    <>

      <Modal>

        <p> Do you want to save changes?</p>

        <button>Yes</button>

        <button>No</button>

      </Modal>

      <Modal>

  

        <p>your changes have been saved!</p>

        <button>Yes</button>

      </Modal>

    </>

  );

}

  

export default App;
```

**modal.jsx**

```js
import React from 'react'

  

const Modal = ({children}) => {

  return (

    <div>

        {children}

    </div>

  )

}

  

export default Modal
```




# pass style and type as a props
**app.jsx**
```js
import React from "react";

import reactLogo from "./assets/react.svg";

import "./App.css";

import Modal from "./components/Modal";

function App() {

  

  return (

    <>

      <Modal type="Confirmation">

        <p> Do you want to save changes?</p>

        <button>Yes</button>

        <button>No</button>

      </Modal>

      <Modal type="Information" style={{backgroundColor:"gray"}}>

  

        <p>your changes have been saved!</p>

        <button>Yes</button>

      </Modal>

    </>

  );

}

  

export default App;
```

**modal.jsx**

```js
import React from 'react'

  

const Modal = ({children,type, style}) => {

  return (

    <div>

        <h2 style={style}>{type}</h2>

        {children}

    </div>

  )

}

  

export default Modal
```