// JavaScript is a versatile, high-level programming language that is widely supported across all major operating systems.

// Declare Variables in JavaScript
// In JavaScript, we use the "var" or "let" keywords to declare variables. For example,
var age;
let name;

// Initialize Variables in JavaScript
// declare variable num
let num;
// assign 5 to num
num = 5;

// JavaScript Constants
// A constant is a type of variable whose value cannot be changed.
// assign 5 to num
const numbr = 5;

// assign 10 to num
// numbr = 10;
console.log(numbr); // Error! constant cannot be changed
// Always Initialize a Constant During Declaration

// JavaScript Symbol
// A symbol is a unique and immutable data type that is used as an identifier for object properties.
// two symbols with the same description
let value1 = Symbol(true);
let value2 = Symbol(true);

console.log(value1 === value2); // false
// console.log(4 ** 2);

console.log(4 !== "4");

// JavaScript Type Conversion
// type conversion is the process of converting data of one type to another. For example, converting "string" data to number.
// There are two types of type conversion in JavaScript:
// Implicit Conversion - Automatic type conversion.
// Explicit Conversion - Manual type conversion.

// numeric string used with + gives string type
let result;

// convert number to string
result = "3" + 2;
console.log(result, "-", typeof result); // "32" - string

result = "3" + true;
console.log(result, "-", typeof result); // "3true" - string

result = "3" + null;
console.log(result, "-", typeof result); // "3null" - string

// js mei jb bhi apn kisi string ko number mei convert krna hota hai to use parseInt() function use krte hain.
let str = "123";
let num1 = parseInt(str);
// console.log(typeof num1);

let a = "123.45";
console.log(a);

// if-else statement
let rating = 2.5;

if (rating <= 2) {
  console.log("poor");
} else if (rating < 4) {
  console.log("good");
} else {
  console.log("excellent");
}

// for lOOP in js
for (let i = 0; i < 5; i++) { // for loop is used to iterate over the array or object in js
  console.log(i);
}

// while loop in js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// do-while loop in js
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);

// switch case in js
let day = "sunday";
switch (day) {
  case "monday":
    console.log("monday");
    break;
  case "tuesday":
    console.log("tuesday");
    break;
  default:
    console.log("invalid day");
}

// continue statement in js
for (let i = 1; i <= 10; ++i) {
  // skip iteration if value of i is between 4 and 9
  if (i > 4 && i < 9) {
    continue; // this will skip the iteration of the loop for the value of i between 4 and 9 and continue with the next iteration of the loop.
  }
  // console.log(i);
}

function display() {
  // console.log("Hello World!");
  return "retuen  Hello World!";
  console.log("this will after return!"); // this will not execute because return statement is the last statement of the function.
}

const setfj = display();
// console.log(setfj);

// function expression in js
const add = function (a, b) {  // in function expression, function is assigned to a variable and can be called using the variable name.
  return a + b;
};

// console.log(add(1, 2));




// JavaScript Variable Scope
// Based on the scope they're declared in, variables can be classified as:

// Global Variables
// Local Variables
// Block-Level Variables

// Local Variables
// Local variables are declared inside a function and can only be accessed within that function. For example:
function localVariable() {
  let x = 10; // local variable , can not be accessed outside the function 
  console.log(x); // 10
}
// localVariable(); // 10
// console.log(x); // Error! x is not defined


// Global Variables
// Global variables are declared outside any function and can be accessed from anywhere in the program. For example:
let y = 20; // global variable , can be accessed outside the function

function hello() {
  console.log(y); // 20
}
// hello(); // 20
// console.log(y); // 20


// Block-Level Variables
//JavaScript ES6 introduced block-level scoping with the 'let' and 'const' keywords.
// Block-level variables are declared inside a block (enclosed in curly braces {}) and can only be accessed within that block. For example:

function display_scopes() {
  // declare variable in local scope
  let message = "local";

  if (true) {

    // declare block-level variable
    let message = "block-level";

    console.log(`inner scope: ${message}`);
  }

  console.log(`outer scope: ${message}`);
}

// display_scopes(); // inner scope: block-level  && outer scope: local




// JavaScript Hoisting
// In JavaScript, hoisting is a behavior in which a function or a variable can be used before declaration.
// example of variable hoisting in JavaScript

// use test variable before declaring
console.log(test);
// declare and initialize test variable
var test = 5;
// Output: undefined


// There are generally two types of hoistings in JavaScript:
// 1 Variable Hoisting
// 2 Function Hoisting

// Variable Hoisting
// Variable hoisting is a JavaScript mechanism where variables are moved to the top of their scope during the compile phase. For example:
// Hoisting With 'var'
// When we declare a variable using var, it is hoisted to the top of its current scope. For example,
// use the message variable before declaration
console.log(message);

// variable declaration using var keyword
var message;
// Output: undefined


// Hoisting With 'let' and 'const'
// When we declare a variable using let or const, it is not hoisted to the top of its current scope. For example,

// use the message variable before declaration
// console.log(all);

// variable declaration using let keyword
let all;
// output = ReferenceError: Cannot access 'message' before initialization

