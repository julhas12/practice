const student = {
  name: "Bithi",
  age: 19,
  CLASS: "honors 1st year",
  marks: {
    mathe: 65,
    physics: 48,
    chemistry: 00,
  },
};

const marks = student.marks;
const math = student.marks.math;

const chemistry = student["marks"]["chemistry"];
const subject = "math";
const subjectMarkks = student.marks[subject];
const marks2 = student.marks [subject]
console.log(marks2);
