function woodCalculator(ChairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = ChairQuantity * perChairWood
    const tableWood = tableQuantity * perTableWood
    const bedWood = bedQuantity * perBedWood
    // console.log(ChairQuantity, tableQuantity, bedQuantity)
    const totalWood =chairWood + tableWood + bedWood;
    return totalWood
}

const totulWood = woodCalculator(2, 2 , 5);
console.log(totulWood);