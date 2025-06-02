// Databases = A database is an organized collection of data.

// Types of Databases
// In general, there are two common types of databases:

// Non - Relational
// Relational

// In a non-relational database, data is stored in key-value pairs. For example:
// {
//     "name": "John",
//     "age": 30,
//     "city": "New York"
// }

// Commonly used non-relational database management systems (Non-RDBMS) are MongoDB, Amazon DynamoDB, Redis, etc.


// Relational Database
// In a relational database, data is stored in tabular format. For example,
// Here, "customers" is a table inside the database.
// The first row is the attributes of the table. Each row after that contains the data of a customer.
// In a relational database, two or more tables may be related to each other. Hence the term "Relational". For example,

// Here, orders and customers are related through customer_id.
// Commonly used relational database management systems (RDBMS) are MySQL, PostgreSQL, MSSQL, Oracle etc.
// To access data from these relational databases, SQL (Structured Query Language) is used.


// Introduction to SQL
// Structured Query Language (SQL) is a standard query language that is used to work with relational databases.
// We use SQL to perform CRUD (create, read, update, and delete) operations on relational databases.
// Create: create databases or tables in a database
// Read: read data from a table
// Update: insert or update data in a table
// Delete: delete tables or databases


// SQL is a declarative language. It is not a programming language.
// SQL is a standard language for accessing and manipulating databases.
// SQL is a domain-specific language used in programming and managing relational databases.


// SQL Example: Read Data From a Table
// SELECT first_name, last_name FROM Customers;
// Here, this SQL command selects the first name and last name columns of all customers from the Customers table using the SQL SELECT statement.

// SQL is used in all relational databases such as MySQL, Oracle, MSSQL, PostgreSQL etc.
// The major SQL commands are similar in all relational databases. However, in some cases, SQL commands may differ.


// SQL SELECT
// The SQL SELECT statement is used to select(retrieve) data from a database table.
Syntax = `SELECT column1, column2 FROM table_name;`;
// --select first_name column from Customers table
// SELECT first_name FROM Customers;

// SQL SELECT ALL Columns use *
Syntax = `SELECT * FROM table_name;`;
// --select all columns from Customers table
// SELECT * FROM Customers;

// SQL SELECT WHERE Clause
// The SQL WHERE clause is used to filter records based on a specified condition.
Syntax = `SELECT column1, column2 
FROM table_name 
WHERE condition;`;

// --select first_name and last_name columns from Customers table where country is USA
query = `SELECT first_name, last_name
FROM Customers
WHERE country = "USA";`; // this condition is aplicable for all the rows in the table but only those rows will be returned which satisfy the condition


// SQL Operators
// The WHERE clause uses operators to construct conditions. Some of the commonly used operators are:

// 1. Equal to Operator (=)
// --select all columns from Customers table with first name 'John'
query = `SELECT *
FROM Customers
WHERE first_name = 'John';`

// 2. Greater than (>)
// --select all columns from Customers table with age greater than 25,
query = `SELECT *
FROM Customers
WHERE age > 25;`
// The above SQL command selects all the customers from the Customers table whose age is greater than 25.


// 3. AND Operator (AND)
// --select all columns from Customers table with last_name 'Doe' and country 'USA'
query = `SELECT *
    FROM Customers
WHERE last_name = 'Doe' AND country = 'USA';`



// The AND, OR, and NOT operators in SQL are used with the WHERE or HAVING clauses.
// SQL AND Operator = The SQL AND operator selects data if all conditions are TRUE.For example,

// select the first_name and last_name of all customers
// who live in 'USA' and have the last name 'Doe'
query = `SELECT first_name, last_name
    FROM Customers
    WHERE country = 'USA' AND last_name = 'Doe';`


// SQL OR Operator
// The SQL OR operator selects data if any one condition is TRUE. For example,
query = `SELECT first_name, last_name
    FROM Customers
    WHERE country = 'USA' OR last_name = 'Doe';`


// SQL NOT Operator
// The SQL NOT operator selects data if the given condition is FALSE.For example,
// --select customers who don't live in the USA

query = `SELECT first_name, last_name
FROM Customers
WHERE NOT country = 'USA';`



