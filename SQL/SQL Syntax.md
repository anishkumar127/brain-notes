The syntax of SQL is governed by the American National Standards Institute (ANSI) and the International Organization for Standardization (ISO).

## SQL Statements

SQL statements are very simple and straightforward like plain English but with specific syntax.

An SQL statement is composed of a sequence of keywords, identifiers, etc. terminated by a semicolon (`;`). Here is an example of a valid SQL statement.

#### Example

```sql
SELECT emp_name, hire_date, salary FROM employees WHERE salary > 5000;
```

For better readability you can also write the same statement, as follow:

#### Example

```sql
SELECT emp_name, hire_date, salary 
FROM employees 
WHERE salary > 5000;
```

Use semicolon at the end of an SQL statement — it terminates the statement or submits the statement to the database server. Some database management system has, however, no such requirement, but it is considered as a best practice to use it.

**Note:** Any number of line breaks may occur within a SQL statement, provided that any line break does not break off keywords, values, expression, etc.

## Case Sensitivity in SQL

Consider another SQL statement that retrieves the records from _employees_ table:

#### Example

```sql
SELECT emp_name, hire_date, salary FROM employees;
```

The same statement can also be written, as follow:

#### Example

```sql
select emp_name, hire_date, salary from employees;
```

SQL keywords are case-insensitive that means `SELECT` is same as `select`. But, the database and table names may case-sensitive depending on the operating system. In general, Unix or Linux platforms are case-sensitive, whereas Windows platforms aren't.

**Tip:** It is recommended to write the SQL keywords in uppercase, to differentiate it from other text inside a SQL statement for a better understanding.

## SQL Comments

A comment is simply a text that is ignored by the database engine. Comments can be used to provide a quick hint about the SQL statement.

SQL support single-line as well as multi-line comments. To write a single-line comment start the line with two consecutive hyphens (`--`). For example:

#### Example

```sql
-- Select all the employees
SELECT * FROM employees;
```

However to write multi-line comments, start the comment with a slash followed by an asterisk (`/*`) and end the comment with an asterisk followed by a slash (`*/`), like this:

#### Example

```sql
/* Select all the employees whose 
salary is greater than 5000 */
SELECT * FROM employees
WHERE salary > 5000;
```