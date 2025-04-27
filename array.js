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
    break; // this will break the loop if the element is an object
  }
  console.log(array[i]); // this will log the current element if it is not an object
}

const number = [1, 2, 3, 4, 5, 6];

// inbuilt array methods in js
// map() method in js array to iterate over the array and return the new array
const newNumber = number.map((value, index, array) => {
  return { index: index, value: value * 2 };
});
// console.log(newNumber);

// filter() method in js array to filter the array based on the condition and return the new array
const filterNumber = number.filter((num, index, array) => {
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
const someNumber = number.some((num, index, array) => {
  return num > 3;
});
// console.log(someNumber);

// every method in js array to check if all the element in the array satisfy the condition and return true or false
const everyNumber = number.every((num, index, array) => {
  return num > 3;
});
// console.log(everyNumber);

// find method in js array to find the first element in the array which satisfy the condition
const findNumber = number.find((num, index, array) => {
  return num > 3;
});
// console.log(findNumber);

// spread and rest operator in js array
// spread operator in js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// merge two array using spread operator in js spread operator basically used spread( felana )  the array or object in js
const arr3 = [...arr1, ...arr2];
// console.log(arr3);

// rest operator in js
const [first, ...rest] = arr3;
// console.log(first);
// console.log(rest);

// others methods in js array
// concat() method in js array to merge two or more arrays
const arr4 = arr1.concat(arr2);
// console.log(arr4);

// slice() method in js array to return the part of the array
const arr5 = arr4.slice(1, 3); // return the array from index 1 to 3
// console.log(arr5);

// splice() method in js array to add or remove the element from the array
const arr6 = arr4.splice(1, 4); // remove the element from index 1 to 4 , splice(1,4) means remove 4 element from index 1
// console.log(arr6);
const arr7 = arr4.splice(1, 1);
// console.log(arr7);

// flat method in js array to flat the array of array like [[1,2],[3,4]] to [1,2,3,4]
const arr8 = [
  [1, 2],
  [[7, 8], 3, 4],
];

const arr9 = arr8.flat(2); // flat the array of array to 2 level
// console.log(arr9);

// reverse method in js array to reverse the array element in the array
const arr10 = [1, 2, 3, 4, 5];
// console.log(arr10.reverse()); // output [1,2,3,4,5] to [5,4,3,2,1]

// sort method in js array to sort the array element in the array
const arr11 = [3, 1, 4, 2, 5];
arr11.sort(
  (a, b) => {
    // a is the first element and b is the second element in the array
    return a - b; // if return positive then b comes first and if return negative then a comes first
  } // sort the array in ascending order
);

// console.log(arr11); // output [3,1,4,2,5] to [1,2,3,4,5]

arr11.sort(
  (a, b) => {
    return b - a; // if return positive then a comes first and if return negative then b comes first
  } // sort the array in descending order
);
// console.log(arr11); // output [3,1,4,2,5] to [5,4,3,2,1]



// question asked in the interview related to array
// Q1 - second largest element in the array
const arr12 = [12, 35, 10, 1, 34, 1];

function secondLargest(arr) {
  const setArr = Array.from(new Set(arr)); // new Set(arr) is used to create a set object from the array and set object only allow unique values.
  // Array.from() method is used to create a new array from the set object
  // console.log(setArr);

  setArr.sort((a, b) => {
    return b - a; // sort the array in descending order
  });

  // console.log(setArr); // this will return the array in descending order

  if (setArr.length >= 2) {
    // console.log(setArr[1]); // return the second largest element in the array
    return setArr[1]; // this will return the second largest element in the array
  } else {
    console.log("No second largest element found"); // this will return if there is no second largest element in the array
  }
}

secondLargest(arr12);

// second method to find the second largest element in the array

const secondLargestElement = (arr) => {
  let largest = -Infinity; // this will return the largest element in the array
  let secondLargest = -Infinity; // this will return the second largest element in the array

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest; // this will return the second largest element in the array
      largest = arr[i]; // this will return the largest element in the array
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i]; // this will return the second largest element in the array
    }
  }
}

// console.log(secondLargestElement(arr12));



// rotate the array by k times
arrall = [1, 2, 3, 4, 5, 6, 7]; // this is the array to be rotated

const rotateArray = (arr, k) => {
  const n = arr.length; // this will return the length of the array
  // k = k % n; // this will return the remainder of k divided by n
  const rotatedArray = [...arr.slice(n - k), ...arr.slice(0, n - k)]; // this will return the rotated array
  return rotatedArray; // this will return the rotated array
}

// console.log(rotateArray(arrall, 2));


// reverse the array in place

const reverseArray = (arr, left, right) => {
  while (left < right) {
    const temp = arr[left]; // this will return the left element in the array
    arr[left] = arr[right]; // this will return the right element in the array
    arr[right] = temp; // this will return the temp element in the array
    left++; // this will increment the left element in the array
    right--; // this will decrement the right element in the array
  }
  return arr; // this will return the reversed array
}

// console.log(reverseArray(arrall, 0, arrall.length - 1)); // this will return the reversed array


[4, 5, 3, 6, 4, 6, 3, 2, 1, 8, 9]
// remove duplicates from the array
const removeDuplicates = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1); // this will remove the duplicate element from the array
      i--; // this will decrement the i element in the array
    }
  }

  return nums.length; // this will return the array without duplicates
}

console.log(removeDuplicates([4, 5, 3, 6, 4, 6, 3, 2, 1, 8, 9])); // this will return the array without duplicates