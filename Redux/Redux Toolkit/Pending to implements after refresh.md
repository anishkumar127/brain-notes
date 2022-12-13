
after refersh should be in the state.
https://stackoverflow.com/questions/46673204/react-redux-state-lost-after-refresh

https://stackoverflow.com/questions/72620395/how-do-we-persist-redux-store-without-using-localstorage-and-make-full-reactjs-w?noredirect=1&lq=1

https://www.npmjs.com/package/redux-persist

reference store using typescript https://github.com/SharjeelSafdar/project9a-shopping-cart-with-redux

unique way class based https://medium.com/@ayabellazreg/make-a-simple-shopping-cart-app-using-react-redux-part-3-32b182e02cc9

https://stackoverflow.com/questions/71665650/react-redux-toolkit-items-in-cart

https://blog.devgenius.io/how-to-use-redux-toolkit-with-using-slice-react-second-half-part-to-use-in-a-real-app-9043c64e4c87



# BEST 
https://reffect.co.jp/react/redux-toolkit  ✅


and BEST https://blog.openreplay.com/building-a-shopping-cart-in-react-with-redux-toolkit-and-redux-persist




some issue solved but length not define issue created. fixed. ✅ check repo.





when get seralizablecheck error we have to pass this inside the storeConfigure after reducer.


```javascript
middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
```

also can do

```javascript
ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
```



Basically it's just this line:

```javascript
middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
```

Which is in the configureStore call.

Also, you need this:

```javascript
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
```



for avoid advice
https://www.bam.tech/article/the-redux-best-practice-do-not-put-non-serializable-values-in-state-or-actions-explained




random
one solution
```javascript
function saveToLocalStorage(store) {
    try {
        const serializedStore = JSON.stringify(store);
        window.localStorage.setItem('store', serializedStore);
    } catch(e) {
        console.log(e);
    }
}

function loadFromLocalStorage() {
    try {
        const serializedStore = window.localStorage.getItem('store');
        if(serializedStore === null) return undefined;
        return JSON.parse(serializedStore);
    } catch(e) {
        console.log(e);
        return undefined;
    }
}

const persistedState = loadFromLocalStorage();

const store = createStore(reducer, persistedState);

store.subscribe(() => saveToLocalStorage(store.getState()));
```



# 2nd

we can setup store to listen the sessionStore or localStorage values, so that value will get preserve,

```javascript
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { createBrowserHistory as createHistory } from 'history';
// import createHistory from 'history/createBrowserHistory';
import rootReducer from '@reducers';
import ApiClient from '@helpers/ApiClient';
import createMiddleware from '@reducers/middleware/clientMiddleware';

export const history = createHistory();

const client = new ApiClient();
const initialState = { users: JSON.parse(window.sessionStorage.getItem('redux') || '{}') };
const enhancers = [];
const middleware = [
  createMiddleware(client),
  thunk,
  routerMiddleware(history)
];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);

const storeDataToSessionStorage = () => {
  window.sessionStorage.setItem('redux', JSON.stringify(store.getState().users));
};

store.subscribe(storeDataToSessionStorage);

export default store;
```





