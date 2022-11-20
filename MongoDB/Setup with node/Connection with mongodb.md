
file **database.js**

```js
import mongoose from 'mongoose';

  

const connectDB = async () =>{

    const mongo = "mongodb://localhost:27017";

    try{

    const connection = await mongoose.connect(mongo)

    if(connection){

        console.log("connected");

    }

    }catch(err){

        console.log(err);

    }

}

  

connectDB();
```


![[Pasted image 20221120152236.png]]





- we also need to define collections name. or server name.

so for that. 

  ```js
const mongo = "mongodb://localhost:27017/<name put here >";
```

```js
  const mongo = "mongodb://localhost:27017/Student_Data";
```





## above code was in one file

# Export Level File.

```js
import mongoose from "mongoose";

  

 export  const connectDB = async () => {

  const mongo = "mongodb://localhost:27017/Student_Data";

  try {

    const connection = await mongoose.connect(mongo);

    if (connection) {

      console.log("connected");

    }

  } catch (err) {

    console.log(err);

  }

};
```

![[Pasted image 20221120155143.png]]