// 2 function hoisting in js
// In JavaScript, function hoisting allows us to call the function before its declaration.

// function call
greeting();

// function declaration
function greeting() {
  console.log("Welcome to Programiz.");
}




// JavaScript Recursion
// Recursion is a programming technique where a function calls itself to solve a problem. For example, the following function counts down from a given number to 1:
function Counter(count) {

  // console.log(count);

  if (count > 1) {
    count = count - 1;  // decrement the count by 1
    Counter(count); // recursive function call means the function will call itself until the condition is false | count value is now 4 then 3 then 2 then 1
  }
  else {
    return  // in this case the function will return undefined and the recursion will stop.
  }
}


Counter(5); // 5 4 3 2 1


function fatorial(a) {
  // console.log(a);

  if (a > 1) {
    return (a * fatorial(a - 1)); // decrement the count by 1 and call the function again with the decremented value of a
  }
  else {
    return 1;
  }
}

const sdfjfjf = fatorial(3); // this will call only once  
// console.log(sdfjfjf); // 6





// JavaScript Objects
// JavaScript object is a variable that can store multiple data in key-value pairs.

// student object
const student = {
  firstName: "Jack",
  rollNo: 32
};

// console.log(student);
// Output: { firstName: 'Jack', rollNo: 32 }

// in this firstName is the key and Jack is the value of the key firstName
// firstName: "Jack" and rollNo: 32 are the properties of the object student

// Access Object Properties
// console.log(student.firstName); // Jack // this is using . notation to access the property of the object
// console.log(student["rollNo"]); // Jack // this is using [] notation to access the property of the object


// JavaScript Object Operations
// In JavaScript, we can perform various operations on object properties like modifying, adding, deleting, and so on. Let's discuss some of them.

// 1. Modify Object Properties
// We can modify object properties by assigning a new value to an existing key.For example,
const person = {
  name: "Bobby",
  hobby: "Dancing",
};

// modify property
person.hobby = "Singing";

// display the person object
// console.log(person);

// Output: { name: 'Bobby', hobby: 'Singing' }

// 2. Add Object Properties
const students = {
  name: "John",
  age: 20,
};

// add properties
students.rollNo = 14;
students.faculty = "Science";

// display the object
// console.log(students);
// Output: { name: 'John', age: 20, rollNo: 14, faculty: 'Science' }

// 3. Delete Object Properties
// We can remove properties from an object using the "delete" operator. For example,

const employee = {
  name: "Tony",
  position: "Officer",
  salary: 30000,
};

// delete object property
delete employee.salary

// display the object
// console.log(employee);

// Output: { name: 'Tony', position: 'Officer' }


//  JavaScript Object Methods
// We can also include functions inside an object. For example,

const personn = {
  name: "Bob",
  age: 30,

  // use function as value
  greet: function () { // anonimous function is used as a method of the object
    console.log("Bob says Hi!");
  }
};

// call object method 
// objectName.methodKey(); // this will call the method of the object and execute the function inside the method
personn.greet();  // Bob says Hi!


// JavaScript this Keyword
// We use this keyword in an object method to access a property of the same object. For example,
// person object
const person_q = {
  name: "John",
  age: 30,

  // method
  introduce: function () {
    console.log(`My name is ${this.name} and I'm ${this.age} years old.`);
  }
};
// access the introduce() method
person_q.introduce();
// Output: My name is John and I'm 30 years old.


// Add Methods to an Object
// You can add more methods to a JavaScript object even after we've defined it. For example,

let studentss = {
  name: "John"
};

// add new method
studentss.greet = function () {
  console.log("Hello");
};

// access greet() method
studentss.greet();
// Output: Hello




// JavaScript Constructor Function
// In JavaScript, a constructor function is used to create and initialize objects. for example
function personsss() {
  this.name = "John"; // "this" keyword is used to refer to the current object
  this.age = 30; // "this" keyword is used to refer to the current object
}

// create object using constructor function
const person_2 = new personsss(); // new keyword is used to create a new object from the constructor function
// print the object
// console.log(person.name); // John 


// constructor function with crate multiple objects
function Person() {
  this.name = "John",
    this.age = 23,

    this.greet = function () {
      console.log("hello");
    }
}

// create objects
const person1 = new Person();
const person2 = new Person();

// access properties
// console.log(person1.name);  // John
// console.log(person2.greet()); // hello


// JavaScript Constructor Function Parameters
function daku(name, age, hobby) {
  this.name = name;
  this.age = age;
  this.hobby = hobby;
  this.greet = function () {
    console.log("Harry says hi!");
  }
}

const daku1 = new daku("John", 23, "dancing");
// console.log(daku1.name); // John
// console.log(daku1.greet()); // hello




// JavaScript Getter and Setter
// In JavaScript, we can use getter and setter methods to access and modify object properties.

// In JavaScript, there are two kinds of object properties:
// 1: Data properties
// 2: Accessor properties

// Data Property
// Here's an example of data property that we have been using in the previous tutorials.
const student_name = {

  // data property
  firstName: 'Monica',
};