// Combining Multiple Operators
query = `SELECT *
    FROM Customers
WHERE(country = 'USA' OR country = 'UK') AND age < 26;`



// SQL SELECT DISTINCT
// The SELECT DISTINCT statement retrieves distinct values(unique values) from a database table.
// Syntax of SQL SELECT DISTINCT
Syntax = `SELECT DISTINCT column1, column2
FROM table_name;`;

// -- select the unique ages from the Customers table
query = `SELECT DISTINCT age
FROM Customers;`

// SQL DISTINCT on Multiple Columns
query = `SELECT DISTINCT country, first_name
FROM Customers;`

// DISTINCT With COUNT
// We can use SQL DISTINCT with the COUNT() function to count the number of unique rows.
query = `SELECT COUNT(DISTINCT country)
FROM Customers;`



// SQL SELECT AS Alias
// The AS keyword is used to give columns or tables a temporary name that can be used to identify that column or table later.
Syntax = ` SELECT column_1 AS alias_1,
    column_2 AS alias_2, 
...column_n AS alias_n
FROM table_name;`

// --select first_name as name from Customers table
query = `SELECT first_name AS name
FROM Customers;`

// SQL AS With More Than One Column
// We can also use aliases with more than one column.
query = `SELECT customer_id AS cid, first_name AS name
FROM Customers;`

// SQL AS With Expression
// We can combine data from multiple columns and represent it in a single column using the CONCAT() function. For example,
query = `SELECT CONCAT(first_name, ' ', last_name) AS full_name
 FROM Customers;`



// SQL SELECT LIMIT, TOP, FETCH FIRST
// The SQL LIMIT keyword allows us to specify the number of records in the result set.
query = `SELECT first_name, age
FROM Customers
LIMIT 2;`

// SQL LIMIT With OFFSET Clause
// The OFFSET keyword is used with LIMIT to specify the starting rows from where to select the data. For example,

// --LIMIT 2 selects two results
// --OFFSET 3 excludes the first three results
query = `SELECT first_name, last_name
FROM Customers
LIMIT 2 OFFSET 3;`
// Here, the SQL command selects 2 rows starting from the fourth row. OFFSET 3 means the first 3 rows are excluded.

// SQL TOP Clause
// The TOP keyword is used in place of LIMIT with the following database systems:
// SQL Server
// MS Access
query = `SELECT TOP 2 first_name, last_name
FROM Customers;`
alsocan = `SELECT TOP 2 * FROM Customers;`

// SQL FETCH FIRST Clause
// The FETCH FIRST n ROWS ONLY clause is used with the Oracle database system.

query = `SELECT *
FROM Customers
FETCH FIRST 2 ROWS ONLY;`



// SQL IN and NOT IN Operators
// We use the IN operator with the WHERE clause to match values in a list.
// --select customers from the USA
Syntax = `SELECT column1, column2, ...  
FROM table
WHERE column IN(value1, value2, ...);`

query = `SELECT first_name, country
FROM Customers
WHERE country IN('USA');`

// --select rows if the country is either USA or UK
query = `SELECT first_name, country
FROM Customers
WHERE country IN('USA', 'UK');`



// SQL BETWEEN Operator
// In SQL, the BETWEEN operator with the WHERE clause selects values within a given range.
query = `SELECT * 
FROM Orders
WHERE amount BETWEEN 200 AND 600;`


// SQL NOT BETWEEN Operator
// The NOT BETWEEN operator is used to exclude the rows that match the values in the range.It returns all the rows except the excluded rows.
query = `SELECT item, amount
FROM Orders
WHERE amount NOT BETWEEN 300 AND 500;`



// SQL IS NULL and IS NOT NULL
// In SQL, IS NULL and IS NOT NULL are used to check if a column in a table contains a NULL value or not.

// IS NULL Syntax
query = `select * 
from Customers 
where email is null;`


// IS NOT NULL
Syntax = `SELECT column1, column2, ...
FROM table
WHERE column_name IS NOT NULL;`

// --select rows where email is not NULL
que = `SELECT *
    FROM Employee
WHERE email IS NOT NULL;`


