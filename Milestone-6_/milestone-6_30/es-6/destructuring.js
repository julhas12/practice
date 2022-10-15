const fish = {
  name: "King Hilsha",
  address: "chandpur",
  color: "solbar",
  phone: "0187274894",
  pirce: 4000,
};

const phone = fish.phone;
const color = fish.color;
const pirce = fish.pirce;

/* console.log(phone);
console.log(phone);
console.log(phone); */

const { age, name, relations } = {
  name: "Bithi",
  age: 19,
  relations: "MY wife",
};
console.log(relations);

const { address } = fish;
// console.log(address);

const [first, second, third, four, five] = [45, 8, 6, 68, 645];
// console.log(first, second, third, four, five);

const nayoks = ["sakib", "baooi", "raj"];
const [ling, last, notun] = nayoks;
// console.log(notun);

function getName() {
  return ["Bithika", "Bithi"];
}
const [jaan, kolija] = getName();
console.log(kolija);
