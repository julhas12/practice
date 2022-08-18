//Problem:1  radianToDegree

function radianToDegree(radian) {
    const degree = radian * (180 / Math.PI)
    return degree;
}
const result = radianToDegree(10);
const finalResult = result.toFixed(2)
console.log(finalResult);

// Problem 2:
function isJavaScriptFile(String) {
    const fileName = String.slice(String.length - 3)
    if (fileName === '.js') {
        return true
    } else {
        return false
    }
}
const file = isJavaScriptFile('app.js')
console.log(file)

// Problem 3
function oilPrice(leterDesigel, letterPartol, letterOcten){
    const desigelPrice = 114
    const patrolPrice = 130
    const octenPrice = 135

    const getDesigelPrice = leterDesigel * desigelPrice
    const getPatrolPrice = letterPartol * patrolPrice
    const getOctenPrice = letterOcten * octenPrice
    
    const getTotalOilPrice = getDesigelPrice + getPatrolPrice + getOctenPrice
    return getTotalOilPrice
}
console.log(oilPrice(0,2,3))

// Problme  5
 const myFriend = {name: 'julhas', friend: 'fahim'}
 const myFriend2 = {name: 'fahim', friend: 'julhas'}
 function isBestFriend(myFriend,myFriend2){
    if(myFriend.name === myFriend.friend && myFriend2.name === myFriend2.friend){
        return true
    }else{
        return false
    }
 }
 console.log(isBestFriend(myFriend,myFriend2))
