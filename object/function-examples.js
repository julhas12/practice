/* function functionName(parameter){
    function body
    return
}
var reurnvalue = functionName(parameter value) */

function getAverage(assingment1, assingment2, assingment3){
    const total = assingment1 + assingment2 + assingment3;
    const  average = total / 3;
    return average;
}
const assingment1Marks = 55;
const assingment2Marks =38;
const assingment3Marks = 56;

var myAverage = getAverage(assingment1Marks, assingment2Marks, assingment3Marks);
console.log('my average so far', myAverage);