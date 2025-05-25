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
