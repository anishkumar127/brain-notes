
```js
import {Student_table} from './models/user.js';

import {connectDB} from './database.js';

connectDB();  // start database connection.

const addData = async () =>{

    const userInfo = new Student_table({

        name:"anish",

        email:"anishbishnoi127@gmail.com",

        height:6,

        workout:true

    })

    const data = await userInfo.save();

    console.log(data);

}

  

// call function

addData();
```

![[Pasted image 20221120155437.png]]

- advanced import model of student_table 
- advanced import mongodb connection and then call it connectDB();

- create function for async call.
- create new Student_table because we create new for that used new keyword.
- now add all model field into this
- and then save it.
- for response capture const data and then console.log this.
- and then call it function addData() .

- console.log output
![[Pasted image 20221120155709.png]]




- above way not good because we are creating this so why not use in-built method or something ?

# Create method 

- *.create({}) method*
```js
  

const createUser = async () =>{

    const userInto = await Student_table.create({

        name:"Anish Kumar",

        email:"anish@gmail.com",

        height:6,

        workout:false

    })

  

    console.log(userInto);

}

  

// call function

createUser();
```


![[Pasted image 20221120160503.png]]

- console data
![[Pasted image 20221120160515.png]]





# find method
- find all the user we use find method in mongodb.

```js
  

const getUser = async () => {

  const userInfo = await Student_table.find();

  

  console.log(userInfo);

};

  

getUser();
```

![[Pasted image 20221120162345.png]]


![[Pasted image 20221120162359.png]]




# find method with operator

- find

eq - equal operator.


```js
  

const getUser = async () => {

  const userInfo = await Student_table.find({height:{$eq:6}});

  

  console.log(userInfo);

};

  

getUser();
```

![[Pasted image 20221120162936.png]]

*it will find all the user who has height of equal to 6*


# find $gt method

- it fill find all the value who have greater then given value.
- not have any value then it will return empty array [].

```js
  

const getUser = async () => {

  const userInfo = await Student_table.find({height:{$gt:6}});

  

  console.log(userInfo);

};

  

getUser();
```

![[Pasted image 20221120163212.png]]



# find gte method

```js
  

const getUser = async () => {

  const userInfo = await Student_table.find({height:{$gte:6}});

  

  console.log(userInfo);

};

  

getUser();
```

- it will find who has height greater then or equal to 6.

# find $lt
- it will return less then given value

```js
  

const getUser = async () => {

  const userInfo = await Student_table.find({height:{$lt:6}});

  

  console.log(userInfo);

};

  

getUser();
```


# find $lte
- it will found less then or equal
```js
  

const getUser = async () => {

  const userInfo = await Student_table.find({height:{$lte:6}});

  

  console.log(userInfo);

};

  

getUser();

```

# find $in
- its find in the array.
```js
const getUser = async () => {

  const userInfo = await Student_table.find({height:{$in:[5,6]}});

  

  console.log(userInfo);

};

  

getUser();
```
![[Pasted image 20221120164005.png]]

# find $nin
- it will find all the value instead of giving array
```js
const getUser = async () => {

  const userInfo = await Student_table.find({height:{$nin:[5,6]}});

  

  console.log(userInfo);

};

  

getUser();
```
## find more about from official site.

[Query and Projection Operators](https://www.mongodb.com/docs/manual/reference/operator/query/)

[Update Operators](https://www.mongodb.com/docs/manual/reference/operator/update/)