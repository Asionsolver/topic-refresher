// const arr = [1, 2, 3, "text", NaN, 4, "", 5, 6, 7, false, 8, true, 9];

// const result = arr.map((item) => item * 2);
// console.log(result);

// const result2 = arr.map((item) => item % 2 === 0);
// console.log(result2);

// const result3 = arr.map((item) => item.toString());
// console.log(result3);

// const result4 = arr.map((item) => {
//   if (item % 2 === 0) {
//     return item;
//   }
// });
// console.log(result4);

// const result5 = arr.filter((item) => item)
// console.log(result5)

// const result6 = arr.filter((item) => !item)
// console.log(result6)

// const result7 = arr.filter((value) => !!value ).map((item) => item.toString());
// console.log(result7);

// we want this result: '123456789'
// const result8 = arr.reduce((acc, item, index) => {
//  if( index === 0) acc += '[';
//  if (item) {
//     acc += item.toString() + (index < arr.length - 1 ? ", " : "");
//   }
//     if( index === arr.length - 1) acc += ']';

//   return acc;
// }, "");

// console.log(result8);

// const result9 = arr.reduce((acc, item, index) => {
//   if (item) {
//     acc.push(item.toString());
//   }
//   return acc;
// }, []);

// console.log(result9);

/**
 * Map -> return same length as the original array
 * Filter -> with filtered values
 * Reduce -> know one knows(only the developer knows)(all possible value)
 */

const array = []

for (let i = 0; i < 7000000; i++) {
  array.push(i)
}

console.time('not optimized')
array.filter(item => item % 2 === 0).map(item => item * 2)

console.timeEnd('not optimized')

console.time('optimized')
array.reduce((acc, item) => {
  if (item % 2 === 0) {
    acc.push(item * 2)
  }
  return acc
}, [])

console.timeEnd('optimized')

// ! reduce method implementation

// console.time('optimized')
// array.reduce((acc, item) => {
//   if (item % 2 === 0) {function reduce(callback, array, initialValue) {
//   let accumulator = initialValue !== undefined ? initialValue : array[0];
//   for (let i = initialValue !== undefined ? 0 : 1; i < array.length; i++) {
//     accumulator = callback(accumulator, array[i]);
//   }
//   return accumulator;
// }

// const numbers = [1, 2, 3, 4, 5];
// const sumOfNumbers = reduce((x, y) => x + y, numbers);
// console.log(sumOfNumbers);  // Output: 15

// ! map method implementation
// function map(callback, array) {
//   const newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     newArray.push(callback(array[i], i, array));
//   }
//   return newArray;
// }
console.timeEnd('optimized')
