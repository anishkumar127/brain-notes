### `find()`

To select data from a collection in MongoDB, we can use the `find()` method.

This method accepts a query object. If left empty, all documents will be returned.

### Example

```jsx
db.posts.find()
```

![[Pasted image 20221120170216.png]]
## Projection

Both find methods accept a second parameter called `projection`.

This parameter is an `object` that describes which fields to include in the results.

**Note:** This parameter is optional. If omitted, all fields will be included in the results.

### Example

This example will only display the `title` and `date` fields in the results.

```jsx
db.posts.find({}, {title: 1, date: 1})
```

![[Pasted image 20221120165812.png]]




Notice that the `_id` field is also included. This field is always included unless specifically excluded.

We use a `1` to include a field and `0` to exclude a field.

### Example

This time, let's exclude the `_id` field.

```jsx
db.posts.find({}, {_id: 0, title: 1, date: 1})
```

![[Pasted image 20221120165917.png]]

**Note:** You cannot use both 0 and 1 in the same object. The only exception is the `_id` field. You should either specify the fields you would like to include or the fields you would like to exclude.


Let's exclude the date category field. All other fields will be included in the results.

### Example

```jsx
db.posts.find({}, {category: 0})
```

![[Pasted image 20221120170100.png]]



We will get an error if we try to specify both 0 and 1 in the same object.

### Example

```jsx
db.posts.find({}, {title: 1, date: 0})
```


![[Pasted image 20221120170138.png]]



