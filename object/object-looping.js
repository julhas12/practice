//array vs object
var shoppingItems = ["books", "sunglass", "shoes", "pen"];

var friendsAge = [12, 12, 25, 20];
var friendsAge = {
    fahim:22,
    prottoy:23,
    saikat:24,

}

var shoppingCart = {
    books: 3,
    sunglass: 1,
    keybord: 5,
    mouse: 1,
    pen: 25,
    shoes: 2
  }

  const keys =Object.keys(shoppingCart);
  console.log(keys);

  const values = Object.values(shoppingCart)
  console.log(values);

  for(var i = 0; i < keys.length; i++){
      var propertyName = keys[i];
      var propertyValue = shoppingCart[propertyName];
    //   console.log(propertyName, propertyValue);
  }

for(var propertyName in shoppingCart){
    const value = shoppingCart[propertyName];
    console.log(propertyName, value)
}