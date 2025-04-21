// JavaScript ES6(also known as ECMAScript2015 or ECMAScript6) is the sixth edition of JavaScript introduced in June 2015.

// JavaScript Arrow Function
// arrow function to add two numbers
const add = (a, b) => {
    return a + b;
}
// console.log(add(2, 3)); // output 5

// Arrow Function With No Arguments
const a = () => {
    return "harry potter";
}
// console.log(a()); // output harry potter


// this Keyword With Arrow Function
// Inside a regular function, this keyword refers to the function where it is called.
// constructor function
function Person() {

    this.name = 'Jack',
        this.age = 25,
        this.sayAge = function () {

            console.log(this.age);

            let innerFunc = () => {
                console.log(this.age);
            }
            innerFunc();
        }
}
const x = new Person();
x.sayAge();
// Here, the innerFunc() function is an arrow function.
// And inside the arrow function, this refers to the parent's scope, i.e., the scope of the Person() function. Hence, this.age gives 25.



// JavaScript Default Parameters
// Starting from JavaScript ES6, we can provide default values for function parameters.
// These default values are used when the function is called without passing the corresponding arguments. for example:
function sum(x = 3, y = 5) { // default values for x and y are 3 and 5
    // return sum
    return x + y;
}

// pass arguments to x and y
var result = sum(5, 15);
// console.log(`Sum of 5 and 15: ${result}`);

// pass argument to x but not to y
result = sum(7);
// console.log(`Sum of 7 and default value (5): ${result}`);

// pass no arguments
// use default values for x and y
result = sum();
// console.log(`Sum of default values (3 and 5): ${result}`);


// JavaScript Spread Operator
// The JavaScript spread operator  "..."  is used to expand or spread out elements of an iterable, such as an array, string, or object.

let numbers = [1, 2, 3];

// equivalent to
// console.log(numbers[0], numbers[1], numbers[2])
console.log(...numbers);
// Output: 1 2 3




// JavaScript Destructuring
// The destructuring assignment introduced in ES6 makes it easy to assign array values and object properties to distinct variables.For example,
// assigning object attributes to variables
const person = {
    name: 'Sara',
    age: 25,
    gender: 'female'
}

// destructuring assignment
let { name: name1, age, gender } = person;

// console.log(name1); // Sara
// console.log(age); // 25
// console.log(gender); // female

// Array Destructuring
// You can also perform array destructuring in a similar way.For example,
const arrValue = ['one', 'two', 'three'];

// destructuring assignment in arrays
const [x1, y1, z1] = arrValue;

// console.log(x1); // one
// console.log(y1); // two
// console.log(z1); // three


// Assign Default Values
let arrValue1 = [10];

// assigning default value 5 and 7
let [x2 = 5, y2 = 7] = arrValue1;

console.log(x2); // 10
console.log(y2); // 7


// Swapping Variables
// In this example, two variables are swapped using the destructuring assignment syntax.
// program to swap variables

let x5 = 4;
let y5 = 7;

// swapping variables
[x5, y5] = [y5, x5]; // in this case, the destructuring assignment syntax is used to swap the values of x and y.

// console.log(x5); // 7
// console.log(y5); // 4

// JavaScript Classes
// In JavaScript ES6, classes provide a way to create blueprints for objects, similar to traditional object-oriented programming languages like C++ or Java.

// define a class named 'Person'
class Person10 {
    // class constructor to initialize the 'name' and 'age' properties
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.address = "New York"; // default value for address property
    }
    // method to display a message
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. and I live in ${this.address}`);
    }
}

// create two instances of the Person class
let person11 = new Person10("Jack", 30);
// let person2 = new Person("Tina", 33);

// call greet() method on two instances 
person11.greet();


// Class Inheritance
// Inheritance enables you to define a class that takes all the functionality from a parent class and allows you to add more.
// Using class inheritance, a class can inherit all the methods and properties of another class.
// To use class inheritance, you use the extends keyword. For example,
// parent class
class Persons {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello ${this.name}`);
    }
}

// inheriting parent class
class Student extends Persons {
    constructor(name) {
        // call the super class constructor and pass in the name parameter
        super(name);
    }
}

let student1 = new Student('Jack');
student1.greet();
