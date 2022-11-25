
- Process of Redux 
![](https://i.imgur.com/2bUzfRy.png)






- Reducer is a pure Function



- Create Store and Reducer

```js
const redux = require('redux');

const initialState = {counter:0};

const counterReducer = (state=initialState, action) =>{

    console.log('state',state);

    console.log('action',action);

return state;

}

  

const store = redux.createStore(counterReducer);

  

const subscriber = () =>{

  const latestState = store.getState();

  console.log(latestState);

}

  

store.subscribe(subscriber);

store.dispatch({type:'INCREMENT'});
```

![](https://i.imgur.com/zTefp63.png)





set action

```js
const redux = require('redux');

const initialState = {counter:0};

const counterReducer = (state=initialState, action) =>{

    // console.log('state',state);

    // console.log('action',action);

    if(action.type==='INCREMENT'){

        return{

            counter:state.counter+1,

        }

    }

return state;

}

  

const store = redux.createStore(counterReducer);

  

const subscriber = () =>{

  const latestState = store.getState();

  console.log(latestState);

}

  

store.subscribe(subscriber);

store.dispatch({type:'INCREMENT'});
```

![](https://i.imgur.com/Ajagbqe.png)




action dispatch
![](https://i.imgur.com/8sfgDvB.png)




>Decrement

```js
const redux = require('redux');

const initialState = {counter:0};

const counterReducer = (state=initialState, action) =>{

    if(action.type==='INCREMENT'){

        return{

            counter:state.counter+1,

        };

    }

    if(action.type ==='DECREMENT'){

        return {

            counter:state.counter-1,

        }

    }

return state;

};

  

const store = redux.createStore(counterReducer);

  

const subscriber = () =>{

  const latestState = store.getState();

  console.log(latestState);

}

  

store.subscribe(subscriber);

store.dispatch({type:'INCREMENT'});

store.dispatch({type:'INCREMENT'});

store.dispatch({type:'INCREMENT'});

store.dispatch({type:'DECREMENT'});
```


![](https://i.imgur.com/yMtZA6k.png)





![](https://i.imgur.com/7ztAl5G.png)


