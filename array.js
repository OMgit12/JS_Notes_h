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

// console.log(array); // return the array with new elements

// pop() method to remove the last element from the array
array.pop();
array.pop();
// console.log(array.pop()); // this show the last element which is removed
// console.log(array); // return the array with last element removed

// shift() method to remove the first element from the array
array.shift();
// console.log(array.shift()); // this show the first element which is removed
// console.log(array); // return the array with first element removed

// this method add the element at the start of the array
array.unshift("apple");
// console.log(array); // return the array with new element added at the start

// looping in js array
// for loop in js arrray
for (let i = 0; i < array.length; i++) {
  if (typeof array[i] === "object") {
    // console.log(array[i].name);
    break;
  }
  //   console.log(array[i]);
}

const number = [1, 2, 3, 4, 5, 6];
// inbuilt array methods in js
// map() method in js array to iterate over the array and return the new array
const newNumber = number.map((num, index, array) => {
  return { index: index, value: num * 2 };
});
// console.log(newNumber);

// filter() method in js array to filter the array based on the condition and return the new array
const filterNumber = number.filter((num) => {
  return num > 3;
});
// console.log(filterNumber);

// reduce() method in js array to reduce the array to single value
const reduceNumber = number.reduce((acc, current) => {
  // acc is the accumulator and current is the current value of the array
  return acc + current;
}, 0);
// console.log(reduceNumber);

// some method in js array to check if any element in the array satisfy the condition and return true or false
const someNumber = number.some((num) => {
  return num > 3;
});
// console.log(someNumber);

// every method in js array to check if all the element in the array satisfy the condition and return true or false
const everyNumber = number.every((num) => {
  return num > 3;
});
console.log(everyNumber);
