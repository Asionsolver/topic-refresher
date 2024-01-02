// pure function

// function add(x, y) {
//   return x + y;
// }

// add(3, 4); // 7

// Pure function - calculate the area of a circle
function calcCircleArea(radius) {
    return Math.PI * radius * radius;
  }
  
  // Perform follow to execute the function
  const radius = 5;
  const area = calcCircleArea(radius);
  console.log(`Circle area of radius ${radius} is ${area}`);


// impure function

// Global variable
let counter = 0;

// Impure function - increment the global counter
function incrCounter() {
  counter++;
}

// Usage
incrCounter();
console.log(`Counter value: ${counter}`); // Output: "Counter value: 1"
incrCounter();
console.log(`Counter value: ${counter}`); // Output: "Counter value: 2"

// ! side effect

let limit = 100;

// this function has no side effects

// function changeLimit(limit) {
// limit = 500;
// return limit;
// }

// console.log(changeLimit(limit));
// console.log(limit);

// This is not pure function. This function has side effects
// function changeLimit() {
//     limit = 500;
//     return limit;
//     }

// changeLimit();
// console.log(limit);

// another example of pure function. But this function create side effect

const arr = [1, 2, 3];
function add (arr, data){
    arr.push(data);
    return arr;
}

add(arr, 4);

console.log(arr);


