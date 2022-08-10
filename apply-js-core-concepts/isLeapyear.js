

function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
    }
    return false;
}

const myYearIsLeapYear = isLeapYear(1933);
console.log(myYearIsLeapYear);
const myYearIsNotLeapYear = isLeapYear(1960);
console.log(myYearIsNotLeapYear);