// IS NULL With COUNT()
query = `SELECT COUNT(*)
FROM Employee
WHERE email IS NULL;`   // output is the number of rows where email is NULL



// The MAX() function returns the maximum value of a column.
// The MIN() function returns the minimum value of a column.

// SQL MAX() Function
Syntax = `SELECT MAX(column_name)
FROM table_name;`
// --select the maximum age from Customers table
query = `SELECT MAX(age)
FROM Customers;`

// SQL MIN() Function
Syntax = `SELECT MIN(column_name)
FROM table_name;`
// --select the minimum age from Customers table
query = `SELECT MIN(age)
FROM Customers;`

// -- use max_age as an alias for the maximum age
query = `SELECT MAX(age) AS max_age
FROM Customers;`

// MAX() and MIN() With Strings

// --select the minimum value of first_name from Customers
query = `SELECT MIN(first_name) AS min_first_name
FROM Customers;`
// Here, the SQL command selects the minimum value of first_name based on the dictionary order.


// However, if we want to select the whole row containing that value, we can use the nested SELECT statement like this.
// --MIN() function in a nested SELECT statement
qruey = `SELECT * FROM Customers                    // select all columns from the Customers table
WHERE age = (
    SELECT MIN(age)                         // select the minimum age from Customers table     
    FROM Customers 
);`



// SQL COUNT()
// --returns the number of rows in the Customers table
query = ` SELECT COUNT(*)
FROM Customers;`
// Here, the above SQL command counts and returns the number of rows in the Customers table.

// COUNT() With DISTINCT
// --count the unique countries in Customers table
query = `SELECT COUNT(DISTINCT country)
FROM Customers;`




//SQL SUM() AND AVG()
// In SQL, the SUM() and AVG() functions are used to calculate total and average values in numeric columns.

// --select the sum of amount from Orders table
query = `SELECT SUM(amount) AS total_sales
FROM Orders;`


// --get average age of customers
query = `SELECT AVG(age) AS average_age
FROM Customers;`






// SQL ORDER BY Clause
// The ORDER BY clause in SQL is used to sort the result set in ascending or descending order.
// --orders all rows from Customers in ascending order by age
query = `SELECT *
    FROM Customers
ORDER BY age ASC;`       // here ASC means ascending order and if we want to sort in descending order we can use DESC instead of ASC

// ORDER BY With Multiple Columns
// --sort all rows from Customers, first by first_name and then by age
query = `SELECT *
    FROM Customers
ORDER BY first_name, age;`





// SQL GROUP BY
// -- count the number of customers in each country

query = `SELECT country, COUNT(*) AS number
FROM Customers
GROUP BY country;`


// SQL LIKE and NOT LIKE Operators
// We use the SQL LIKE operator with the WHERE clause to get a result set that matches the given string pattern.
// --select customers who live in the UK 

query = `SELECT first_name
FROM Customers
WHERE country LIKE 'UK';`


qruey = `SELECT first_name
FROM Customers
WHERE country LIKE 'U%';` // here % is a wildcard character that matches any number of characters

// SQL NOT LIKE Operator
// The NOT LIKE operator is used to exclude the rows that match the given string pattern.
query = `SELECT first_name
FROM Customers
WHERE country NOT LIKE 'U%';` // or we can use NOT LIKE 'UK' to exclude the rows that match the UK country


// SQL Wildcards
// A wildcard character in SQL is used with the LIKE clause to replace a single character or a set of characters in a string.

// --select rows where the last name
// --of customers start with R 
query = ` SELECT *
        FROM Customers
    WHERE last_name LIKE 'R%';`


//SQL UNION
// In SQL, the UNION operator selects fields from two or more tables.

// -- select the union of name columns from two tables Teachers and Students 
query = `SELECT name
FROM Teachers
UNION
SELECT name
FROM Students;`
// Here, the SQL command returns the age columns from the Teachers and the Students tables, ignoring the duplicate fields.


// SQL UNION With WHERE Clause
// -- select the union of age columns from both Teachers and Students tables where age >= 20
query = `SELECT age, name FROM Teachers
WHERE age >= 20
UNION
SELECT age, name FROM Students
WHERE age >= 20;`
// Here, the SQL command selects the age column (only the unique values) from both tables where the age is greater than or equal to 20.

