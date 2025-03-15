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
console.log(num1);
