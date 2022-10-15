const max = Math.max(64, 45, 78, 10, 45, 94, 65);
// console.log(max);

const number = [64, 45, 94, 65];
const largest = Math.max(...number);
// console.log(...number);
// console.log(largest);

const number2 = [...number];
number.push(99);
number2.push(644);
console.log(number);
console.log(number2);

const number3 = [...number];


const number4 = [12,54,64,...number,4,54];
