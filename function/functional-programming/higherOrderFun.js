/**
 * Higher Order Functions
 * - function can be passed as an argument
 * - function can be returned from another function
 */

// function can be passed as an argument

function generateRandomNumber(max, cb) {
  const randomNumberOne = Math.floor(Math.random() * max);
  const randomNumberTwo = Math.floor(Math.random() * max);

  const result = cb(randomNumberOne, randomNumberTwo);
  return result;
}


const result1 = generateRandomNumber(50, (randomNumberOne, randomNumberTwo) => {
  return randomNumberOne + randomNumberTwo;
});

console.log(result1);

const result2 = generateRandomNumber(100, (randomNumberOne, randomNumberTwo) => {
    return randomNumberOne - randomNumberTwo;
    }
);
console.log(result2);


const result3 = generateRandomNumber(10, (randomNumberOne, randomNumberTwo) => {
    return randomNumberOne * randomNumberTwo;
    }
);

console.log(result3);

const result4 = generateRandomNumber(10, (randomNumberOne, randomNumberTwo) => {
    return randomNumberOne / randomNumberTwo;
    }   
);

console.log(result4);

generateRandomNumber(100, (randomNumberOne, randomNumberTwo) => {
    console.log(randomNumberOne, randomNumberTwo)
    }
);

// function can be returned from another function

function power(p){
  return function(n){
    let result = 1;
    for(let i = 0; i<=p; i++){
      result *= n
    }
    return result;
  }
}

const sqr = power(2)
const cube = power(3)
const power6 = power(6)

console.log('Sqr are a',sqr);
console.log('Cube are a',cube);
console.log('Power6 are a',cube);

console.log(sqr(5));
console.log(cube(2));
console.log(power6(3));

const radius = [1, 2, 3];

// function to calculate area of the circle
// const calculateArea =  function (radius) {
//     const output = [];
//     for(let i = 0; i< radius.length; i++){
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output;
// }

// console.log(calculateArea(radius)) //Output: [ 3.141592653589793, 12.566370614359172, 28.274333882308138 ]

// // function to calculate diameter of the circle
// const calculateDiameter =  function (radius) {
//   const output = [];
//   for(let i = 0; i< radius.length; i++){
//       output.push(2 * radius[i]);
//   }
//   return output;
// }

// console.log(calculateDiameter(radius)) //Output: [ 2, 4, 6 ]

// logic to calculate area
const area = function(radius){
  return Math.PI * radius * radius;
}

// logic to calculate diameter
const diameter = function(radius){
  return 2 * radius;
}

// logic to calculate circumference
const circumference = function(radius){
  return 2 * Math.PI * radius;
}
// a reusable function to calculate area, diameter, etc
const calculate = function(radius, logic){ 
  const output = [];
  for(let i = 0; i < radius.length; i++){
    output.push(logic(radius[i]))
  }
  return output;
}
console.log(calculate(radius, area));
console.log(calculate(radius, diameter));
console.log(calculate(radius, circumference));