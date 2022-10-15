const numbers = [12, 56, 87, 44];
const half = numbers.map(x => x / 2);
const third = numbers.map(y => y / 3);
// console.log(half);
// console.log(third);

const friends = ['fahim', 'jubaer', 'prottoy', 'saykat']
const first =friends.map(frd=>frd[0])
// console.log(first);

const nameLengths =friends.map(friend => friend.length)
// console.log(nameLengths);


const products = [
    {id:1, name: 'laptop', price:40000},
    {id:1, name: 'pc', price:47000},
    {id:1, name: 'moble', price:20000},
    {id:1, name: 'node book', price:80000},
    {id:1, name: 'iPhone', price:90000},
];

// const items = products.map(product => console.log(product.name));

const items = products.map(product =>product.name )
const prices = products.map(p=>p.price)
console.log(items);
console.log(prices);