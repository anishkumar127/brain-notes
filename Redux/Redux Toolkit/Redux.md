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

now we just need to update add into the jsx file {items.length} and we will see adding cart.

full code.

```js
import React from 'react'

import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'

const Navbar = () => {

  const items = useSelector((state)=>state.cart);

  return (

    <div style={{display:'flex',alignItem:'center',justifyContent:'space-between'}}>

        <span className='logo'>REDUX STORE</span>

        <div>

            <Link className='navLink' to="/">Home</Link>

            <Link className='navLink' to="/">Cart</Link>

            <span className='cartCount'>Cart items: {items.length}</span>

        </div>

    </div>

  )

}

  

export default Navbar
```


# next

we need to render the list of which we do add to cart.
that items list we want to render.

this  also we will get from the useSelector hooks and which will get from the store.

```js
import React from 'react'

import { useSelector } from 'react-redux'

  

const Cart = () => {

  const products = useSelector(state=>state.cart);

  console.log(products)

  return (

    <div>

      <h3>Cart</h3>

      <div className='cartWrapper'>

        {

          {

          }

        }

      </div>

    </div>

  )

}

  

export default Cart
```

basically its return the array.

so we will map into this and render the list.


```js
import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { remove } from "../store/cartSlice";

const Cart = () => {

  const dispatch = useDispatch();

  const products = useSelector((state) => state.cart);

  const handleRemove = (productId) => {

    // console.log(productId); index ayega.

    dispatch(remove(productId));

  };

  return (

    <div>

      <h3>Cart</h3>

      <div className="cartWrapper">

        {products.map((product) => (

          <div key={product.id}>

            <img src={product.image} alt="image" />

            <h5>{product.title}</h5>

            <h5>{product.price}</h5>

            <button className="btn" onClick={() => handleRemove(product.id)}>

              Remove

            </button>

          </div>

        ))}

      </div>

    </div>

  );

};

  

export default Cart;
```
and inside redux
```js
    remove(state, action) {

      return state.filter((item) => item.id != action.payload);

    },
```

if we click remove button it will call the dispatch hook and it will go to cartSlice and call reducer
reducer call the remove method. 
and it will filter out and direct return the new state. we will not muted the state.
like we add method directly muted the state.
**note ** pending the how filter method is working ?

bcz its taking id from the map method which in jsx and from there it it taking the id. and id going to cartSlice then its come to remove reducer. and here it is doing the filter.
so item iterate and item.id is not != action.payload. ? how its working ?


till this time branch 
https://github.com/anishkumar127/E-commerce-Redux-Store/tree/v1-FirstStage

# Asycn & API Task Inside Reducer


so we need to api data store into redux store ?
where need to store ?

ok so we don't need to store if we are not using same data to multiple location or pages.

so if our api data using everything time into the multiple pages and multiple location then we can store the api data to the redux store.


next
so now we create a productSlice.js file. into the store folder.

and inside we do some things.

```js
const productSlice = createSlice({

  name: "product",

  initialState:{

  },
```

so previous our initial state was array. but this time our initial state is a object.

why ?

because api takes time.we need to till wait till time api not successfully called and fetch the data and return.

so till time we need to show something. so we will pass that between call api time what we want to our initial state. 


so **intitialState** we will take , our data  and data will be our array form. **data**:[] and we take a **status**. and status can be anything. **like** **loading**, **success**, **error**, **idle** etc.

so in status we pass the string. but when pass string so we need to Enum mechanism but JavaScript doesn't have Enum mechanism, but typescript has Enum mechanism, so we will use in JavaScript object and create similar like Enum mechanism.

```js
const STATUSES ={

    IDLE:'idle',

    ERROR:'error',

    LOADING:'loading'

}
```

but we also don't want to someone change directly to the state. using access object. and **IDLE.'something'**
so we will do object contractor has property like freeze so we can freeze the object.

```js
const STATUSES = Object.freeze({

  IDLE: "idle",

  ERROR: "error",

  LOADING: "loading",

});
```

now this is in read only mode.
now our default status will be idle.
```js
const productSlice = createSlice({

  name: "product",

  initialState: {

    data: [],

    status:STATUSES.IDLE

  },
```

now we will change the reducer.

