when we don't define into state. by default state **undefined**


**store/index.js**

```js
import {legacy_createStore} from 'redux';

  

// create store

// reducer function

// connect reducer fn with store

  

const counterReducer = (state={counter:0},action) =>{

    if(action.type==='increment'){

        return{

            counter:state.counter+1,

        }

    }

    if(action.type==='decrement'){

        return{

            counter:state.counter-1,

        }

    }

    return state;

}

const store = legacy_createStore(counterReducer);

  

export default store;
```


now set provider to **main.jsx** old was **index.jsx**

```js
import React from 'react'

import ReactDOM from 'react-dom/client'

import App from './App'

import './index.css'

import {Provider} from 'react-redux';

import store from './store/index';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

  <Provider store={store}>

    <App />

  </Provider>

  </React.StrictMode>

)
```



