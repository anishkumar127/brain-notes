## Indexing & Search

MongoDB Atlas comes with a full-text search engine that can be used to search for documents in a collection.

[Atlas Search](https://www.mongodb.com/docs/atlas/atlas-search?utm_campaign=w3schools_mdb&utm_source=w3schools&utm_medium=referral) is powered by Apache Lucene.

## Creating an Index

We'll use the Atlas dashboard to create an index on the "sample_mflix" database from the sample data that we loaded in the [Intro to Aggregations](https://www.w3schools.com/mongodb/mongodb_aggregations_intro.php) section.

1.  From the Atlas dashboard, click on your **Cluster name** then the **Search** tab.
2.  Click on the **Create Search Index** button.
3.  Use the **Visual Editor** and click Next.
4.  Name your index, choose the Database and Collection you want to index and click Next.
    -   If you name your index "default" you will not have to specify the index name in the `$search` pipeline stage.
    -   Choose the `sample_mflix` database and the `movies` collection.
5.  Click **Create Search Index** and wait for the index to complete.

---

## Running a Query

To use our search index, we will use the `$search` operator in our aggregation pipeline.

### Example

```jsx
db.movies.aggregate([
  {
    $search: {
      index: "default", // optional unless you named your index something other than "default"
      text: {
        query: "star wars",
        path: "title"
      },
    },
  },
  {
    $project: {
      title: 1,
      year: 1,
    }
  }
])
```
![[Pasted image 20221120174049.png]]

The first stage of this aggregation pipeline will return all documents in the `movies` collection that contain the word "star" or "wars" in the `title` field.

The second stage will project the `title` and `year` fields from each document.