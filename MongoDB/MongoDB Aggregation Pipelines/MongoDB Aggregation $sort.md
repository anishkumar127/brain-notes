## Aggregation `$sort`

This aggregation stage groups sorts all documents in the specified sort order.

Remember that the order of your stages matters. Each stage only acts upon the documents that previous stages provide.

```jsx
db.listingsAndReviews.aggregate([ 
  { 
    $sort: { "accommodates": -1 } 
  },
  {
    $project: {
      "name": 1,
      "accommodates": 1
    }
  },
  {
    $limit: 5
  }
])
```
![[Pasted image 20221120172225.png]]


This will return the documents sorted in descending order by the `accommodates` field.

The sort order can be chosen by using `1` or `-1`. `1` is ascending and `-1` is descending.