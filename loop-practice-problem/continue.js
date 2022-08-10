var numbers = [45, 87, 23, 58, 30, 24, 78,];

for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 50){
        continue
    }
    console.log(number);
}