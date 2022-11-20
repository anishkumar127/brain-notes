## Aggregation `$out`

This aggregation stage writes the returned documents from the aggregation pipeline to a collection.

The `$out` stage must be the last stage of the aggregation pipeline.

### Example
```jsx
db.listingsAndReviews.aggregate([
  {
    $group: {
      _id: "$property_type",
      properties: {
        $push: {
          name: "$name",
          accommodates: "$accommodates",
          price: "$price",
        },
      },
    },
  },
  { $out: "properties_by_type" },
])
```
![[Pasted image 20221120173734.png]]

The first stage will group properties by the `property_type` and include the `name`, `accommodates`, and `price` fields for each. The `$out` stage will create a new collection called `properties_by_type` in the current database and write the resulting documents into that collection.