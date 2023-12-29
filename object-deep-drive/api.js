// const axios = require("axios").default;

// const url = "https://jsonplaceholder.typicode.com/posts/";

// async function getData() {
//   const { data } = await axios.get(url);

//   const result = data.slice(0,10).map((item) => {
//     return {
//         userId : item.userId,
//       id: item.id,
//       title: item.title,
//     };
//   });
//   return result
// }

// getData().then((result) => console.log(result)).catch((err) => console.log(err));

// async function getData() {
//   const {data} = await axios.get(url);
//   const result = data.slice(0, 10).reduce((acc, item) => {
//     acc[item.id] = { ...item };
//     delete acc[item.id].body;
//     return acc;
//   }, {});
//   return result;
// }

// getData()
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

const name = [
  "asif ahamed",
  "sakib al hasan",
  "ashis roy",
  "anik sarker",
  "ferdous ahamed",
  "feroz khan",
  "abul kashem",
  "ayman sadiq",
  "asis kumer",
  "johir uddin",
  "noman ali",
  "jahid hasan",
  "jessan ahamed",
  "nissan ahamed",
  "yeasin ahamed",
  "al-amin hossain",
  "asrafull islam",
  "parvez mossarof",
  "shahin ahamed",
  "hridoy khan",
  "fahim hossain",
  "akas ahamed",
  "golam mostafa",
  "naim islam",
  "delowar hossain",
  "golam rabbani",
  "mohammad ali",
  "naim ali",
  "belal ahamed",
  "babu ahamed",
  "cahal Kulkarni",
  'choity shaha',
  "faruk ahamed",
  "golam kabir",
];

// output
/**
* A
  * asif ahamed
  * ashis roy
  * anik sarker
* F
  * ferdous ahamed
  * feroz khan
       
*/

const nameGroup = name.reduce((acc, item) => {
  const firstLetter = item[0].toUpperCase();
  if (firstLetter in acc) {
    // console.log("Found", firstLetter);
    acc[firstLetter].push(item);
  } else {
    acc[firstLetter] = [item];
    // console.log("Not Found", firstLetter);

  }
//   console.log(acc);
  return acc;
}, {});

// console.log(nameGroup);

Object.keys(nameGroup).forEach((groupKey) => {
    console.log(groupKey);
    nameGroup[groupKey].forEach((name) => {
        console.log(" ", name);
    });
    }
);
