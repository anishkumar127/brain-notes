https://fakestoreapi.com/



Products to counter 

product in components and counter is in the navbar.
so we can use for pass data.

context api
or we have to do props drilling.

so for props drilling we have to find the common parent.

so in that case common parent is of the navbar and products is
app.js because we are calling proudcts into home js and home js calling into the app.js
and navbar also calling into app.js

so common parent is the app.js 



we install package in react js.
for using toolkit


```cmd
 yarn add @reduxjs/toolkit
```

```cmd
yarn add react-redux
```



we will create into src file.
store folder.
inside store folder we will create cartSlice.

in core redux don't have slice sysetm.
but in the redux toolkit we will use slice .
slice means  we can organize our store data  in small pieces.


wo we create file in store.
cartSlice.js

```js
const initialState = [];
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        add(state,action){

            // old redux

            // return [...state,action.payload]
            state.push(action.payload);
        },
        remove(){}

    }

})
```

so initital state is array.

and we create createSlice method and it is inbuilt method in redux.

name gonna be cart
and intitalstate.
and third it will take  reducers.{}

and we perfom some  action like remove and add.

for example add method take 2 parameter.
one is state which is intitial state, and second is the action.

and old redux we can not direct modify the state
we had to do this. ``return [...state,action.payload]``
but into new redux toolkit and createSlice method we can directly
modify the state.
like this . `` state.push(action.payload);``
this is array so we are pushing .

internally createSlice method do same like redux core do.
its internally do. ``return [...state,action.payload]``


next remove 
```js
 remove(state,action){

          state:state.filter(item=> item.id !=action.payload);  

        }
```

we will filter from state. and check if its not equal which we are passing from the cart.

now exports
```js
export const {add,remove} = cartSlice.actions;
```

we will exports  add and remove. from cart slice . which we are getting from actions. of cartSlice.

and we also export reducers

```js
export default cartSlice.reducer;
```

full code.
```js
const {createSlice} = require('@reduxjs/toolkit')

const initialState = [];

  

const cartSlice = createSlice({

    name:'cart',

    initialState,

    reducers:{

        add(state,action){

            state.push(action.payload);

        },

        remove(state,action){

          state:state.filter(item=> item.id !=action.payload);  

        }

    }

})

export const {add,remove} = cartSlice.actions;

export default cartSlice.reducer;
```


