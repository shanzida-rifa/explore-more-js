// 1.chair=3cft
// 2.table=10cft
// 3.bed=50cft

function woodCalculator(chairQuant, tableQuant, bedQuant) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    const chairWood = chairQuant * perChairWood;
    const tableWood = tableQuant * perTableWood;
    const bedWood = bedQuant * perBedWood;
    const totalWood = chairWood + tableWood + bedWood;
    // console.log(chairQuant, tableQuant, bedQuant);
    // console.log(chairWood, tableWood, bedWood);
    return totalWood;
}
const totalWood = woodCalculator(2, 2, 5);
console.log(totalWood);