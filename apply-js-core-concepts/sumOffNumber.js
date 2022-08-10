
// let sum = 0;
// for(let i = 1; i <= 7; i++){
//     sum = sum +i;
//     console.log(i, sum);
// }

function sumOffNumber(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum = sum + i;
        console.log(i, sum);
    }
    return sum;
}

const sum = sumOffNumber(7)
console.log(sum);