// SQL UNION ALL
// The UNION ALL operator selects fields from two or more tables, including duplicate fields.
query = `SELECT name
FROM Teachers
UNION ALL
SELECT name
FROM Students;`


// SQL UNION ALL With WHERE Clause
// -- select the union of age columns from both Teachers and Students tables where age >= 20
query = `SELECT age, name FROM Teachers
WHERE age >= 20
UNION ALL
SELECT age, name FROM Students
WHERE age >= 20;`
// Here, the SQL command selects the age column from both tables(including duplicate values) where the age is greater than or equal to 20.



// SQL Subquery
// In SQL, a SELECT statement may contain another SQL statement, known as a subquery or nested query.

// -- select all the rows from the Customers table
// -- with the minimum age

qruey = ` SELECT *
    FROM Customers
WHERE age = (
    SELECT MIN(age)  // select the minimum age from Customers table
  FROM Customers  // inner query return "single value" which is then used in the outer query to filter the rows
);`



// SQL Views
// A view is a virtual table in SQL that is based on the result of a SELECT query.
// In SQL, views contain rows and columns similar to a table, however, views don't hold the actual data.
// You can think of a view as a virtual table environment that's created from one or more tables so that it's easier to work with data.

// Creating a View in SQL
// We can create views in SQL by using the " CREATE VIEW " command. For example,

query = ` CREATE VIEW us_customers AS
SELECT customer_id, first_name
FROM Customers
WHERE Country = 'USA';`
// Here, a view named us_customers is created from the customers table.

// Now to select the customers who lives in USA, we can simply run,
qruey = `SELECT * FROM us_customers;`


// Updating a View
// It's possible to change or update an existing view using the CREATE OR REPLACE VIEW command. For example,

qruey = `CREATE OR REPLACE VIEW us_customers AS
SELECT *
    FROM Customers
WHERE Country = 'USA';`
// Here, the us_customers view is updated to show all the fields.

// Deleting a View
//We can delete views using the DROP VIEW command. For example,
qruey = `DROP VIEW us_customers;`


// Views for Complex Queries
// Suppose A and B are two tables and we wan't to select data from both of the tables. For that, we have to use SQL JOINS.
qruey = ` CREATE VIEW order_details AS
SELECT Customers.customer_id, Customers.first_name, Orders.amount
FROM Customers
JOIN Orders
ON Customers.customer_id = Orders.customer_id;`




// SQL HAVING Clause
// The SQL HAVING clause is used if we need to filter the result set based on aggregate functions such as MIN() and MAX(), SUM() and AVG(), and COUNT().
// -- select the count of customer ids greater than one and their corresponding country 
query = `SELECT COUNT(customer_id), country
FROM Customers
GROUP BY country
HAVING COUNT(customer_id) > 1;`










// SQL CREATE DATABASE Statement
// The CREATE DATABASE statement is the SQL command used to create databases.
qruey = `CREATE DATABASE my_db;`
// Here, the SQL command creates a database named my_db.

// CREATE DATABASE IF NOT EXISTS
// If a database already exists, SQL will throw an error while creating another database of the same name.
// In such situations, we can use the CREATE DATABASE IF NOT EXISTS statement to create a database only if there is no existing database with the same name.For example,

query = `CREATE DATABASE IF NOT EXISTS my_db;`

// List all Databases
qruey = `SHOW DATABASES;`

// Switch Databases
// We often have to work with multiple databases. To switch between available databases, we can run the following statement.
query = `USE my_db;`



// SQL CREATE TABLE
// The SQL CREATE TABLE statement is used to create a database table.We use this table to store records(data).For example,

// -- create a table named Companies with different columns
query = `CREATE TABLE Companies(
    id int,
    name varchar(50),
    address text,
    email varchar(50),
    phone varchar(10)
);`
// Here, the SQL command creates a database named Companies with the columns: id, name, address, email and phone.
// The table we created will not contain any data as we have not inserted anything into the table


// CREATE TABLE IF NOT EXISTS
// If we try to create a table that already exists, we get an error message 'Error: table already exists'.
// To fix this issue, we can add the optional IF NOT EXISTS command while creating a table.

