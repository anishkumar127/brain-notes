## Schema Validation

By default MongoDB has a flexible schema. This means that there is no strict schema validation set up initially.

Schema validation rules can be created in order to ensure that all documents a collection share a similar structure.

## Schema Validation

MongoDB supports [JSON Schema](http://json-schema.org/) validation. The `$jsonSchema` operator allows us to define our document structure.

### Example

```jsx
db.createCollection("posts", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [ "title", "body" ],
      properties: {
        title: {
          bsonType: "string",
          description: "Title of post - Required."
        },
        body: {
          bsonType: "string",
          description: "Body of post - Required."
        },
        category: {
          bsonType: "string",
          description: "Category of post - Optional."
        },
        likes: {
          bsonType: "int",
          description: "Post like count. Must be an integer - Optional."
        },
        tags: {
          bsonType: ["string"],
          description: "Must be an array of strings - Optional."
        },
        date: {
          bsonType: "date",
          description: "Must be a date - Optional."
        }
      }
    }
  }
})
```
![[Pasted image 20221120174237.png]]
This will create the `posts` collection in the current database and specify the JSON Schema validation requirements for the collection.