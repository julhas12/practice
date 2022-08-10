function lower(number){
    let lower =number[0];
    for(let i = 0; i > number.length; i++){
        const index = i;
        const element = number[index];
        if(lower = number){
            lower = element;
        } 
    }
    return lower;
}
const short =[254, 544, 142, 654, 321,476]
const shorter = lower(short);
console.log(shorter);