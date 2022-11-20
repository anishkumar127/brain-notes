
## MongoDB Update Operators

There are many update operators that can be used during document updates.

### Fields

The following operators can be used to update fields:

-   `$currentDate`: Sets the field value to the current date
-   `$inc`: Increments the field value
-   `$rename`: Renames the field
-   `$set`: Sets the value of a field
-   `$unset`: Removes the field from the document

### Array

The following operators assist with updating arrays.

-   `$addToSet`: Adds distinct elements to an array
-   `$pop`: Removes the first or last element of an array
-   `$pull`: Removes all elements from an array that match the query
-   `$push`: Adds an element to an array