```js
 reducers: {

    setProducts(state, action) {

        state.data = action.payload

    },
```

wo whatever we get from the payload it will set to the state.

and we don't do ever , never ever do the api call inside the reducers and redux.
bcz they are pure function. they don't have the side effect and they are the syncho function.
so we can't do this.bcz api call also a side effects.

so how we do this call? bcz we need to api call. 
so for that we will use **Redux Thunk**

what is thunks ?

``The word "thunk" is a programming term that means "a piece of code that does some delayed work".
``Rather than execute some logic now, we can write a function body or code that can be used to perform the work later.


old core redux we needed to configure the thunks into the redux store. but inside the redux toolkit its have inbuilt . we don't need to configure this.


2 types of thunks. 2 types we can use thunk.

# 1

thunks is a normal function , and inside the thunk function we need to return the function and that function should be async.

```js
export function fetchProducts() {

  return async function fetchProductThunk(dispatch, getState) {

    try {

      const res = await fetch("https://fakestoreapi.com/products/");

      const data = await res.json();
      dispatch(setProducts(data))

    } catch (err) {}

  };

}
```
we will use try catch because we do api call we need to handle the error also. so we will use try catch.
and thank function take 2 paramter one is the dispatch and one will be the get the state.
so we do api call. convert to json and pass to the that data to the dispatch method and inside we pass setProducts reducers. inside setProducts reducer we will pass the that data which we are getting from the api calls.


now we set the status inside the reducers.

```js
   setStatus(state, action) {

      state.status = action.payload;

    },

  },
```

and also that status we will pass to the thunk function before the api call. and we do loading state. 

```js
    dispatch(setStatus(STATUSES.LOADING));
```

also can see inside the reducers

```js
  reducers: {

    setProducts(state, action) {

      state.data = action.payload;

    },

    setStatus(state, action) {

      state.status = action.payload;

    },

  },

});

export const { setProducts, setStatus } = productSlice.actions;
```

and also can see inside the thunk function

```js
// Thunks

  

export function fetchProducts() {

  return async function fetchProductThunk(dispatch, getState) {

    dispatch(setStatus(STATUSES.LOADING));

    try {

      const res = await fetch("https://fakestoreapi.com/products/");

      const data = await res.json();

      dispatch(setProducts(data));

    } catch (err) {}

  };

}
```


so now we also need to set the status. inside the thunk function
after successful api data fetch. and if get error then error status.

```js
export function fetchProducts() {

  return async function fetchProductThunk(dispatch, getState) {

    dispatch(setStatus(STATUSES.LOADING));

    try {

      const res = await fetch("https://fakestoreapi.com/products/");

      const data = await res.json();

      dispatch(setProducts(data));

      dispatch(setStatus(STATUSES.IDLE));

    } catch (err) {

      console.log(err);

      dispatch(setStatus(STATUSES.ERROR));

    }

  };

}
```


getState parameter inside the thunk function. we can get the state of from the parameter. if we want to state and then do soomething. for that case we use getState

next
now we will register that reducer into the our store.

```js
import { configureStore } from "@reduxjs/toolkit";

  

import cardReducer from "./cartSlice";

import productReducer from "./productSlice";

const store = configureStore({

  reducer: {

    cart: cardReducer,

    product: productReducer,

  },

});

  

export default store;
```

and we set into the product.jsx file

```js
import { fetchProducts } from "../store/productSlice";

const Products = () => {

  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  

  useEffect(() => {

    // with thunk

    dispatch(fetchProducts());
```

we use dispatch and we do call dispatch inside the use Effect and fetchProductsi() call and we can also pass the parameter and it will receive by the thunk function.

next

