Complete Code -> also can visit [auth](https://github.com/anishkumar127/auth-mongodb-express)
1. **index.js**

```js
const app = require('./app');

const {PORT} = process.env || 8000;

  

app.listen(PORT,()=>{

    console.log(`Server is running  at port : ${PORT}`);

})
```


2. **app.js**

```js
require("dotenv").config();

const express = require("express");

const app = express();

const User_DB = require("./model/user");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const user = require("./model/user");

const cookieParser = require("cookie-parser");

const auth = require("./middleware/auth");

// connect database calling

require("./database/database").connect();

  

// middleware

app.use(express.json());

app.use(cookieParser());

  

// home route

app.get("/", (req, res) => {

  res.send("hello is it running see it now");

});

  

app.post("/register", async (req, res) => {

  try {

    // steps

    // 1. get all data from body

    const { firstName, lastName, email, password } = req.body;

    // 2. all the data should exists

    if (!(firstName && lastName && email && password)) {

      res.status(400).send("All fields are compulsory!");

    }

    // 3. check if user already exists - email

    const existingUser = await User_DB.findOne({ email });

    if (existingUser) {

      res.status(401).send("User already exists with this email!");

    }

    // 4. encrypt the password

    const myEncryptedPassword = await bcrypt.hash(password, 10);

    // 5. save the user in Database

    const createdUser = await User_DB.create({

      firstName,

      lastName,

      email,

      password: myEncryptedPassword,

    });

    // 6. generate a token for user and send it.

    const token = jwt.sign(

      { id: createdUser._id, email: createdUser.email },

      "jksklslse23", // process.env.jwtsecret

      {

        expiresIn: "2h",

      }

    );

    createdUser.token = token;

    createdUser.password = undefined;

  

    res.status(201).json(createdUser);

  } catch (err) {

    console.log(err);

  }

});

  

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

        // userExists, if we want to send then we can send. but we should not send.

      });

    }

    res.status(404).json("something wrong! please provide right details!");

  

    // send a token

  } catch (err) {

    console.log(err);

  }

});

  

// Dashboard

app.get("/dashboard", auth, (req, res) => {

  res.send("welcome to dashboard!");

});

module.exports = app;
```

3. model /  **user.js**

```js
const mongoose = require("mongoose");

  

const userSchema = new mongoose.Schema({

  firstName: {

    type: String,

    default: null,

  },

  lastName: {

    type: String,

    default: null,

  },

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

  },

});

  

module.exports = mongoose.model("userAuth22", userSchema);
```

4. database  / **database.js**


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

5. middleware / **auth.js**

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