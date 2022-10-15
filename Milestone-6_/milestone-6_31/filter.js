const numbers = [12, 45, 47, 64, 65, 17, 5, 6, 65];
const bigNums = numbers.filter(number => number > 20);
// console.log(bigNums);

const products = [
    { id: 1, name: "laptop", price: 40000 },
    { id: 1, name: "pc", price: 47000 },
    { id: 1, name: "moble", price: 20000 },
    { id: 1, name: "node book", price: 80000 },
    { id: 1, name: "iPhone", price: 90000 },
  ];

  const expensive = products.filter(product => product.price > 55000)
  console.log(expensive);