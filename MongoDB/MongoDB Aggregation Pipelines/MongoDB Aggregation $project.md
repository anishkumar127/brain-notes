## Aggregation `$project`

This aggregation stage passes only the specified fields along to the next aggregation stage.

This is the same projection that is used with the `find()` method.

```jsx
db.restaurants.aggregate([
  {
    $project: {
      "name": 1,
      "cuisine": 1,
      "address": 1
    }
  },
  {
    $limit: 5
  }
])
```

![[Pasted image 20221120172105.png]]

This will return the documents but only include the specified fields.

Notice that the `_id` field is also included. This field is always included unless specifically excluded.

We use a `1` to include a field and `0` to exclude a field.

**Note:** You cannot use both 0 and 1 in the same object. The only exception is the `_id` field. You should either specify the fields you would like to include or the fields you would like to exclude.