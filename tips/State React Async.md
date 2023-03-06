
```js
import React, { useState } from "react";

  

const Todo = () => {

  const [activity, setActivity] = useState("");

  const [store, setStore] = useState([]);

  

  const addActivity = () => {

    setStore([...store, activity]); // issue dual render. because of async state in react.

    console.log(store);

  };

  return (

    <>

      <div className="container">

        <div className="header">TODO LIST</div>

        <input

          type="text"

          placeholder="enter todo..."

          value={activity}

          onChange={(e) => setActivity(e.target.value)}

        />

        <button onClick={addActivity}>Add</button>

      </div>

    </>

  );

};

  

export default Todo;
```

**state in async its not sync**
****
**because of this issue we will first get previous value and then add next value.**
**and from this issue we get duplicate value. 2 time add value**

**below image**


![](https://i.imgur.com/HXJD8z3.png)


![](https://i.imgur.com/uF8tT73.png)



![](https://i.imgur.com/v7zqtoi.png)




![](https://i.imgur.com/AYK2bUO.png)






**after 2 click value add to list. and also issue is duplicate.**



# Avoid this issue.

**make them synchronous**

```js
import React, { useState } from "react";

  

const Todo = () => {

  const [activity, setActivity] = useState("");

  const [store, setStore] = useState([]);

  

  const addActivity = () => {

    // setStore([...store, activity]); // asynchronous issue dual render. because of async state in react.

    setStore((data) => {

      // this is synchronous

      const updatedData = [...data, activity];

      console.log(updatedData);

      setActivity("");

      return updatedData;

    });

  };

  return (

    <>

      <div className="container">

        <div className="header">TODO LIST</div>

        <input

          type="text"

          placeholder="enter todo..."

          value={activity}

          onChange={(e) => setActivity(e.target.value)}

        />

        <button onClick={addActivity}>Add</button>

      </div>

    </>

  );

};

  

export default Todo;
```
