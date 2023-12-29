const arr = [1, 2, 3, "text", NaN, 4, "", 5, 6, 7, false, 8, true, 9];

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

const result9 = arr.reduce((acc, item, index) => {
  if (item) {
    acc.push(item.toString());
  }
  return acc;
}, []);

console.log(result9);

/**
 * Map -> return same length as the original array
 * Filter -> with filtered values
 * Reduce -> know one knows(only the developer knows)(all possible value)
 */
