
# understand props


**main app**
```js
import "./App.css";

import Post from "./components/Post";

  

function App() {

  const firstName = "Anish";

  const lastName = "Bishnoi";

  return (

    <div className="App">

      <header className="App-header">

        <Post fname={firstName} />

        <Post lname={lastName} />

      </header>

    </div>

  );

}

  

export default App;
```

**child post**

```js
import React from "react";

  

const Post = (props) => {

  const { fname, lname } = props;

  return (

    <div>

      <h1>{fname}</h1>

      <h1>{lname}</h1>

    </div>

  );

};

  

export default Post;
```


*so which we passing to the parameter of POST that will be need to be the same.*




# next

**app**

```js
import "./App.css";

import Post from "./components/Post";

  

function App() {

  const firstName = "Anish";

  const lastName = "Bishnoi";

  return (

    <div className="App">

      <header className="App-header">

        <Post fname="Anish" />

        <Post lname={lastName} />

      </header>

    </div>

  );

}

  

export default App;
```

**post**
```js
import React from "react";

  

const Post = (props) => {

  const { fname, lname } = props;

  return (

    <div>

      <h1>{fname}</h1>

      <h1>{lname}</h1>

    </div>

  );

};

  

export default Post;
```





# passing function as a props
**app**
```js
import "./App.css";

import Post from "./components/Post";

  

function sum(a, b) {

  return a + b;

}

function App() {

  return (

    <div className="App">

      <header className="App-header">

        <Post countSum={sum} />

      </header>

    </div>

  );

}

  

export default App;
```

```js
import React from "react";

  

const Post = (props) => {

  const { countSum } = props;

  

  const answer = countSum(3, 6);

  return (

    <div>

      <h4>{answer}</h4>

      <h3>{countSum(4, 3)}</h3>

    </div>

  );

};

  

export default Post;
```



# function as a props issue

```js
import "./App.css";

import Post from "./components/Post";

  

function sum(a, b) {

  return a + b;

}

function App() {

  const firstName = "Anish";

  const lastName = "Bishnoi";

  return (

    <div className="App">

      <header className="App-header">

        <Post countSum={sum} fname={firstName} />

        <Post lname={lastName} countSum={sum} />

      </header>

    </div>

  );

}

  

export default App;
```

```js
import React from "react";

  

const Post = (props) => {

  const { countSum, fname, lname } = props;

  

  const answer = countSum(3, 6);

  return (

    <div>

      <h6>{fname}</h6>

      <h6>{lname}</h6>

      <h4>{answer}</h4>

      <h3>{countSum(4, 3)}</h3>

    </div>

  );

};

  

export default Post;
```

*there is issue. which is if we pass callback then we need to pass same callback to multiple time called components.*



