
1. index .js

```js
const app = require('./app');

const {PORT} = process.env || 8000;

  

app.listen(PORT,()=>{

    console.log(`Server is running  at port : ${PORT}`);

})
```

2. app.js

```js
require('dotenv').config();

const express = require('express');

const app = express();

  

// connect database calling

require('./database/database').connect();

  

// home route

app.get("/",(req,res)=>{

    res.send("hello is it running see it now");

})

  
  

module.exports = app
```

3. database/database.js

```js
const mongoose = require("mongoose");

const { MONGO_URI } = process.env;

  

exports.connect = () => {

  mongoose

    .connect(MONGO_URI, {

        useNewUrlParser:true,

        useUnifiedTopology:true

    })

    .then(()=> console.log("DB is connected successfully!"))

    .catch((err) => {

      console.log(`DB connection failed ${err}`);

      process.exit(1);

    });

};
```


# Creating Database Model
1. user.js

```js
const mongoose = require('mongoose');

  

const userSchema = new mongoose.Schema({

    firstName: {

        type: String,

        default: null,

    },

    lastName: {

        type: String,

        default: null;

    }

    ,

    email: {

        type: String,

        required: true["email is required"],

    },

    password: {

        type: String,

    },

    // TODO: do on letter on.

    token: {

        type: String,

        default: null,

    }

})

  

module.exports = mongoose.model("user", userSchema);
```



# Adding middleware 

adding middleware in **app.js** file.
because its help to read express application to json format data.

```js
// middleware

app.use(express.json());
```


# Create Register Route

**steps** we needed plan and we will implements in this.

app.js file.

```js
app.post("/register", async (req, res) => {

  try {

    // steps

    // 1. get all data from body

    // 2. all the data should exists

    // 3. check if user already exists

    // 4. encrypt the password

    // 5. save the user in Database

    // 6. generate a token for user and send it.

  } catch (err) {

    console.log(err);

  }

});
```



if coming from the url then its called req.params its called params because its coming from parameter of url.



after define what we gonna do. 

after that first step.

1. get all data from body.
2. and then check is it all data getting from req.body or not.
3. and then check in database is it already present on our database or not.
4. if not present then we go further with encryption the password.

till this time. whatever we did. in app.js file.

```js
const User_DB = require("./model/user");

  

app.post("/register", async (req, res) => {

  try {

    // steps

    // 1. get all data from body

    const { firstName, lastName, email, password } = req.body;

    // 2. all the data should exists

    if (!(firstName && lastName && email && password)) {

      res.statusCode(400).send("All fields are compulsory!");

    }

    // 3. check if user already exists - email

      const existingUser = await User_DB.findOne({email});

      if(existingUser){

        res.statusCode(401).send("User already exists with this email!");

      }

    // 4. encrypt the password

    // 5. save the user in Database

    // 6. generate a token for user and send it.

  } catch (err) {

    console.log(err);

  }

});
```




4. next step we encrypt the password. how we encrypt we just provide the password which we are getting from req.body.
5. and then encrypt it (passsword, there gonna be salt default 10, there can be also pass callback like err,something);
6. so in case we are using. (password,10);

7. next step is create the database model. to save to database.
8. so whatever we are getting from the req.body we push into database model.
9. like create method we are using.
10. in create method we are using object and passing the what we are getting from req.body and which inside property should go. like firstName:firstName
11. so over here firstName is from database and : after coln firstName from the req.body
12. and at latest update we can avoid using : bcz both are same variable. so we can use firstname, lastName, etc.

app.js till this time what we did 

```js
const User_DB = require("./model/user");

const bcrypt = require("bcryptjs");

  

app.post("/register", async (req, res) => {

  try {

    // steps

    // 1. get all data from body

    const { firstName, lastName, email, password } = req.body;

    // 2. all the data should exists

    if (!(firstName && lastName && email && password)) {

      res.statusCode(400).send("All fields are compulsory!");

    }

    // 3. check if user already exists - email

    const existingUser = await User_DB.findOne({ email });

    if (existingUser) {

      res.statusCode(401).send("User already exists with this email!");

    }

    // 4. encrypt the password

    const myEncryptedPassword = await bcrypt.hash(password,10);

    // 5. save the user in Database

 const createdUser = await User_DB.create({

        firstName,

        lastName,

        email,

        password,

    });

  
  

    // 6. generate a token for user and send it.

  } catch (err) {

    console.log(err);

  }

});
```



but one more case we above encrypted our password so we need to store encrypted password inside our database so we use password:encyptedpassword;

```js
    // 4. encrypt the password

    const myEncryptedPassword = await bcrypt.hash(password, 10);

    // 5. save the user in Database

    const createdUser = await User_DB.create({

      firstName,

      lastName,

      email,

      password:myEncryptedPassword,

    });
```



