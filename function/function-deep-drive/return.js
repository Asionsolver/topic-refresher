// What is Function Composition?
// Function Composition is the process of combining two or more functions to produce a new function.

// For example -> f(g(x))

// ! When we use the result of a function in another function , we will use the return keyword

// function sum (x, y) {
//     return (x + y)
// }

// function multiply (x, y) {
//     return (x * y)
// }

// function subtract (x, y) {
//     return (x - y)
// }

// function divide (x, y) {
//     return (x / y)
// }

// const a = 10, b = 50

// const result1 = sum(a, b)
// console.log(result1)
// const result2 = subtract(a, b)
// console.log(result2)
// const result3 = multiply(result1, result2)
// console.log(result3)

// Short way of the above code
// const result = Math.abs(multiply(sum(a, b), subtract(a, b)))
// console.log(result)

// sum/ multiply/ subtract/ divide ->g(x)
// Math.abs(n) -> f(x)
//f(g(x)) -> Math.abs(multiply(sum(a, b), subtract(a, b))

// empty return = return undefined -> same thing

// sum(10, 5)
// multiply(15, 5)
// subtract(25, 15)
// divide(30, 15)

// const response = {
//     id: 1,
//     name: "Learn with Sumit",
//     details: {
//         founded: "2021",
//         founded: "Sumit Saha",
//         subscribers: "73K",
//         views: "5,00,0000",
//     },
// };

// console.log(response?.details?.views)

// const a = 5;
// const b = {
//     b: 1,
//     c: {
//         d: {
//             a: 5,
//         },
//     },
// };

// const {c: {d: {a: result }}}= b

// console.log(result)

// const url = 'https://jsonplaceholder.typicode.com/todos/1';

// const getData = async () => {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data)
// }

// getData();

/**
 * Function Benefits
 * - we can store function in a variable
 * - we can store function inside an array/object
 * - we can pass function as an argument
 * - we can return function from another function
 */

// * we can store function in a variable

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

// const sum = add(5, 10); // store function in a variable

// const sub = subtract(10, 5); // store function in a variable
// const mul = multiply(5, 10); // store function in a variable

// * we can store function inside an array/object

// const arr = [add, subtract];

// const object = {
//     sum,
//     sub,
//     mul,
// };

// console.log(object)

// let's construct a function

// const fn = new Function(
//   "str",
//   `let obj = {}
//     for(let s of str){ 
//         if(s !== ' '){
//             obj[s] = s
//         }
//     }

//     return obj`
// );

// function strToObj(str){
//     let obj = {}
//     for(let s of str){
//         if(s !== ' '){
//             obj[s] = s
//         }
//     }

//     return obj
// }

// console.log(strToObj('Ashis Kumar Paul'));
// console.log(fn("Ashis Kumar Paul"));

const constructFn = new Function(
  "name",
  "email",
  `
  const fName = name.split(' ')[0]
  const lName = name.split(' ')[1]
  
  console.log('Hello! Your first name is',fName, 'and last name is ',lName,'and Your email id is', email);
  `

);


console.log(typeof constructFn)

console.log(constructFn.toString())

constructFn( "Ashis Kumar Paul", "asionsolver@gmail.com");