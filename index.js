// // function expression
// let product = (x, y) => {
//   console.log(y);
//   return x * y;
// };

// result = product(5);

// console.log(result); // 50

// // function declaration
// function sum(x, y) {
//   return x + y;
// }

// result = sum(5, 10);
// console.log(result); // 15

let data = [];
let currentsize = data.length;
console.log(currentsize);

let max = 5;

function push(newelement) {
  if (currentsize >= max) {
    console.log("Stack Overflow");
  }
  if (currentsize < max) {
    data[currentsize] = newelement;
    currentsize = currentsize + 1;
    console.log(data);
  }
}

/**
 * Removes the top element from the stack and updates the current size.
 * If the stack is empty, logs a message indicating the stack is empty.
 */

function pop() {
  if (currentsize <= 0) {
    console.log("Stack is empty");
  }
  if (currentsize > 0) {
    console.log(data[currentsize]);
    currentsize = currentsize - 1;
    console.log(data);
  }
}

push(1);
push(2);
push(3);

pop();
pop();
