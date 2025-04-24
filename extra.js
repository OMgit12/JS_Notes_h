// JavaScript and JSON
// JSON stands for Javascript Object Notation. JSON is a text-based data format that is used to store and transfer data. For example,
// JSON syntax
// {
//     "name": "John",
//     "age": 22,
//     "gender": "male",

// }
// JSON was derived from JavaScript. So, the JSON syntax resembles JavaScript object literal syntax. However, the JSON format can be accessed and be created by other programming languages too.

// JSON Data
// JSON data consists of key/value pairs similar to JavaScript object properties. The key and values are written in double quotes separated by a colon :. For example,
// "name": "John" // Note: JSON data requires double quotes for the key.

// JSON Object
// The JSON object is written inside curly braces { }. JSON objects can contain multiple key/value pairs. For example,
// { "name": "John", "age": 22 } 

// JSON Array
// JSON array is written inside square brackets[].For example,
["apple", "mango", "banana"]

// JSON array containing objects
// [
//     { "name": "John", "age": 22 },
//     { "name": "Peter", "age": 20 }.
//     { "name": "Mark", "age": 23 }
// ]

// Accessing JSON Data  : You can access JSON data using the dot notation. For example,

// JSON object
const data = {
    "name": "John",
    "age": 22,
    "hobby": {
        "reading": true,
        "gaming": false,
        "sport": "football"
    },
    "class": ["JavaScript", "HTML", "CSS"]
}

// accessing JSON object
console.log(data.name); // John
console.log(data.hobby); // { gaming: false, reading: true, sport: "football"}

console.log(data.hobby.sport); // football
console.log(data.class[1]); // HTML

// You can also use square bracket syntax [] to access JSON data. For example,

// JSON object
const data1 = {
    "name": "John",
    "age": 22
}

// accessing JSON object
console.log(data1["name"]); // John


// Converting JSON to JavaScript Object
// You can convert JSON data to a JavaScript object using the built-in JSON.parse() function. For example,
// json object
const jsonData = '{ "name": "John", "age": 22 }';

// converting json data to JavaScript object
const obj = JSON.parse(jsonData);
console.log(obj); // { name: 'John', age: 22 }
// accessing the data
console.log(obj.name); // John


// Converting JavaScript Object to JSON
// You can also convert JavaScript objects to JSON format using the JavaScript built-in JSON.stringify() function. For example,

const obj1 = {
    fname: "harry",
    age: 26
};

// converting JavaScript object to JSON
const jsonData1 = JSON.stringify(obj1);
console.log(jsonData1); // {"name":"harry","age":26}




// JavaScript Date and Time
// In JavaScript, date and time are represented by the Date object.The Date object provides the date and time information and also provides various methods.

// Creating Date Objects
// There are four ways to create a date object.

// new Date()
// new Date(milliseconds)
// new Date(Date string)
// new Date(year, month, day, hours, minutes, seconds, milliseconds)

// new Date()
// You can create a date object using the new Date() constructor.For example,
const timeNow = new Date();
console.log(timeNow); // shows current date and time


// Formatting a Date
// Unlike other programming languages, JavaScript does not provide a built -in function for formatting a date.
// However, you can extract individual bits and use it like this.

const currentDate = new Date();
const date = currentDate.getDate();
const month = currentDate.getMonth();
const year = currentDate.getFullYear();
const time = currentDate.getTime(); // returns the number of milliseconds since January 1, 1970

// show in specific format
let monthDateYear = (month + 1) + '/' + date + '/' + year;

console.log(monthDateYear); // 7/3/2020




// JavaScript "use strict"
// In JavaScript, 'use strict'; states that the code should be executed in 'strict mode'. This makes it easier to write good and secure JS code. For example,
myVariable = 9;

// Here, myVariable is created without declaring.This works as a global variable in JavaScript.However, if you use this in strict mode, the program will throw an error.For example,
'use strict';
// Error
myVariable = 9;
//  The above code throws an error because myVariable is not declared. In strict mode, you cannot use the variable without declaring them.

