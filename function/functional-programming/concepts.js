// pure function

// function add(x, y) {
//   return x + y;
// }

// add(3, 4); // 7

// Pure function - calculate the area of a circle
// function calcCircleArea(radius) {
//     return Math.PI * radius * radius;
//   }
  
  // Perform follow to execute the function
  // const radius = 5;
  // const area = calcCircleArea(radius);
  // console.log(`Circle area of radius ${radius} is ${area}`);


// impure function

// Global variable
// let counter = 0;

// Impure function - increment the global counter
// function incrCounter() {
//   counter++;
// }

// Usage
// incrCounter();
// console.log(`Counter value: ${counter}`); // Output: "Counter value: 1"
// incrCounter();
// console.log(`Counter value: ${counter}`); // Output: "Counter value: 2"

// ! side effect

// let limit = 100;

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

console.log(arr); // Output: [1, 2, 3, 4]

// ! Impure function
const myNames = ["Oluwatobi", "Sofela"];

function updateMyName(newName) {
  myNames.push(newName);
  return myNames;
}

updateMyName("Tobi");
console.log(myNames);  // Output: ["Oluwatobi", "Sofela", "Tobi"] 

// updateMyName() is an impure function because it contains a code (myNames) that mutates an external state — thereby making updateMyName() have some side effects.


// ! Pure function
// We can eliminate updateMyName()'s side effects by turning it into a pure function, like so:
const myNamesTwo = ["Oluwatobi", "Sofela"];

function updateMyNameTwo(newName) {
   const myNamesTwo = ["Oluwatobi", "Sofela"];
   myNamesTwo[myNamesTwo.length] = newName;
   return myNamesTwo;
}
// updateMyNameTwo() does not depend on any external code to accomplish its duties, therefore, making it a pure function.

console.log(updateMyNameTwo("Tobi")) // Output: ["Oluwatobi", "Sofela", "Tobi"]
console.log(myNamesTwo); // Output: ["Oluwatobi", "Sofela"]

const myBio = ["Oluwatobi", "Sofela"];

function updateMyBio(newBio, array) {
  const clonedBio = [...array];
  clonedBio[clonedBio.length] = newBio;
  return clonedBio;
}

console.log(updateMyBio("codesweetly.com", myBio)); // Output: ["Oluwatobi", "Sofela", "codesweetly.com"]


function calculateTotalWithClone(items) {
  const itemsCopy = [...items]; // Clone the array to avoid modifying the original
  let total = 0;
  for (const item of itemsCopy) {
    total += item.price;
  }
  return total;
}

const originalItems = [{ price: 10 }, { price: 20 }];
const totalPrice = calculateTotalWithClone(originalItems); // Output: 30
console.log(totalPrice);
console.log(originalItems); // Items remain unchanged: [{ price: 10 }, { price: 20 }]

const compBio = ["code", "sweetly"];

function updateCompBio(newBio, array) {
   const clonedBio = [...array];
   clonedBio[clonedBio.length] = newBio;
   return clonedBio;
}

console.log(updateCompBio(".com", compBio)); // Output: ["code", "sweetly", ".com"]

// Impure function (modifies input)
function impureSum(a, b) {
  console.log(a, b) // Output: 5, 10
  a = a + b; // Modifies the input parameter 'a'
  console.log(a, b) // Output: 15, 10
  return a;
}

// Pure function (avoids mutations)
function pureSum(a, b) {
  
  return a + b; // Creates a new value without modifying inputs // This line never runs
}

let x = 5;
let y = 10;
console.log(impureSum(x, y)); // Modifies x to 15
console.log(x);
console.log(y);
console.log(pureSum(x, y)); // Returns 15 without modifying x or y

