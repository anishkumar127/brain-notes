## Aggregation `$count`

This aggregation stage counts the total amount of documents passed from the previous stage.

```jsx
db.restaurants.aggregate([
  {
    $match: { "cuisine": "Chinese" }
  },
  {
    $count: "totalChinese"
  }
])
```
![[Pasted image 20221120172814.png]]
This will return the number of documents at the `$count` stage as a field called "totalChinese".