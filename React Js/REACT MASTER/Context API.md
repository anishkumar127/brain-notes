
![](https://i.imgur.com/sl8Fy0N.png)




**app**
```js
import "./App.css";

import Parent from "./components/Parent";

  

function App() {

  return (

    <div className="App">

      <header className="App-header">

        <Parent />

      </header>

    </div>

  );

}

  

export default App;

```

**parent**
```js
import React from "react";

import Child from "./Child";

  

const Parent = () => {

  return (

    <div>

      <Child />

    </div>

  );

};

  

export default Parent;
```

**child**


```js
import React, { useContext } from "react";

import { AppContext } from "../store/store";

  

const Child = () => {

  const userData = useContext(AppContext);

  return (

    <div>

      {userData.name}

      <h2>{userData.age}</h2>

    </div>

  );

};

  

export default Child;
```

**store**
```js
import React, { createContext } from "react";

  

const AppContext = createContext();

  

const AppProvider = ({ children }) => {

  const userData = {

    name: "anish bishnoi",

    age: 25,

  };

  

  return <AppContext.Provider value={userData}>{children}</AppContext.Provider>;

};

  

export { AppContext, AppProvider };
```


**index**

```js
import React from "react";

import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App";

import { AppProvider } from "./store/store";

  

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

  <AppProvider>

    <App />

  </AppProvider>

);
```


**another**
**app**
```js
import "./App.css";

import Parent from "./components/Parent";

import { useContext } from "react";

import { AppContext } from "./store/store";

  

function App() {

  const userData = useContext(AppContext);

  return (

    <div className="App">

      <header className="App-header">

        <Parent />

  

        <h2>hey : {userData.name}</h2>

      </header>

    </div>

  );

}

  

export default App;
```


**globally imported and exported data**


