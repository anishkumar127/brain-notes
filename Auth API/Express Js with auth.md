
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


