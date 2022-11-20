
## MongoDB Query Operators

There are many query operators that can be used to compare and reference document fields.

### Comparison

The following operators can be used in queries to compare values:

-   `$eq`: Values are equal
-   `$ne`: Values are not equal
-   `$gt`: Value is greater than another value
-   `$gte`: Value is greater than or equal to another value
-   `$lt`: Value is less than another value
-   `$lte`: Value is less than or equal to another value
-   `$in`: Value is matched within an array

### Logical

The following operators can logically compare multiple queries.

-   `$and`: Returns documents where both queries match
-   `$or`: Returns documents where either query matches
-   `$nor`: Returns documents where both queries fail to match
-   `$not`: Returns documents where the query does not match

### Evaluation

The following operators assist in evaluating documents.

-   `$regex`: Allows the use of regular expressions when evaluating field values
-   `$text`: Performs a text search
-   `$where`: Uses a JavaScript expression to match documents