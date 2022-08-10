const phones = [
    {name: 'oppo', camera:16, Storage:'32gb', price:36000, color:'white'},
    {name: 'nokia', camera:15, Storage:'32gb', price:10000, color:'white'},
    {name: 'samsung', camera:20, Storage:'32gb', price:20000, color:'white'},
    {name: 'walton', camera:18, Storage:'32gb', price:30000, color:'white'},
    {name: 'mi', camera:12, Storage:'32gb', price:25000, color:'white'},
    {name: 'iPhone', camera:30, Storage:'164gb', price:13000, color:'white'},
    {name: 'relme', camera:48, Storage:'32gb', price:35000, color:'white'},
]
function cheapestPhone(phones){
       let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i]
       if(phone.price < cheapest.price){
           cheapest = phone
       }
    }
    return cheapest
}
const mySelection = cheapestPhone(phones)
console.log(mySelection)