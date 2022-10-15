const numbers = [2, 8, 6, 3];

function getDoubled(numbers) {
  const output = [];
  for (const number of numbers) {
    const doubled = doubleIt(number);
    output.push(doubled);
  }
  return output;
}
function doubleItOld(num) {
  return number * 2;
}

const doubleIt = (num) => num * 2;

const makeDouble = numbers.map(doubleIt);
const makeDoubleDirect = numbers.map((num) => num * 2);
const makeDouble2 = numbers.map((x) => x * 2);
console.log(makeDoubleDirect);

const fiveTime = [1, 2, 3, 4, 5, 6].map((x) => x * 5);
console.log(fiveTime);

const result = getDoubled(numbers);
console.log(result);
console.log(makeDouble);
