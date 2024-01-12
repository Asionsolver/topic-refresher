// const data = {
//   classInfo: {
//     classNo: "One",
//     studentInfo: {
//       studentOne: {
//         id: "1",
//         name: "Ashis",
//         score: "A+",
//         percentage: "97%",
//       },
//       studentTwo: {
//         id: "1",
//         name: "Ashis",
//         score: "A+",
//         percentage: "97%",
//       },
//     },
//   },
// };

// const {
//   classInfo: {
//     classNo,
//     studentInfo: {
//       studentOne: { id, name, score, percentage },
//       studentTwo: { id1, name1, score1, percentage1 },
//     },
//   },
// } = data;
// console.log(classNo);
// console.log(name);

// Object.values(data.classInfo.studentInfo).reduce((accumulator, student) => {
//   console.log(
//     "Class No:",
//     data.classInfo.classNo,
//     "| ID:",
//     student.id,
//     "| Name:",
//     student.name,
//     "| Score:",
//     student.score,
//     "| Percentage:",
//     student.percentage
//   );
//   return accumulator; // Not accumulating a value, just iterating
// }, []);


const data = {
  classInfo: {
    classOne: {
      classNo: "One",
      studentInfo: {
        studentOne: {
          id: "1",
          name: "Ashis",
          score: "A+",
          percentage: "97%",
        },
        studentTwo: {
          id: "2",
          name: "Riya",
          score: "A",
          percentage: "95%",
        },
      },
    },
    classTwo: {
      classNo: "Two",
      studentInfo: {
        studentOne: {
          id: "3",
          name: "Soykot",
          score: "A+",
          percentage: "97%",
        },
        studentTwo: {
          id: "4",
          name: "Nabil",
          score: "A+",
          percentage: "96%",
        },
      },
    },
  },
};

// Iterate through each class:
Object.entries(data.classInfo).forEach(([className, classData]) => {
  console.log(`Class: ${className}`);

  // Access student information directly:
  Object.values(classData.studentInfo).forEach((student) => {
    console.log(
      "Class No:",
      classData.classNo,
      "| ID:",
      student.id,
      "| Name:",
      student.name,
      "| Score:",
      student.score,
      "| Percentage:",
      student.percentage
    );
  });
});