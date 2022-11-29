## Creating a Table

Now it's time to create some tables inside our database that will actually hold the data. A database table simply organizes the information into rows and columns.

The SQL `CREATE TABLE` statement is used to create a table.

## Syntax

The basic syntax for creating a table can be given with:

```
CREATE TABLE _table_name_ (
    _column1_name data_type constraints,_
    _column2_name data_type constraints,_
    ....
);
```

To understand this syntax easily, let's create a table in our _demo_ database. Type the following statement on MySQL command-line tool and press enter:

#### Example


```sql
-- Syntax for MySQL Database 
CREATE TABLE persons (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    birth_date DATE,
    phone VARCHAR(15) NOT NULL UNIQUE
);
 
-- Syntax for SQL Server Database 
CREATE TABLE persons (
    id INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    name VARCHAR(50) NOT NULL,
    birth_date DATE,
    phone VARCHAR(15) NOT NULL UNIQUE
);
```

The above statement creates a table named _persons_ with four columns _id_, _name_, _birth_date_ and _phone_. Notice that each column name is followed by a data type declaration; this declaration specifies that what type of data the column will store, whether integer, string, date, etc.

Some [data types](https://www.tutorialrepublic.com/sql-reference/mysql-data-types.php) can be declared with a length parameter that indicates how many characters can be stored in the column. For example, `VARCHAR(50)` can hold up to 50 characters.

**Note:** The data type of the columns may vary depending on the database system. For example, MySQL and SQL Server supports `INT` data type for integer values, whereas the Oracle database supports `NUMBER` data type.

The following table summarizes the most commonly used data types supported by MySQL.

## Data Type      

### Description

`INT` Stores numeric values in the range of -2147483648 to 2147483647

`DECIMAL` Stores decimal values with exact precision.

`CHAR` Stores fixed-length strings with a maximum size of 255 characters.

`VARCHAR` Stores variable-length strings with a maximum size of 65,535 characters.

`TEXT` Stores strings with a maximum size of 65,535 characters.

`DATE` Stores date values in the YYYY-MM-DD format.

`DATETIME` Stores combined date/time values in the YYYY-MM-DD HH:MM:SS format.

`TIMESTAMP` Stores timestamp values. [`TIMESTAMP`](https://www.tutorialrepublic.com/sql-reference/mysql-data-types.php#datetime-and-timestamp) values are stored as the number of seconds since the Unix epoch ('1970-01-01 00:00:01' UTC).

Please check out the reference section [SQL DB data types](https://www.tutorialrepublic.com/sql-reference/mysql-data-types.php) for the detailed information on all the data types available in popular RDBMS like MySQL, SQL Server, etc.

There are a few additional constraints (also called _modifiers_) that are set for the table columns in the preceding statement. Constraints define rules regarding the values allowed in columns.

-   The `NOT NULL` constraint ensures that the field cannot accept a `NULL` value.
-   The `PRIMARY KEY` constraint marks the corresponding field as the table's primary key.
-   The `AUTO_INCREMENT` attribute is a MySQL extension to standard SQL, which tells MySQL to automatically assign a value to this field if it is left unspecified, by incrementing the previous value by 1. Only available for numeric fields.
-   The `UNIQUE` constraint ensures that each row for a column must have a unique value.


**Note:** The Microsoft SQL Server uses the `IDENTITY` property to perform an auto-increment feature. The default value is `IDENTITY(1,1)` which means the seed or starting value is 1, and the incremental value is also 1.

**Tip:** You can execute the command `DESC _table_name_;` to see the column information or structure of any table in MySQL and Oracle database, whereas `EXEC sp_columns _table_name_;` in SQL Server (replace the _table_name_ with actual table name).

---

## Create Table If Not Exists

If you try to create a table that is already exists inside the database you'll get an error message. To avoid this in MySQL you can use an optional clause `IF NOT EXISTS` as follow:

#### Example

```sql
CREATE TABLE IF NOT EXISTS persons (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    birth_date DATE,
    phone VARCHAR(15) NOT NULL UNIQUE
);
```

**Tip:** If you want to see the list of tables inside the currently selected database, you can execute `SHOW TABLES;` statement on the MySQL command line.

