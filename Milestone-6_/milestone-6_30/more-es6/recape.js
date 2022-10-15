// 1.  var let const

//  break up with var

const numbers = [12, 54, 34, 56];
let salaly = 15000;
salaly = 20000;

// 2. default
function calculateSalary(salaly, tax = 0.25, bonus = 0) {
  const remaining = salaly - salaly * tax;
  const total = remaining + bonus;
  return total;
}

//  3. template string

const elementHTML = `
<div>
<h3>Name:</h3>
<p>Address:</p>
<p>salary:${calculateSalary(15000, 0, 0)}</p>
<p>Others: ${numbers[2]}</p>
</div>
`;

// 4. arrow function

const doubleIt = (x) => x * 2;
const calculateSalary2 = (salaly, tax, bonus) => salaly - salaly * tax + bonus;

// 5.spread

const ages = [24, 19, 15, 13];
const newAges = [...ages, 424, 20, 18, 22];

//  destructuring
const { Bith, julhas, shanta, ...B } = {
  Bith: 19,
  julhas: 24,
  shanta: 15,
  name: "bithuka",
};
const [a, b, ...r] = [19, 24, 15, 34];