// --create a Companies table if it does not exist
query = `CREATE TABLE IF NOT EXISTS Companies(
    id int,
    name varchar(50),
    address text,
    email varchar(50),
    phone varchar(10)
);`
// Here, the SQL command checks if a table named Companies exists, and if not, it creates a table with specified columns.



// Create Table Using Another Existing Table
// In SQL, we can create a new table by duplicating an existing table's structure.

// --create a backup table from the existing table Customers
query = `CREATE TABLE CustomersBackup
AS
SELECT *
    FROM Customers;`




// SQL DROP DATABASE Statement
// In SQL, DROP DATABASE is used to delete a database from our Database Management System.
query = `DROP DATABASE my_database;`
// Also, you need admin or DROP permission to run this command.


// SQL DROP TABLE Statement
// The SQL DROP TABLE statement is used to delete a table from a database.
// -- delete Shippings table
query = `DROP TABLE Shippings;`
// Also, make sure you have admin or DROP permission to run this command.

// DROP TABLE IF EXISTS
// If a table does not exist, dropping it will throw an error.To fix this issue, we can add the optional IF EXISTS command while dropping a table.For example,

// -- delete Orders table if it exists
query = `DROP TABLE IF EXISTS Orders;`



// SQL ALTER TABLE Statement
// -- add phone column to Customers table
query = `ALTER TABLE Customers
ADD phone varchar(10);`
// Here, the SQL command adds a column named phone to the Customers table.


// ALTER TABLE Operations
// We can perform the following operations on a table using the ALTER TABLE command:

// Add a column
// Rename a column
// Modify a column
// Delete a column
// Rename a table


// Add Column in a Table
// We can add a new column to an existing table using the ALTER TABLE command with the ADD keyword.
query = `ALTER TABLE Customers
ADD phone varchar(10);`
// Add Multiple Columns in a Table
query = `ALTER TABLE Customers
ADD email varchar(50),
address varchar(100);`

// Rename a Column in a Table
// We can rename a column in a table using the ALTER TABLE command with the RENAME COLUMN keyword.
query = `ALTER TABLE Customers
RENAME COLUMN phone TO mobile;`
// Here, the SQL command renames the phone column to mobile in the Customers table.

// Modify the Data Type of a Column
// We can modify the data type of a column in a table using the ALTER TABLE command with the MODIFY keyword.
query = `ALTER TABLE Customers
MODIFY COLUMN phone varchar(20);`


// Drop Column in a Table
// We can drop a column from a table using the ALTER TABLE command with the DROP COLUMN keyword.
query = `ALTER TABLE Customers
DROP COLUMN phone;`

// Rename a Table
// We can rename a table using the ALTER TABLE command with the RENAME TO keyword.
query = `ALTER TABLE Customers
RENAME TO Suppliers;`
// Here, the SQL command renames the Customers table to Suppliers.



// SQL BACKUP DATABASE Statement
// In SQL, the BACKUP DATABASE statement is used to create database backups.
// –- backup database to the given path
query = `BACKUP DATABASE my_db
TO DISK = 'C:\my_db_backup.bak';`
// Here, the SQL command creates a backup file of the my_db database inside C drive, named my_db_backup.bak.

// Types of Backups in SQL

// Full Backup
// Differential Backup
// Transaction Log (T-log) backup


// Restore Database From Backup
// To restore a backup file to a database management system, we can use the RESTORE DATABASE command. For example,

query = `RESTORE DATABASE my_db
FROM DISK = 'C:\my_db_backup.bak';`
// Here, the SQL command restores the my_db_backup.bak file to the database named my_db.



// SQL INSERT INTO
// In SQL, we use the INSERT INTO statement to insert new row(s) into a database table.
// -- insert a row in the Customers table

query = ` INSERT INTO Customers(customer_id, first_name, last_name, age, country)
VALUES
    (7, 'Ron', 'Weasley', 31, 'UK');`


