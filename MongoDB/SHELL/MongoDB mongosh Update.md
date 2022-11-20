
## `updateOne()`

The `updateOne()` method will update the first document that is found matching the provided query.

Let's see what the "like" count for the post with the title of "Post Title 1":

### Example

```jsx
db.posts.find( { title: "Post Title 1" } ) 
```

![[Pasted image 20221120170357.png]]



Now let's update the "likes" on this post to 2. To do this, we need to use the `$set` operator.

### Example

```jsx
db.posts.updateOne( { title: "Post Title 1" }, { $set: { likes: 2 } } ) 
```


![[Pasted image 20221120170417.png]]



## Insert if not found

If you would like to insert the document if it is not found, you can use the `upsert` option.

### Example

Update the document, but if not found insert it:

```jsx
db.posts.updateOne( 
  { title: "Post Title 5" }, 
  {
    $set: 
      {
        title: "Post Title 5",
        body: "Body of post.",
        category: "Event",
        likes: 5,
        tags: ["news", "events"],
        date: Date()
      }
  }, 
  { upsert: true }
)
```

![[Pasted image 20221120170515.png]]


## `updateMany()`

The `updateMany()` method will update all documents that match the provided query.

### Example

Update `likes` on all documents by 1. For this we will use the `$inc` (increment) operator:

```jsx
db.posts.updateMany({}, { $inc: { likes: 1 } })
```



![[Pasted image 20221120170537.png]]


