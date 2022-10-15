const person = "adam sandler";
const person2 = "ben white";
const person3 = `donal trump`;

const multiLine =
  "first line text \n" +
  "first line text \n" +
  "second line text \n" +
  "third line text \n" +
  "fourth line text \n";
// console.log(multiLine);

const newMultiLine = `
first line text
second line text
third line text
fourth line text 
`;
// console.log(newMultiLine);

const a = 20;
const b = 30;

const nums = [78, 98, 45, 12, 6, 444];
const summary = "sum of " + a + " and" + b + " is" + (a + b);
// console.log(summary);
const newSummary = `sum of ${a} and ${b} is: ${a + b}`;
console.log(newSummary);
