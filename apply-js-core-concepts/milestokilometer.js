function milesToKilometer(miles){
    const km = miles *1.609;
    return km;
}

const myOffice = 5;
const myMiles = milesToKilometer(myOffice);
console.log(myMiles);