//  Insert Multiple Rows at Once in SQL
query = `INSERT INTO Customers(customer_id, first_name, last_name, age, country)
VALUES
    (7, 'Ron', 'Weasley', 31, 'UK'),
    (8, 'Hermione', 'Granger', 31, 'UK'),
    (9, 'Harry', 'Potter', 31);`   // in this row the country is not specified so it will be NULL by default



// SQL UPDATE
// In SQL, the UPDATE statement is used to modify existing records (rows) in a database table.

// SQL UPDATE TABLE Syntax
Syntax = `UPDATE table_name
SET column1 = value1, column2 = value2, ...
[WHERE condition];`

// --update a single value in the given row

query = `UPDATE Customers
SET age = 21
WHERE customer_id = 1;`
// Here, the SQL command updates the age column to 21 where the customer_id equals 1.


// Update Multiple Values in a Row
query = `UPDATE Customers
SET first_name = 'John', last_name = 'Doe'
WHERE customer_id = 1;`


// Update Multiple Rows
query = `UPDATE Customers
SET age = 30
WHERE country = 'USA';`

// Update all Rows
query = `UPDATE Customers
SET age = 30;`







// SQL SELECT INTO (Copy Table)
// In SQL, the SELECT INTO statement is used to copy data from one table to another table.

// SELECT INTO Syntax
Syntax = `SELECT column1, column2, ...
FROM destination_table
INTO source_table;`

// -- copy data from Customers table to a new table named CustomersBackup
query = `SELECT *
INTO CustomersBackup
FROM Customers;`
// Here, the SQL command copies all the data from the Customers table to a new table named CustomersBackup.

// Note: The SELECT INTO statement creates a new table. If the database already has a table with the same name, SELECT INTO gives an error.
// If you want to copy data to an existing table (rather than creating a new table), you should use the INSERT INTO SELECT statement.


// Copy Selected Columns Only
// We can also copy selected columns from the old table to a new table.For example,
// -- copy selected columns only
query = `SELECT customer_id, country
INTO CustomersCountry
FROM Customers;`
// Here, the SQL command only copies the customer_id and country columns to the CustomersCountry table.


// Copy Records Matching a Condition
// We can also copy records that match a specific condition from one table to another table.For example,
// -- copy records matching a condition
query = `SELECT * INTO CustomersUSA
FROM Customers
WHERE country = 'USA';`


// Copy to Another Database
// By default, SELECT INTO creates a new table in the current database.If we want to copy data to a table in a different database, we can do that by using the IN clause.For example,

// --copy contents of a table to another database
query = `SELECT *
    INTO CustomersCopy
IN another_db.mdb
FROM Customers;`




// SQL INSERT INTO SELECT Statement
// The SQL INSERT INTO SELECT statement is used to copy records from one table to another existing table.
// -- copy data to an existing table
query = `INSERT INTO OldCustomers
SELECT *
    FROM Customers;`


// Copy Selected Columns Only
// We can also copy only the selected columns from one table to another. For example,
// --copy selected columns only
query = `INSERT INTO OldCustomers(customer_id, age)
SELECT customer_id, age
FROM Customers;`


// Copy Data From Two Tables to One
// We can also copy records from two different tables using the JOIN clause with INSERT INTO SELECT.For example,
// --copy contents after joining two tables
query = `INSERT INTO CustomersOrders
SELECT Customers.customer_id, Customers.first_name, Orders.amount
FROM Customers
JOIN Orders
ON Customers.customer_id = Orders.customer_id;`



// SQL DELETE and TRUNCATE
// In SQL, the DELETE clause is used to delete row(s) from a database table.
query = `DELETE FROM Customers
WHERE customer_id = 4;`
// Here, the SQL command will delete a row from the Customers table if its customer_id is 4.


// Delete all Rows in a Table
query = `DELETE FROM Customers;`


// Truncate Table in SQL
// The TRUNCATE TABLE clause is another way to delete all rows from a table at once. For example,
query = `TRUNCATE TABLE Customers;`


// SQL DELETE vs. TRUNCATE
// SQL DELETE supports the WHERE clause.	 ||         SQL TRUNCATE doesn't support the WHERE clause.
// SQL DELETE can remove single, multiple, or all rows/records from a table.	  ||    SQL TRUNCATE can only remove all the records from a table.
