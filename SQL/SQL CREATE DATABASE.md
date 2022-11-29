## Creating a Database

Before doing anything with the data we must need to create a database first.

The SQL `CREATE DATABASE` statement is used to create a database.

## Syntax

The basic syntax for creating a database can be given with:

``CREATE DATABASE _database_name_;``

The following SQL statement creates a database named _demo_:

``CREATE DATABASE demo;``

Creating a database does not select it for use. So, before moving further we must need to select the target database with the `USE` statement. For example, the `USE demo;` command sets the _demo_ database as target database for all future commands.

**Note:** In Unix, the database and table names are case-sensitive, so you must always refer to your database as `demo`, not as `Demo`, `DEMO`, or something else. But, SQL keywords are case-insensitive, like `CREATE DATABASE` is same as `create database`.

## Creating Database in MySQL

Let's create a database in MySQL using the command-line tool.

### Step 1: Invoke the MySQL command-line tool

To invoke the MySQL command line, we've to log in to the MySQL server first. To log in as `root` user, type the following command in terminal and press enter. You will be asked for your password. Enter your password and press enter, if it is correct the `mysql>` prompt will appear, via which you will be able to issue SQL statements and view the results.

``shell> mysql -u root -p``

### Step 2: Creating a MySQL Database

Now, execute the following command to create the database named _demo_.

``mysql> CREATE DATABASE demo;``

If the database created successfully you'll see the output something like this:

>Query OK, 1 row affected (0.03 sec)

If you try to create a database that is already exists you'll get an error message. To avoid this in MySQL you can use an optional clause `IF NOT EXISTS` as follow:

``mysql> CREATE DATABASE IF NOT EXISTS demo;``

### Step 3: Selecting the Database

Type the following command and press enter. You will see the output _"Database changed"_. Now our _demo_ database is selected as default database for all future operations.

``mysql> USE demo;``

**Tip:** If you want to see a list of existing databases on the MySQL server, you can execute the statement `SHOW DATABASES;` on the command line.