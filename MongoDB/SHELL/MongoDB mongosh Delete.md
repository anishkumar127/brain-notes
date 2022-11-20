
## `deleteOne()`

The `deleteOne()` method will delete the first document that matches the query provided.

### Example

```jsx
db.posts.deleteOne({ title: "Post Title 5" })
```


![[Pasted image 20221120170616.png]]



## `deleteMany()`

The `deleteMany()` method will delete all documents that match the query provided.

### Example

```jsx
db.posts.deleteMany({ category: "Technology" })
```
