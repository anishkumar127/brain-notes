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
import { createSlice } from "@reduxjs/toolkit";

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


# Store
now we create store. 

```js
import {configureStore} from '@reduxjs/toolkit'

  

import cardReducer from './cartSlice';

  

const store = configureStore({

    reducer:{

        cart:cardReducer,

    }

})
```

store will take above which we create cartSlice. we will import that and pass to store reducer.
as a cart:cardReducer.
and if we have multiple files so we can import and will add to the reducer inside the store.

now we will export the store.

```js
export default store;
```

full code

```js
import {configureStore} from '@reduxjs/toolkit'

  

import cardReducer from './cartSlice';

  

const store = configureStore({

    reducer:{

        cart:cardReducer,

    }

})

  

export default store;
```


# Next Provider Import

so now we wil import Provider into app.js 
and wrap everything into the provider.

import
```
import { Provider } from 'react-redux'
```

wrap 

```js
<Provider> </Provider>
```


react-redux give us a provider.
and now we need to that provider our store.

```js
 <Provider store={store}> ....components... </Provider>
```

some cases people wrap store into the index file.

and also we will import store into app.js

```js
import store from './store/store'
```



# next step.
react app part.

**Products.jsx** file

```js
import React, { useEffect, useState } from 'react'

  

const Products = () => {

    const[products,setProducts] = useState([]);

  

    useEffect(()=>{

        const fetchProducts = async () =>{

            const res = await fetch("https://fakestoreapi.com/products/")

            const data = await res.json();

            console.log(data);

            setProducts(data);

        }

        fetchProducts();

    },[])

const handleAdd = (product) =>{

// store into redux store.

  

}

  return (

    <div className='productsWrapper'>

        {

            products.map((product)=>(

                <div className='card' key={product.id}>

                    <img src ={product.image} alt="image"/>

                    <h4>{product.title}</h4>

                    <h5>{product.price}</h5>

                    <button onClick={()=>handleAdd(product)} className='btn'>Add to cart</button>

                </div>

            ))

        }

    </div>

  )

}

  

export default Products
```

inside we handleAdd we will work with store the data into store.


now
we will import the add from the cartSlice file.

```js
import {add} from '../store/cartSlice'
```

and also for dispatch we will use a hook which we will import from the react-redux.

```js
import {useDispatch} from 'react-redux'
```

and also call useDisptach

```js
    const dispatch = useDispatch();
```

so next
```js
const handleAdd = (product) =>{

dispatch(add(product));

}
```

we will use dispatch and inside dispatch we all add method from the cartSlice file.

and pass the payload to the add method.

dispatch then add method and then inside add method pass payload. and payload is product. which we are getting from the button and on button we are using the handleAdd onClick event listener.
so when we click on button then handleAdd method will call and this will
dispatch and disptach call add method inside cartSlice and add method use paylaod which we he is getting from the handleadd method.


now we go to the browser
and click on add to cart button
see img
![](https://i.imgur.com/4kKxaqc.png)


so we can see inside the.  redux devtool extension. 
when we click. on add to cart .
it will dispatch from button and call handle add and handle add  inside
dispatch the add method from the cartSlice inside add pass the payload.
and payload is the array which we are comming from the. api.
and api to passing to the button from button to the getting to handleadd and handleadd to dispatch and dispatch to add and add getting that payload.

and then inside add. and inside the redux cartSlice.
what we are doing
lets see first .

```js
 reducers:{

        add(state,action){

            state.push(action.payload);

        },
```
inside cartSlice we are using reducers and inside reducer is
add method and add method taking initial state which is array.
and a action.
wo we are pushing into intial state a array. and what we are pushing into the array.
we are pushing the payload which we are getting from the action.

so that's is the whole working of this code.


# next 

so now what we are going to do is 
inside the our navbar a counter tag.
so we need to increase the counter.
when we do add to cart. we need to see how much value added into the cart.

so from the store getting the value. we will use a hook
which we are get from the react-redux.


```js
import { useSelector } from 'react-redux'
```

useSelector as a substriber wala work krta hai.
we subscribed . so we don't need to request to get the value. it will give automatically the value.
bcz we are subsribed this.



next

![](https://i.imgur.com/mJ2r97n.png)


so

```js
  const items = useSelector((state)=>state.cart);
```

we need to pass the function to useSelector , useSelector take the function.
and function return the value.

so state is not the cartSlice state. its the whole application state.
so which we can get anything. and we can subsribe anything.

so our we are subscribing the **cart** which are inside the cartSlice. above img we can see.

