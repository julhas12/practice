/* function getSum(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum);
    }
    return sum;
}
const myNumbers = [12, 65, 78, 32,45,91 ]
getSum(myNumbers); */

function getSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        // console.log(index, element, sum);
    }
    return sum;
}

function getOddNumber(numbers) {
    const oddNumber =[]
    for (let i = 0; i < numbers.length; i++){
       const index = i;
       const element = numbers[index];
       if(element % 2 !== 0){
            console.log(index, element);
            oddNumber.push(element)
       }
    }
    return oddNumber;
}
const myNumbers = [12, 65, 45, 78, 32, 45, 91]
const oddNumber = getOddNumber(myNumbers);
console.log(oddNumber);
const oddNumberSum = getSum(oddNumber);

console.log('odd number sum', oddNumberSum);