now we go to browser and see.
first is  setStatus its coming as a loading
![](https://i.imgur.com/a6oLK5M.png)


setproducts also getting the data also status is still loading.

![](https://i.imgur.com/umFW2CM.png)



and again setStatus is getting the data and the status is idle

![](https://i.imgur.com/EfET2XO.png)


now we are not getting the anything into the ui. because we need to get the data from the redux store. and then render to the ui. and from how we can get the data from the store. 
for that we will use the useSelector hook and it will get the whole state and from we can get the state which we want.

```js
  const {} = useSelector((state)=>state.Products);
```

now we need to destrcture because we are getting two data from products. 
one is the array which is data. and one is the status.

```js
  const { data: products, status } = useSelector((state) => state.product);
```

why we are doing data:products ? because we just doing alias , rename the data to products.

full code.

```js
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { add } from "../store/cartSlice";

import { fetchProducts } from "../store/productSlice";

const Products = () => {

  const dispatch = useDispatch();

  const { data: products, status } = useSelector((state) => state.product);

  // const [products, setProducts] = useState([]);

  

  useEffect(() => {

    // with thunk

    dispatch(fetchProducts());

  

    // without thunk

    // const fetchProducts = async () => {

    //   const res = await fetch("https://fakestoreapi.com/products/");

    //   const data = await res.json();

    //   setProducts(data);

    // };

    // fetchProducts();

  }, []);

  const handleAdd = (product) => {

    dispatch(add(product));

  };

  return (

    <div className="productsWrapper">

      {products.map((product) => (

        <div className="card" key={product.id}>

          <img src={product.image} alt="image" />

          <h4>{product.title}</h4>

          <h5>{product.price}</h5>

          <button onClick={() => handleAdd(product)} className="btn">

            Add to cart

          </button>

        </div>

      ))}

    </div>

  );

};

  

export default Products;
```

till time its working fine. rendering all the data to ui.


NEXT

if we want to show loading till our not fetching the data.
that things we can also can do it.

so we import the status from the store of the redux

```js
import { STATUSES } from "../store/productSlice";
```

and also we mark to export the status in the redux store.

now come below and from returning the jsx. we pass check.

```js

  if (status === STATUSES.LOADING) {

    return <h2>Loading...</h2>;

  }

  return (

    <div className="productsWrapper">
```

we can also pass the if we are getting the error so we can pass the error also.

```js
 if (status === STATUSES.ERROR) {

    return <h2>Something went wrong!</h2>;

  }
```

full code

```js
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { add } from "../store/cartSlice";

import { fetchProducts } from "../store/productSlice";

import { STATUSES } from "../store/productSlice";

const Products = () => {

  const dispatch = useDispatch();

  const { data: products, status } = useSelector((state) => state.product);

  // const [products, setProducts] = useState([]);

  

  useEffect(() => {

    // with thunk

    dispatch(fetchProducts());

  

    // without thunk

    // const fetchProducts = async () => {

    //   const res = await fetch("https://fakestoreapi.com/products/");

    //   const data = await res.json();

    //   setProducts(data);

    // };

    // fetchProducts();

  }, []);

  const handleAdd = (product) => {

    dispatch(add(product));

  };

  

  if (status === STATUSES.LOADING) {

    return <h2>Loading...</h2>;

  }
 if (status === STATUSES.ERROR) {

    return <h2>Something went wrong!</h2>;

  }
  return (

    <div className="productsWrapper">

      {products.map((product) => (

        <div className="card" key={product.id}>

          <img src={product.image} alt="image" />

          <h4>{product.title}</h4>

          <h5>{product.price}</h5>

          <button onClick={() => handleAdd(product)} className="btn">

            Add to cart

          </button>

        </div>

      ))}

    </div>

  );

};

  

export default Products;
```



till time working code and branch - https://github.com/anishkumar127/E-commerce-Redux-Store/tree/v2-SecondStage


NEXT
# 2 Second way of redux thunk.
-  Thunk new way

```js
export const fetchProducts = createAsyncThunk('products/fetch',async ()=>{})
```

it is inbuilt method by the redux toolkit. and method is the createAsyncThunk. it takes 2 parameters. one is the **identifiers** which can be anything. second is the async function.


now we don't need to dispatch anything or set the status we just need to call api and return that data which we are getting from the api

```js
export const fetchProducts = createAsyncThunk("products/fetch", async () => {

  const res = await fetch("https://fakestoreapi.com/products/");

  const data = await res.json();

  return data;

});
```

createAsyncThunk create for the better error handling. 


NEXT

now we inside the createProduce.js file.
we createSlice.js we will remove the reducers.
and we instead of reducers we do someething else. we define extraReducer  and  it is the  and ()  its take the builder and inside the builder we add the case addCase();
and inside the addCase we call fetchProducts.pending and pending like the promises we can get the properity like the promises has a pending success and reject something like that.

if pending action dispatch. its automatically dispatch we don't do manulally
if pending then we do second parameter a function and it also take 2 paramtere. like state and action. if status is pending then we do status.loading.


```js
  extraReducers: (builder) => {

    builder.addCase(fetchProducts.pending, (state, action) => {

      state.status = STATUSES.LOADING;

    });

  },

});
```

so we do like this. above code.

what is fetchProducts that is basically we are getting from the fetch api. which is the thunk
can we see. 
```js
  

  extraReducers: (builder) => {

    builder.addCase(fetchProducts.pending, (state, action) => {

      state.status = STATUSES.LOADING;

    });

  },

});

export const { setProducts, setStatus } = productSlice.actions;

export default productSlice.reducer;

  

// Thunk new way

  

export const fetchProducts = createAsyncThunk("products/fetch", async () => {

  const res = await fetch("https://fakestoreapi.com/products/");

  const data = await res.json();

  return data;

});
```

like this. 

next
we can create multiple cases. so if fulfilled then we do 
```js
   .addCase(fetchProducts.fulfilled, (state, action) => {

        state.data = action.payload;

        state.status = STATUSES.IDLE;

      });
```

set the data to state. and also set the status idle.

if we get error then set the status and promises rejected
```js
 .addCase(fetchProducts.rejected, (state, action) => {

        state.status = STATUSES.ERROR;

      });
```


so its working like core redux and also the something like switch cases and the product.jsx file nothing will change , that will be the same.
and internally redux do for us. we don't need to manually do the pending,fulfill,reject which basically we do the when handle promises.

full code
```js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const initialState = [];

export const STATUSES = Object.freeze({

  IDLE: "idle",

  ERROR: "error",

  LOADING: "loading",

});

const productSlice = createSlice({

  name: "product",

  initialState: {

    data: [],

    status: STATUSES.IDLE,

  },

  extraReducers: (builder) => {

    builder

      .addCase(fetchProducts.pending, (state, action) => {

        state.status = STATUSES.LOADING;

      })

      .addCase(fetchProducts.fulfilled, (state, action) => {

        state.data = action.payload;

        state.status = STATUSES.IDLE;

      })

      .addCase(fetchProducts.rejected, (state, action) => {

        state.status = STATUSES.ERROR;

      });

  },

});

export const { setProducts, setStatus } = productSlice.actions;

export default productSlice.reducer;

  

// Thunk new way

  

export const fetchProducts = createAsyncThunk("products/fetch", async () => {

  const res = await fetch("https://fakestoreapi.com/products/");

  const data = await res.json();

  return data;

});
```


product.jsx full code

```js
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { add } from "../store/cartSlice";

import { fetchProducts } from "../store/productSlice";

import { STATUSES } from "../store/productSlice";

const Products = () => {

  const dispatch = useDispatch();

  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {

    // with thunk

    dispatch(fetchProducts());

  }, []);

  const handleAdd = (product) => {

    dispatch(add(product));

  };

  

  if (status === STATUSES.LOADING) {

    return <h2>Loading...</h2>;

  }

  if (status === STATUSES.ERROR) {

    return <h2>Something went wrong!</h2>;

  }

  

  return (

    <div className="productsWrapper">

      {products.map((product) => (

        <div className="card" key={product.id}>

          <img src={product.image} alt="image" />

          <h4>{product.title}</h4>

          <h5>{product.price}</h5>

          <button onClick={() => handleAdd(product)} className="btn">

            Add to cart

          </button>

        </div>

      ))}

    </div>

  );

};

  

export default Products;
```

now we can see. of working in the browser

![](https://i.imgur.com/RRnFtQv.png)


pending
![](https://i.imgur.com/nWIoiFW.png)
and pending doesn't have data
![](https://i.imgur.com/JIqgVlP.png)


fullfilled

![](https://i.imgur.com/QyYkgzP.png)
and fullfilled has data.

![](https://i.imgur.com/EKpsAZX.png)


next

so now  if we refresh then cart data lost. so that's in real world should be inside the store and the cart. for that we can store to the database , server or local storage.

