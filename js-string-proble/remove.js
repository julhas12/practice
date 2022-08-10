const names = ['abul', 'kabul','babul', 'cabul', 'babul', 'ebul', 'kabul', 'babul', 'babul', 'abul', 'gabul', 'cabul', 'abul'];
function remiveDubplicate (names){
    const unique = [];
    for(let i = 0; i < names.length; i++){
        const name = names[i]
        console.log(name);
        if(unique.includes(name) === false ){
            unique.push(name);
        }
    }
    return unique
}

const uniqName = remiveDubplicate(names);
console.log(uniqName)