reference change then components re render in react.
useState  change the reference of array then its help to re render the componenets

```js
import React, { useState } from 'react'

  

export default function User() {

    const [users,setUsers] = useState([]);

    const addMe = () =>{

        console.log("adding more students..");

        setUsers(["anish"]);

    }

  return (

    <div>

    <button onClick={addMe}>Click me to add</button>

    {users.map((user,index)=> <h1 key={index}>{index+1} {user}</h1>)}

    </div>

  )

}
```

so above code only one time print anish second time not print
because its changing the reference but value is same.
that's reason its not print another array.


for that we use spread operator ... it will help to new and previous value also.


```js
import React, { useState } from 'react'

  

export default function User() {

    const [users,setUsers] = useState([]);

    const addMe = () =>{

        console.log("adding more students..");

        setUsers([...users,"anish"]);

    }

  return (

    <div>

    <button onClick={addMe}>Click me to add</button>

    {users.map((user,index)=> <h1 key={index}>{index+1} {user}</h1>)}

    </div>

  )

}
```


- it will print anish and also re render and also print again new array.
- but sometime its not print new array.
- because of colosers 
-  if we click and wait few ms then click its run
- but if we do fast it will sometimes not add new 

for work that we will use users => 
so we pass callback and from call back we always get new value

```js
import React, { useState } from 'react'

  

export default function User() {

    const [users,setUsers] = useState([]);

    const addMe = () =>{

        console.log("adding more students..");

        setUsers(users=>[...users,"anish"]);

    }

  return (

    <div>

    <button onClick={addMe}>Click me to add</button>

    {users.map((user,index)=> <h1 key={index}>{index+1} {user}</h1>)}

    </div>

  )

}
```

