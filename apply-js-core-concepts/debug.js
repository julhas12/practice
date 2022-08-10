function getfactorial(number){
    let factorial = 1;
    for(let i = 1; i <= number; i++){
        factorial = factorial * i;
    }
    return factorial;
}

const factorial = getfactorial(8);
console.log(factorial);