6. now we are going to create **jsonwebtoken** for that we use jwt.sign method
7. and this method take. which basis u r going to create token.
8. so we are creating token base of _id which we are getting from database this is unique id and also we can add multiple but we are just using _id and email  which we are getting from database model. like createdUser we create above. and exteting the _id  and email and passwing to the jwt.sign method, and we also have to provide the
9. secret key which will be secret the token like unique access key. so we also this used and it is should be encypted not viisble to client because from this anyone can access our login.
10. now we also provide the expire time which time we should expire the token no longer to be used.
11. and next we also store that token to our database. for storing the database. we above createdUser inside we add the value of createdUser.token and which token we are getting from the jwt. sign = token
12. like that createdUser.token = token;  and = token that token we are getting from the jwt.sign.
13. and createdUser.token that is the property of model. which we are created in the mongodb model.

14. and also above we encypted the password we don't wanna send to front end user like client so we can do undefined .
15. to do undefined will not conflict the database because we are not storing undefined to datbase.


app.js file till this time what we did

```js
const User_DB = require("./model/user");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

  

app.post("/register", async (req, res) => {

  try {

    // steps

    // 1. get all data from body

    const { firstName, lastName, email, password } = req.body;

    // 2. all the data should exists

    if (!(firstName && lastName && email && password)) {

      res.statusCode(400).send("All fields are compulsory!");

    }

    // 3. check if user already exists - email

    const existingUser = await User_DB.findOne({ email });

    if (existingUser) {

      res.statusCode(401).send("User already exists with this email!");

    }

    // 4. encrypt the password

    const myEncryptedPassword = await bcrypt.hash(password, 10);

    // 5. save the user in Database

    const createdUser = await User_DB.create({

      firstName,

      lastName,

      email,

      password:myEncryptedPassword,

    });

    // 6. generate a token for user and send it.

    const token = jwt.sign(

        {id:createdUser._id, email:createdUser.email},

        'jksklslse23', // process.env.jwtsecret

        {

            expiresIn:"2h"

        }

    );

    createdUser.token = token;

    createdUser.password=undefined;

  } catch (err) {

    console.log(err);

  }

});
```

16. now send all data to database. because we did everything whatever needed.

```js
  

    res.statusCode(201).json(createdUser);
```

so here we all done and then just show to success code and render what is stored to database.

1. here what we can do. we don't wanna see to client what is password. and what fields and what token.
2. so that's things we can ignore by some changes.
3. and we can also store the token to database 
4. yeah we can do many things but we do further next time this thing to more complicated and more secure things.


Register past done now we go to the login part.

# Login

app.js
```js
  

app.post("/login", async (req, res) => {

try{

   // 1. get all data from frontend

   // 2. find user in DB

   // 3. match the password

   // 4. send a token

}catch(err){

    console.log(err);

}

});
```
over here plan is 
1. get all the data from the front end by req.body
2. then find that user we are putting email or password in req.body check it is it present or database or not.
3. if email present then validate the password is same or not. and check hashed pasword validate form the bcyrpt js.
4. if all good user present into the database and the password is same then next we let him go further and also we send to token 

```js
  

app.post("/login", async (req, res) => {

try{

   // 1. get all data from frontend

   const {email,password} = req.body;

   // validation

   if(!(email && password)){

    res.status(400).send("both field is required");

   }

   // 2. find user in DB

const userExists =   await User_DB.findOne({email});

  

if(!userExists){

    res.status(400).send("please provide valid user");

}
```


so above !userExits not exists then we are throwing the error. 

or we can also do without this.

```js
if(userExists && (await bcrypt.compare(password,userExists.password))){

    const token = jwt.sign(

        {id:userExists._id},

        "jksklslse23", // process.env.jwtsecret

        {

          expiresIn: "2h",

        }

    );

}
```

we can go by line by line or step by step and we can also do directly.


2. now comparing the password process.


```js
  if (userExists && (await bcrypt.compare(password, userExists.password))) {

      const token = jwt.sign(

        { id: userExists._id },

        "jksklslse23", // process.env.jwtsecret

        {

          expiresIn: "2h",

        }

      );

      userExists.token =token;

      userExists.password = undefined;

    }
```

3. bcrypt.compare method take as a parameter some values.
4. for comparing the value which we are getting from req.body and which we are stored into our database.
5. so in database we are stored value into the hashed format and in req.body we are getting un hashed format value.
6. so we check this from the compare method.
7. compare method first take password which we are getting from the req.body and 2nd paramter as a password which we are getting from the our database. like userExits.password.

8. after comparing done. sucesfully. then we go forther and create token.
9. token also take same database _id  and the secret key and the expireIn time if we want to give
10. and also we will set to exitsUser.token = token that token.
11. and also set for frontend client password as a undefined because of security reasons.

app.js login routes

