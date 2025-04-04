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
// console.log(num1);

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
for (let i = 0; i < 5; i++) {
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
  console.log(i);
}

function display() {
  console.log("Hello World!");
  return "retuen  Hello World!";
  console.log("this will after return!"); // this will not execute because return statement is the last statement of the function.
}

const setfj = display();
console.log(setfj);

// function expression in js
const add = function (a, b) {
  return a + b;
};
