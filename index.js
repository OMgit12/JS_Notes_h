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
console.log(result, "-", typeof result);

result = "3" + true;
console.log(result, "-", typeof result);

result = "3" + null;
console.log(result, "-", typeof result);

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

  console.log(count);

  if (count > 1) {
    count = count - 1;  // decrement the count by 1
    Counter(count); // recursive function call means the function will call itself until the condition is false | count value is now 4 then 3 then 2 then 1
  }
  else {
    return  // in this case the function will return undefined and the recursion will stop.
  }
}


Counter(5); // 5 4 3 2 1