```js
  

app.post("/login", async (req, res) => {

  try {

    // 1. get all data from frontend

    const { email, password } = req.body;

    // validation

    if (!(email && password)) {

      res.status(400).send("both field is required");

    }

    // 2. find user in DB

    const userExists = await User_DB.findOne({ email });

  

    if (!userExists) {

      res.status(400).send("please provide valid user");

    }

    // 3. match the password

    //   const encryptedPassword = await bcrypt.compare(password,userExists.password);  // we can also do this. if above !userExists condition not done.

    // or we can do like this

    if (userExists && (await bcrypt.compare(password, userExists.password))) {

      const token = jwt.sign(

        { id: userExists._id },

        "jksklslse23", // process.env.jwtsecret

        {

          expiresIn: "2h",

        }

      );

      userExists.token =token;

      userExists.password = undefined;

    }

  

    // 4. send a token

  } catch (err) {

    console.log(err);

  }

});
```


now we need to send token
for that we will need to cookie-parser
1. also noted things is cookier parser is middleware so we have to use app.use(cookieParser()) as a middleware.
```js
const cookieParser = require('cookie-parser');
// middleware
app.use(cookieParser());
```




now for cookie parser 
1. we have to do some things in **login routes**

2. and cookie parser take expire time use Date method. 
3. first it will take currentData using Date.now() method and then  + 3 as a day. * 24 as a hours * 60 as a minutes * 60 as a seconds * 1000 as a miliseconds
4. and we set httpOnly as a true as  security purpose. like this cookie only manipulate by the broweser or server not by us.

```js
  // cookie Section

    const options ={

        expires:new Date(Date.now()+ 3 * 24 * 60 * 60 * 1000),

        httpOnly:true,

    };

    res.status(200).cookie("token",token,options).json({

        success:true,

        token,

        userExists,

    })
```

we send cookie as a cookie.("there will be a string name", here will be token, and here will be validation like expires time etc.). then we can also send as a response. to client in that what we want to include we can include like success true or send also a token. or a user which we are getting from the database and their entire information.

app.js login route done.

```js
  

app.post("/login", async (req, res) => {

  try {

    // 1. get all data from frontend

    const { email, password } = req.body;

    // validation

    if (!(email && password)) {

      res.status(400).send("both field is required");

    }

    // 2. find user in DB

    const userExists = await User_DB.findOne({ email });

  

    if (!userExists) {

      res.status(400).send("please provide valid user");

    }

    // 3. match the password

    //   const encryptedPassword = await bcrypt.compare(password,userExists.password);  // we can also do this. if above !userExists condition not done.

    // or we can do like this

    if (userExists && (await bcrypt.compare(password, userExists.password))) {

      const token = jwt.sign(

        { id: userExists._id },

        "jksklslse23", // process.env.jwtsecret

        {

          expiresIn: "2h",

        }

      );

      userExists.token = token;

      userExists.password = undefined;

  

      // 4. send a token in userExists cookie

      // cookie Section

      const options = {

        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),

        httpOnly: true,

      };

      res.status(200).cookie("token", token, options).json({

        success: true,

        token,

        userExists,

      });

      //   res.status(201).json(userExists); no use now.

    }

  

    // send a token

  } catch (err) {

    console.log(err);

  }

});
```



# Note -> Some mistake i did .
1. i did statusCode its will give error. so for that we have to use.
2. status() method. above method statusCode() is wrong.


# Thuder Client long URL shorting.
using env variable

![](https://i.imgur.com/3r1VQn2.png)


and then do post request

![](https://i.imgur.com/ukYxW6n.png)


URL visibility should be public in codespaces terminal

# add middleware

folder middleware and inside auth.js

```js
const jwt = require("jsonwebtoken");

  

const auth = (req, res, next) => {

  // grab token from cookie

  console.log(req.cookies);

  const { token } = req.cookies;

  // if no token , stop there,

  if (!token) {

    res.status(403).send("Please login first!");

  }

  // decode that token and get id

  try {

    const decode = jwt.verify(token, "jksklslse23");

    req.user = decode;

    console.log(decode);

  } catch (err) {

    console.log(err);

    res.status(401).send("Invalid Token");

  }

  // query to DB for that user id

  return next();

};

  

module.exports = auth;
```


# FULL Code  [[Auth]]
[Auth]([[Auth]])
Repository -> [auth](https://github.com/anishkumar127/auth-mongodb-express)


# now Testing API

# 1. Register API

```http
{{URL}}/register
```

```JSON
{
  "firstName":"anish",
  "lastName":"bishnoi",
  "email":"anish@gmail.com",
  "password":"test1"
}
```
![](https://i.imgur.com/4ZecBAP.png)


# 2. Login API

```http
{{URL}}/login
```

```JSON
{
  "email":"anish@gmail.com",
  "password":"test1"
}
```

![](https://i.imgur.com/HgBgx2N.png)


# 3. Dashboard

1. working auth middleware

![](https://i.imgur.com/ky0tA1b.png)


