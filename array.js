const person = {
  name: "hariom",
  age: 26,
};

// array declearing in js
const array = ["apple", "banana", "cherry", person];

// console.log(typeof array[3].name);

// Array Methods to add and remove for the array
// push() method to add element in the array at the end
array.push("mango");
array.push("kiwi");

console.log(array); // return the array with new elements

// pop() method to remove the last element from the array
array.pop();
console.log(array); // return the array with last element removed
