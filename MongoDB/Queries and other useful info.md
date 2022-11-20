
-   [`Model.deleteMany()`](https://mongoosejs.com/docs/api.html#model_Model-deleteMany)
-   [`Model.deleteOne()`](https://mongoosejs.com/docs/api.html#model_Model-deleteOne)
-   [`Model.find()`](https://mongoosejs.com/docs/api.html#model_Model-find)
-   [`Model.findById()`](https://mongoosejs.com/docs/api.html#model_Model-findById)
-   [`Model.findByIdAndDelete()`](https://mongoosejs.com/docs/api.html#model_Model-findByIdAndDelete)
-   [`Model.findByIdAndRemove()`](https://mongoosejs.com/docs/api.html#model_Model-findByIdAndRemove)
-   [`Model.findByIdAndUpdate()`](https://mongoosejs.com/docs/api.html#model_Model-findByIdAndUpdate)
-   [`Model.findOne()`](https://mongoosejs.com/docs/api.html#model_Model-findOne)
-   [`Model.findOneAndDelete()`](https://mongoosejs.com/docs/api.html#model_Model-findOneAndDelete)
-   [`Model.findOneAndRemove()`](https://mongoosejs.com/docs/api.html#model_Model-findOneAndRemove)
-   [`Model.findOneAndReplace()`](https://mongoosejs.com/docs/api.html#model_Model-findOneAndReplace)
-   [`Model.findOneAndUpdate()`](https://mongoosejs.com/docs/api.html#model_Model-findOneAndUpdate)
-   [`Model.replaceOne()`](https://mongoosejs.com/docs/api.html#model_Model-replaceOne)
-   [`Model.updateMany()`](https://mongoosejs.com/docs/api.html#model_Model-updateMany)
-   [`Model.updateOne()`](https://mongoosejs.com/docs/api.html#model_Model-updateOne)

A mongoose query can be executed in one of two ways. First, if you pass in a `callback` function, Mongoose will execute the query asynchronously and pass the results to the `callback`.

A query also has a `.then()` function, and thus can be used as a promise.



### [Validation](https://mongoosejs.com/docs/validation.html#validation)

https://mongoosejs.com/docs/validation.html

### [Custom Validators](https://mongoosejs.com/docs/validation.html#custom-validators)

If the built-in validators aren't enough, you can define custom validators to suit your needs.

Custom validation is declared by passing a validation function. You can find detailed instructions on how to do this in the [`SchemaType#validate()` API docs](https://mongoosejs.com/docs/api.html#schematype_SchemaType-validate).

```javascript
const userSchema = new Schema({
  phone: {
    type: String,
    validate: {
      validator: function(v) {
        return /\d{3}-\d{3}-\d{4}/.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`
    },
    required: [true, 'User phone number required']
  }
});

const User = db.model('user', userSchema);
const user = new User();
let error;

user.phone = '555.0123';
error = user.validateSync();
assert.equal(error.errors['phone'].message,
  '555.0123 is not a valid phone number!');

user.phone = '';
error = user.validateSync();
assert.equal(error.errors['phone'].message,
  'User phone number required');

user.phone = '201-555-0123';
// Validation succeeds! Phone number is defined
// and fits `DDD-DDD-DDDD`
error = user.validateSync();
assert.equal(error, null);
```


## [Middleware](https://mongoosejs.com/docs/middleware.html#middleware)


## [Populate](https://mongoosejs.com/docs/populate.html#populate)



## [Timestamps](https://mongoosejs.com/docs/timestamps.html#timestamps)


