const users = [{ id: 1, name: "Bithi", study: "student" }];
// console.log(users[0].name);

const data = {
  count: 5000,
  data: [
    { id: 1, name: "butterfly", ralesion: "my wife" },
    { id: 2, name: "butterfly", ralesions: "my wife" },
  ],
};
const firstRaletion = data.data[0].ralesion;
// console.log(firstRaletion);

const user = {
  id: 5001,
  name: "bithi",
  address: {
    street: {
      House: "18/A bow bazar kalbart",
      Flat: "2-AB",
    },
    postOffice: "jhigatula",
    city: "Dhaka",
  },
};
const userCity = user.address.city;
console.log(userCity);
