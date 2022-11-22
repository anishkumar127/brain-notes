direct array we can print.
its join and render it. 
bcz jsx string print


```js
import React from 'react'

  

export default function User() {

    const users = ["anish","kumar","test"];

  return (

    <div>{users}</div>

  )

}
```

![](https://i.imgur.com/svoWN7k.png)




- this will give u error we we print direct


```js
import React from 'react'

  

export default function User() {

    const users = ["anish","kumar","test",{name:"anish"}];

  return (

    <div>{users}</div>

  )

}
```

![](https://i.imgur.com/oltw7h6.png)





# map method render list

```js
import React from 'react'

  

export default function User() {

    const users = ["anish","kumar","test"];

  return (

    <div>{users.map((user)=> <h1>{user}</h1>)}</div>

  )

}
```

# useId hook not work here.

- useId hook not working 
- so we use default second parameter of the map
- but map second parameter don't use every time because its not good to do everytime. some cases its good.
```js
import React, { useId } from 'react'

  

export default function User() {

    const id = useId()

    const users = ["anish","kumar","test"];

  return (

    <div>{users.map((user,index)=> <h1 key={index}>{user}</h1>)}</div>

  )

}
```

![](https://i.imgur.com/Vp8s444.png)



if we use - useId hook it will throw arror like this
![](https://i.imgur.com/os8NjZY.png)


#### Parameters [](https://beta.reactjs.org/apis/react/useId#parameters "Link for Parameters")

`useId` does not take any parameters.

#### Returns [](https://beta.reactjs.org/apis/react/useId#returns "Link for Returns")

`useId` returns a unique ID string associated with this particular `useId` call in this particular component.

#### Caveats [](https://beta.reactjs.org/apis/react/useId#caveats "Link for Caveats")

-   `useId` is a Hook, so you can only call it **at the top level of your component** or your own Hooks. You can’t call it inside loops or conditions. If you need that, extract a new component and move the state into it.
    
-   `useId` **should not be used to generate keys** in a list. [Keys should be generated from your data.](https://beta.reactjs.org/learn/rendering-lists#where-to-get-your-key)




# forEach 

```js
import React, { useId } from 'react'

  

export default function User() {

    const users = ["anish","kumar","test"];

    // example for forEach instead of map method

    const newArray = [];

    users.forEach((user)=>{

        newArray.push(<h1>{user}</h1>);

    })

  

    // so instead of creating forEach we can use map method its ultimately return the new array and which we can print

  return (

    <div>

    {/* {users.map((user,index)=> <h1 key={index}>{index+1} {user}</h1>)} */}

    {/* use of forEach */}

    {/* 1st way */}

    {newArray[0]}

    {newArray[1]}

    {newArray[2]}

    {/* 2nd way */}

    {newArray}

    </div>

  )

}
```




- forEach not return new Array but map return new Array