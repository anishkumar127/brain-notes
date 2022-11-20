## Aggregation `$group`

This aggregation stage groups documents by the unique `_id` expression provided.

Don't confuse this `_id` expression with the `_id` ObjectId provided to each document.

### Example

```jsx
db.listingsAndReviews.aggregate(
    [ { $group : { _id : "$property_type" } } ]
)
```

![[Pasted image 20221120171651.png]]


This will return the distinct values from the `property_type` field.

