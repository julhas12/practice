const user = { id: 1, name: "bithi", profetion: "student" };
// javaScript Object Notation (JSON)
const stringify = JSON.stringify(user);
// console.log(user);
// console.log(stringify);

const shop = {
  address: {
    owner: "Bithi",
    street: "30 feet ",
    city: "dhaka",
    country: "BD",
  },
  product: ["laptop", "monitor", "mic"],
  revenue: 45000,
  isOpen: true,
  isNew: false,
};

console.log(shop);
const shopJson = JSON.stringify(shop);
console.log(shopJson);

const shopOb = JSON.parse(shopJson);
console.log(shopOb);
