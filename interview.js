// let , var and const
// let and const is block level variable and var is function level variable 
// {} is block and let and const is block scope variable
// var is function scope variable 

let x = 10;

{
    let x = 20;
    // console.log(x); // output is 20 because let is block level variable
}
// console.log(x); // output is 10 because let is block level variable inside is block x is 20 and that value is not accessible outside   

var y = 20;
{
    var y = 30; // this y is blocked level variable which can be accessed outside the block because var is function level variable
    // console.log(y); // output is 30 because var is function level variable
}
// console.log(y); // output is 30 because var is function level variable


// var a
// var a // we can declare same variable multiple times using var keyword

// let b
// let b // we can declare same variable multiple times using let keyword

// const all // this will throw error because we need to initialize const variable with decleartion  
const all = 10; // no error good way to declear

// re-initialisation

let s = 1
s = 2
// console.log(s); // output is 2 because we can re-initialise let variable

var a = 1
a = 2
// console.log(a); // output is 2 because we can re-initialise var variable

// const a = 1
// a = 2 // this will throw error because we can not re-initialise const variable

