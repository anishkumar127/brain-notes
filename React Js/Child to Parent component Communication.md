
- object passing as a parameter.
- when do console.log show the details.

![](https://i.imgur.com/sRmPsI1.png)


**app.jsx**
```js
import React from "react";

import reactLogo from "./assets/react.svg";

import "./App.css";

function App() {

const userList =[

  {

    username:"anish",

    status:"Verified"

  },

  {

    username:"kumar",

    status:"Pending"

  }

]

const verifyHandler = (user) =>{

console.log(user);

}

  return (

    <>

     <h1> hello everyone</h1>

     <div>

      <span style={{marginRight:"20px"}}>{userList[0].username}</span>

      <span style={{marginRight:"20px"}}>{userList[0].status}</span>

     </div>

     <button onClick = {()=>verifyHandler(userList[0])}>Verify</button>

  

    </>

  );

}

  

export default App;
```



# Bad way of state Change

![](https://i.imgur.com/7OBVSLf.png)


```js
  

const [users,setUsers] = useState(userList);

const verifyHandler = (index) =>{

  

  // bad way 1st.

  // user.status = "Active";

  

  // 2nd bad way  still from state not change.

  // const user =  users[index];

  // user.status = "Active";

  // setUsers(users);

}
```



# Right way to update Object using useState

![](https://i.imgur.com/KfcK0Bn.png)



```js
  

const [users,setUsers] = useState(userList);

  

const verifyHandler = (index) =>{

const tmpUsers = [...users]; // copied object from array users;

const TempUser = tmpUsers[index];

const userObj = {...TempUser,status:"Active"} // updated object

tmpUsers[index] = userObj;

setUsers(tmpUsers);

}
```



**app.js**
```js
import React, { useState } from "react";

import reactLogo from "./assets/react.svg";

import "./App.css";

const userList =[

  {

    username:"anish",

    status:"Pending"

  },

  {

    username:"kumar",

    status:"Pending"

  }

];

function App() {

  

const [users,setUsers] = useState(userList);

  

const verifyHandler = (index) =>{

const tmpUsers = [...users]; // copied object from array users;

const TempUser = tmpUsers[index];

const userObj = {...TempUser,status:"Active"} // updated object

tmpUsers[index] = userObj;

setUsers(tmpUsers);

}

  return (

    <>

     <h1> hello everyone</h1>

     {users.map((user,index)=>{

      return(

        <div key={index}>

        <div>

        <span style={{marginRight:"20px"}}>{user.username}</span>

        <span style={{marginRight:"20px"}}>{user.status}</span>

       </div>

        <button onClick = {()=>verifyHandler(index)}>Verify</button>

        </div>

      )

     })}

  

    </>

  );

}

  

export default App;
```

![](https://i.imgur.com/jA7vZcb.png)


- onClick on verify state change pending to active


- in that what we do.
we create a copy. then change in that copy and then merge it then we set new Set.
- it will not change for same state. 
- we try to change same reference that case its not working. we need to break reference.than it will work.


# child to parent communication

- function and data pass 

**app.js**
```js
import React, { useState } from "react";

import reactLogo from "./assets/react.svg";

import "./App.css";

import User from "./components/User";

const userList = [

  {

    username: "anish",

    status: "Pending"

  },

  {

    username: "kumar",

    status: "Pending"

  }

];

function App() {

  

  const [users, setUsers] = useState(userList);

  

  const verifyHandler = (index) => {

    const tmpUsers = [...users]; // copied object from array users;

    const TempUser = tmpUsers[index];

    const userObj = { ...TempUser, status: "Active" } // updated object

    tmpUsers[index] = userObj;

    setUsers(tmpUsers);

  }

  return (

    <>

      <h1> hello everyone</h1>

      {users.map((user, index) => {

        return (

          <User username={user.username} status={user.status} index={index} giveMeIndex={verifyHandler} />

        )

      })}

  
  

    </>

  );

}

  

export default App;
```

**user.js**
```js
import React from 'react'

  

const User = ({username,status,index,giveMeIndex}) => {

  return (

    <div key={index}>

        <div >

        <span style={{marginRight:"20px"}}>{username}</span>

        <span style={{marginRight:"20px"}}>{status}</span>

       </div>

        <button onClick = {()=>giveMeIndex(index)}>Verify</button>

    </div>

  )

}

  

export default User
```





![](https://i.imgur.com/vimavNd.png)


![](https://i.imgur.com/0e3f1ws.png)
