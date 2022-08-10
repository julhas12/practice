var shoppingCart = {
    books:3,
    sunglass:1,
    keybord:5,
    mouse:1,
    pen:25
}

// when you know the specific property name, use dot notation  to get the property values
var penCount =shoppingCart.pen;
// alternative system
// when you know the specific property name, use dot notation  to get the property values
var penCount2 = shoppingCart['pen'];

var propertyName = 'books';
var propertyvalue = shoppingCart[propertyName]
// console.log(propertyName, propertyvalue);

var properties = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);
// console.log(properties);
// console.log(propertyValues);
console.log(shoppingCart);
// console.log(penCount2);


// set proprty values
shoppingCart.mouse = 15;

shoppingCart['mouse'] = 30;
console.log(shoppingCart);