// Accessor Property
// In JavaScript, accessor properties are methods that get or set the value of an object. For that, we use these two keywords:
// JavaScript Getter
// In JavaScript, getter methods are used to access the properties of an object.For example,
const studentsss = {

  // data property
  firstName: 'Monica',

  // accessor property(getter)
  get getName() {
    return this.firstName;
  }
};

// accessing data property
// console.log(studentsss.firstName); // Monica

// accessing getter methods
// console.log(studentsss.getName); // Monica

// trying to access as a method
// console.log(studentsss.getName()); // error


// JavaScript Setter
// In JavaScript, setter methods are used to change the values of an object.For example,

const studentdssssss = {
  firstName: 'Monica',

  //accessor property(setter)
  set changeName(newName) {
    this.firstName = newName;
  }
};

// console.log(studentdssssss.firstName); // Monica

// change(set) object property using a setter
studentdssssss.changeName = 'Sarah';

// console.log(studentdssssss.firstName); // Sarah




// javaScript prototype methods
// In JavaScript, prototype is a built-in property of an object that allows us to add new properties and methods to an object. For example,
function car() {
  console.log("car is running");
}

car.prototype.name = "Honda";
car.prototype.color = "red";
car.prototype.start = function () {
  console.log("car is starting");
};
// console.log(car.prototype.name);


// javaScript for in loop
// The JavaScript for...in loop iterates over the keys of an object.
const studentall = {
  name: "Monica",
  class: 7
};

// loop through the keys of student object
for (let key in studentall) {

  // display the key-value pairs
  // console.log(`${key} => ${student[key]}`); // student[key] is used to access the value of the key in the object
};
// Output:
// name => Monica
// class => 7



// JavaScript Number
// In JavaScript, numbers are used to represent numerical values. They can be whole numbers (like 5, 10, 100) or decimal numbers (like 3.13, 0.5, 10.75). For example,
let num11 = 5;
let num2 = 3.13;

// JavaScript NaN
// NaN(Not a Number) is a special value that is returned when a mathematical operation cannot produce a meaningful numeric result.
let num4 = 4 - "hello";
// console.log(num); // NaN

// JavaScript Infinity
// Infinity is a special value that signifies an amount larger than any finite number.For example,
let hej = 2 / 0;
// console.log(hej); // Infinity

let asfhss = -2 / 0;
// console.log(asfhss); // -Infinity


// JavaScript Symbol
// The JavaScript ES6 introduced a new primitive data type called Symbol.Symbols are immutable(cannot be changed) and are unique.For example,
// two symbols with the same description

const value10 = Symbol('hello');
const value12 = Symbol('hello');

// console.log(value10 === value12); // false





// JavaScript try...catch...finally Statement
// The try, catch and finally blocks are used to handle exceptions(a type of an error).Before you learn about them, you need to know about the types of errors in programming.
// Types of Errors
// 1: Syntax Error = cont = 5 // in this show syntax error because cont is not defined
// 2: Runtime Error = 5 / 0 // in this show runtime error because we are dividing by zero

// These errors that occur during runtime are called "exceptions". Now, let's see how you can handle these exceptions.


//  JavaScript try...catch Statement is used to handle the exceptions
try {
  // body of try
}
catch (error) {
  // body of catch  
}
// The main code is inside the try block. While executing the try block, if any error occurs, it goes to the catch block. The catch block handles the errors as per the catch statements.
// If no error occurs, the code inside the try block is executed and the catch block is skipped.

// program to show try...catch in a program
const numerator = 100, denominator = 'a';

try {
  console.log(numerator / denominator);

  // forgot to define variable a      
  console.log(sdksa);
}
catch (error) {
  console.log('An error caught');
  console.log('Error message: ' + error);
}


// JavaScript try...catch...finally Statement
// You can also use the try...catch...finally statement to handle exceptions.The finally block executes both when the code runs successfully or if an error occurs.
const numerator1 = 100, denominator1 = 'a';

try {
  console.log(numerator1 / denominator1);
  console.log(sfjsfjsd);
}
catch (error) {
  console.log('An error caught');
  console.log('Error message: ' + error);
}
finally {
  console.log('Finally will execute every time');
}


// JavaScript try...catch in setTimeout
// The try...catch won't catch the exception if it happened in "timed" code, like in setTimeout(). For example,

try {
  setTimeout(() => {
    console.log(5 / 0);
  }, 3000)
} catch (error) {
  console.log('An error caught');
  console.log('Error message: ' + error);
}



// JavaScript throw Statement
// In JavaScript, the throw statement handles user - defined exceptions(errors) .For example, if a certain number is divided by 0, and if you need to consider Infinity as an exception(error), you can use the throw statement to handle that exception.
const numberdjdjf = 40;
try {
  if (numberdjdjf > 50) {
    console.log('Success');
  }
  else {
    // user-defined throw statement
    throw new Error('The number is low');
  }
  // if throw executes, the below code does not execute
  console.log('hello');
}
catch (error) {
  console.log('An error caught');
  console.log('Error message: ' + error);
}

