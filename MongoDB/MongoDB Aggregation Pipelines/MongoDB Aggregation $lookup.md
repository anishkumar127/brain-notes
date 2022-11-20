## Aggregation `$lookup`

This aggregation stage performs a left outer join to a collection in the same database.

There are four required fields:

-   `from`: The collection to use for lookup in the same database
-   `localField`: The field in the primary collection that can be used as a unique identifier in the `from` collection.
-   `foreignField`: The field in the `from` collection that can be used as a unique identifier in the primary collection.
-   `as`: The name of the new field that will contain the matching documents from the `from` collection.

### Example

```jsx
db.comments.aggregate([
  {
    $lookup: {
      from: "movies",
      localField: "movie_id",
      foreignField: "_id",
      as: "movie_details",
    },
  },
  {
    $limit: 1
  }
])
```

![[Pasted image 20221120173607.png]]

This will return the movie data along with each comment.