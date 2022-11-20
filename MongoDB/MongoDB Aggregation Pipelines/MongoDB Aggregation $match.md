
## Aggregation `$match`

This aggregation stage behaves like a find. It will filter documents that match the query provided.

Using `$match` early in the pipeline can improve performance since it limits the number of documents the next stages must process.

```jsx
db.listingsAndReviews.aggregate([ 
  { $match : { property_type : "House" } },
  { $limit: 2 },
  { $project: {
    "name": 1,
    "bedrooms": 1,
    "price": 1
  }}
])
```
![[Pasted image 20221120172448.png]]
This will only return documents that have the `property_type` of "House".