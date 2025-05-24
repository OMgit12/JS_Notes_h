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
