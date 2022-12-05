
1. [Cyclic](https://app.cyclic.sh/#/)
Demo -> https://agreeable-bat-gown.cyclic.app/api/videos/random

private Repo -> https://github.com/anishkumar127/Youtube_API_Only_Backend

**Cyclic**  Serverless Using MongoDB [Link](https://docs.cyclic.sh/how-to/using-mongo-db#connections-in-a-serverless-runtime)

## Connection Example Mongoose[​](https://docs.cyclic.sh/how-to/using-mongo-db#connection-example-mongoose "Direct link to heading")

MONGOOSE CONNECTION IN A SERVERLESS RUNTIME

It is very important to make sure that `mongoose.connect` is finished before allowing your app to serve requests.

This example does not start listening to `PORT` until the DB connection is established. Requests will be held in the Cyclic runtime to make sure none are ever missed, even if the connection takes a moment.

#mongodb #connection
```js
const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 3000

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

//Routes go here
app.all('*', (req,res) => {
    res.json({"every thing":"is awesome"})
})

//Connect to the database before listening
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("listening for requests");
    })
})

```


# 2 https://www.qovery.com/


# 3. https://glitch.com/


4. https://auth0.com/blog/create-a-simple-and-stylish-node-express-app/
