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

function pop() {
  if (currentsize <= 0) {
    console.log("Stack Underflow");
  }
  if (currentsize > 0) {
    currentsize = currentsize - 1;
    console.log(data[currentsize]);
    console.log(data);
  }
}

push(1);
push(2);
push(3);

pop();
