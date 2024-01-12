const data = {
  classInfo: {
    classNo: "One",
    studentInfo: {
      studentOne: {
        id: "1",
        name: "Ashis",
        score: "A+",
        percentage: "97%",
      },
      studentTwo: {
        id: "1",
        name: "Ashis",
        score: "A+",
        percentage: "97%",
      },
    },
  },
};

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

Object.values(data.classInfo.studentInfo).reduce((accumulator, student) => {
  console.log(
    "Class No:",
    data.classInfo.classNo,
    "| ID:",
    student.id,
    "| Name:",
    student.name,
    "| Score:",
    student.score,
    "| Percentage:",
    student.percentage
  );
  return accumulator; // Not accumulating a value, just iterating
}, []);
