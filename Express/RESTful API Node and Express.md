
# Simple way connect with node/ express

 [reference](https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/)

```js
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
```

## How to Write our Endpoints

Now, let's write our endpoints here in this routes file. We will have five routes for the following actions:

1.  Posting data to Database.
2.  Getting all the data from the Database.
3.  Getting data based on the ID.
4.  Updating data based on the ID.
5.  Deleting data based on the ID.

So, let's create the routes for these actions:

```
//Post Method
router.post('/post', (req, res) => {
    res.send('Post API')
})

//Get all Method
router.get('/getAll', (req, res) => {
    res.send('Get All API')
})

//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send('Get by ID API')
})

//Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})
```

We have five methods that use the REST Methods of Post, Get, Patch, and Delete.

This router is taking the route as the first parameter. Then in the second parameter it's taking a callback.

In the callback, we have a **res** and a **req**. **res** means **response,** and **req** means **request.** We use **res** for sending responses to our client, like Postman, or any front-end client. And we use **req** for receiving requests from a client app like Postman, or any front-end client.

Then in the callback body, we are printing a message that says the respective API message.


Now, let's take a response from a client app. Let's simply print an ID.

We have to change the **getOne** function first. We are getting the ID using **req.params.id**, and then sending it to the client app using **res.send.**

```
//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send(req.params.id)
})
```

```
localhost:3000/api/getOne/1000
```


	We will get the ID in the response body in Postman.
## How to Create the Model

Now, let's create a Model that will define our database structure.

Create a folder called model and inside, a file called model.js.

```
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('Data', dataSchema)
```

Here, we have a schema that defines our database structure. It has a **name** and an **age** property. Both fields have types and both are required.

Then, we are simply exporting the schema model.

Now, import this model inside the **routes.js** file.

```
const Model = require('../models/model');
```

## How to Post Data to the Database

Let's create the data body to post using the model we just created.

```
router.post('/post', (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })
})
```

Our name and age is accepting the name and age from **req body**. We get this data from the client app such as **Postman**, or any frontend client like **React** or **Angular.**

We will also create a **try-catch** block to handle success messages and errors.

```
//Post Method
router.post('/post', (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })

    try{

    }
    catch(error){
        
    }
})
```

In the try block, we are saving the **data** using **data.save()**. Then, we are storing the data in a const called **dataToSave**.

We are also sending the success message with the data in the response body.

And in the catch block, we are receiving any errors if we get any.

```
//Post Method
router.post('/post', (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })

    try {
        const dataToSave = data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})
```

Now, let's add some data from Postman. But before that, this function needs to be asynchronous to work. So, we will use async-await.

```
router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})
```

It's also generating a unique ID.

## How to Get All the Data

Getting data is simple too. Just a few lines of code:

```
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
```

Here, we are using the **Model.find** method to fetch all the data from the database. Then, we are returning it back in JSON format. If we have an error, we will get that too.


If we call this endpoint in Postman, we will get an array of objects in the Postman body.


## How to Get Data Based on the ID

This one is also simple. We just have to pass the ID of the document, which is **req.params.id**, in a method called **findById**.

```
//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
```

If we click Send, we will get the data based on the ID.

## How to Update and Delete Data Based on the ID

First, let's target the update method using the **patch** method.

```
//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
```

Here we have three parameters that we are passing in the **findByIdAndUpdate** method, which we use to find a document by ID and update it.

The **req.params.id** is the const id, **updatedData** which contains the req.body, and the **options**, which specifies whether to return the updated data in the body or not.

Let's test it out now. Just paste the ID of a specific document, and click Send. Change the endpoints as well.

We are updating using one ID, and it's getting updated.

Deleting is also simple. Let's implement it:

```
//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
```

We are getting the ID here, and then we are using Model.findByIdAndDelete to delete that field, while passing the id.

We are storing the updated data in a const **data**.

In the response, we will get the message that that document with the specific name has been deleted.


