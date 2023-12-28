/**
 * store 10 students information
 * - name
 * - age
 * - email
 * - id
 */

// utility function to generate a random uuid

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// const students = [
//   {
//     id: "9e7ca0d8-4dbd-484e-9286-6ae8770077cb",
//     name: "john",
//     age: 20,
//     email: "john20@gmail.com",
//   },
// {
//     id: "8685373a-3edf-44b8-9ebc-2bea8f99368c",
//     name: "asid",
//     age: 25,
//     email: "asid25@gmail.com",
//   },
//   {
//     id: "740c27f5-4808-4650-bf99-595e189bf6b5",
//     name: "mike",
//     age: 23,
//     email: "mike23@gmail.com",
//   },
// ];

/**
 * 1. Easily Traverse
 * 2. Filter
 * 3. Delete (medium)
 * 4. Update (medium)
 * 5. Create a new one (easy)
 */

// ! create a new student
// students.push({
//   id: uuidv4(),
//   name: "jane",
//   age: 22,
//   email: "jane22@gmail.com",
// });

// ! update a student

// 1st Step:
// const idToUpdate = "8685373a-3edf-44b8-9ebc-2bea8f99368c";

// 2nd Step:
// const updateStudent = {
//   name: "ashis",
//   age: 26,
//   email: "ashis26@gmail.com",
// };

// 3rd Step:(option 1)

// find object
// let updatedObj = students.find((student) => student.id === idToUpdate);
// console.log(updatedObj);

// subOption 1: (manually update)

// updatedObj.name = updateStudent.name;
// updatedObj.age = updateStudent.age;
// updatedObj.email = updateStudent.email;

// subOption 2: (recommended way to update)

// updatedObj = {
//     id: idToUpdate,
//     ...updateStudent,
// }

// 3rd Step: (option 2)

// find index
// const index = students.findIndex((student) => student.id === idToUpdate);
// console.log(index);

// subOption 1:(most of the time not recommended)

// students[index] = {
//     id: idToUpdate,
//     ...updateStudent,
// }

// subOption 2:(recommended)

// students[index] = {
//   ...students[index],
//   ...updateStudent,
// };

// console.log('Updated Students:',students);

// delete a student

// 1st Step:
// const idToDelete = "8685373a-3edf-44b8-9ebc-2bea8f99368c";
// students.splice(idToDelete, 1);
// students.splice(
//   students.findIndex((student) => student.id === idToDelete),
//   1
// );

// console.log('Deleted Students:',students);

// ! filter students

// const filteredStudents = students.filter((student) => student.age > 20);
// console.log('Filtered Students:',filteredStudents);

// ! traverse students

// using for loop
// for (let i = 0; i < students.length; i++) {
//     console.log(students[i]);
// }

// using forEach
// students.forEach((student) => {
//     console.log(student);
// });

// using for of
// for (const student of students) {
//     console.log(student);
// }

// using for in
// for (const key in students) {
//     console.log(students[key]);
// }

// using map
// students.map((student) => {
//     console.log(student);
// });

// using while
// let i = 0;
// while (i < students.length) {
//     console.log(students[i]);
//     i++;
// }

// using do while
// let i = 0;
// do {
//     console.log(students[i]);
//     i++;
// } while (i < students.length);

// using reduce
// students.reduce((acc, student) => {
//     console.log(student);
// }, 0);

// using every
// students.every((student) => {
//     console.log(student);
//     return true;
// });

// using some
// students.some((student) => {
//     console.log(student);
//     return true;
// });

// using find
// students.find((student) => {
//     console.log(student);
//     return true;
// });

// using findIndex
// students.findIndex((student) => {
//     console.log(student);
//     return true;
// });

const students = {
  "9e7ca0d8-4dbd-484e-9286-6ae8770077cb": {
    id: "9e7ca0d8-4dbd-484e-9286-6ae8770077cb",
    name: "John",
    age: 20,
    email: "john20@gmail.com",
  },
  "8685373a-3edf-44b8-9ebc-2bea8f99368c": {
    id: "8685373a-3edf-44b8-9ebc-2bea8f99368c",
    name: "Nairobi",
    age: 25,
    email: "nairobi@gmail.com",
  },
  "740c27f5-4808-4650-bf99-595e189bf6b5": {
    id: "740c27f5-4808-4650-bf99-595e189bf6b5",
    name: "Mike",
    age: 23,
    email: "mike23@gmail.com",
  },
  'f85d18d9-fd01-45b5-8025-ad6c25e5fd24': {
    id: 'f85d18d9-fd01-45b5-8025-ad6c25e5fd24',
    name: 'Notion',
    age: 19,
    email: 'notion19@gmail.com'
  }
};

/**
 * 1. Easily Traverse
 * 1.1 Get any thing if you know the id
 * 2. Filter
 * 3. Delete (medium)
 * 4. Update (medium)
 * 5. Create a new one (easy)
 */


// ! create a new student

const newStudent = {
  id: uuidv4(),
  name: "Toplie",
  age: 27,
  email: "toplie27@gmail.com",
};

students[newStudent.id] = newStudent;

// ! update a student



const matchId ='f85d18d9-fd01-45b5-8025-ad6c25e5fd24';
const updateStudent = {
  name: "Jonas",
  email: "jonas22@gmail.com",
};

students[matchId] = {
  ...students[matchId], // previous data save
  ...updateStudent, // new data add
};


// ! delete a student
// delete students[matchId];
// console.log(students);

// ! filter students


// ! traverse students

// using for in
// for (const key in students) {
//   console.log(students[key].name);
  // console.log(key);
// }


// console.log(Object.keys(students)); // return an array of keys 

// ! using forEach and Object.keys
// Object.keys(students).forEach((key) => {
//   const student = students[key];
//   console.log('Student name is',student.name, 'age is', student.age);
// });

// ! using forEach and Object.values

Object.values(students).forEach((student) => {
  console.log('Student name is',student.name, 'age is', student.age);
}
);


// * 1.1 Get any thing if you know the id

// const idToFind = "8685373a-3edf-44b8-9ebc-2bea8f99368c";

// console.log(students[idToFind]);