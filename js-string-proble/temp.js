let first = 5;
let second = 7;
console.log(first, second);
//this is wrong approach
// first = second;
// second = first;

/* approache: 1
const tem = first;
first = second;
second = tem; */
  
//approach: 2
[first, second] = [second,first];
console.log(first, second)