## Aggregation `$addFields`

This aggregation stage adds new fields to documents.

```jsx
db.restaurants.aggregate([
  {
    $addFields: {
      avgGrade: { $avg: "$grades.score" }
    }
  },
  {
    $project: {
      "name": 1,
      "avgGrade": 1
    }
  },
  {
    $limit: 5
  }
])
```
![[Pasted image 20221120172642.png]]
This will return the documents along with a new field, `avgGrade`, which will contain the average of each restaurants `grades.score`.