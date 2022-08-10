function isEven(number) {
  const remainder = number % 2;
  // console.log(remainder);
  if (remainder === 0) {
    return true;
  } else {
   return false;
  }
}

const myNumber= isEven(303);
console.log(myNumber);
const harNumber= isEven(800);
// console.log(harNumber);
