
## Aggregation `$limit`

This aggregation stage limits the number of documents passed to the next stage.

### Example


```jsx
db.movies.aggregate([ { $limit: 1 } ])
```
![[Pasted image 20221120171800.png]]

This will return the 1 movie from the collection.