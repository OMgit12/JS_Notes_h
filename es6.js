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
x.sayAge1();
// Here, the innerFunc() function is an arrow function.
// And inside the arrow function, this refers to the parent's scope, i.e., the scope of the Person() function. Hence, this.age gives 25.