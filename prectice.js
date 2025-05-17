// Array

// 1: check if the input is an array
function checkarray(input) {
    if (Array.isArray(input)) {
        return true;
    }
    else {
        return false;
    }
}

console.log(checkarray([1, 2, 3, 4, 5]));


// Write a JavaScript function to clone an array.
function cloneArray(arr) {
    let a = [...arr]
    return a
}

console.log(cloneArray([1, 2, 3, 4, 5]));


// Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
function firstElement(arr, n) {
    return arr.slice(2, n); // in this 2 is the starting index and n is the ending index here last index excluded
}

console.log(firstElement([1, 2, 3, 4, 5], 3));


// Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
function lastElement(arr, n) {
    return arr.slice(-n); // this will return the last 'n' elements of the array
}

console.log(lastElement([1, 2, 3, 4, 5], 1));


// Write a simple JavaScript program to join all elements of the following array into a string.
function joinArray(arr) {
    return arr.join(","); // this join method will return the array in string | "," is showing the separator between the elements
}

console.log(joinArray(["Red", "Green", "White", "Black"]));
