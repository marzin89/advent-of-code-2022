const calorieArr = [];
const fs = require('fs');
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) return;

    let inputArr = data.split('\r\n');
    
    inputArr.forEach((item, index) => {
        if (!index) {
            countCalories(inputArr.slice(0, inputArr.indexOf('')));

        } else if (item == '') {
            countCalories(inputArr.slice((index + 1), inputArr.indexOf('', (index + 1))));
        }
    });

    let elf = calorieArr.indexOf(Math.max.apply(null, calorieArr));
    let calories = calorieArr[elf];
    console.log(`Elf ${elf + 1} is carrying ${calories} calories`);
});

function countCalories(itemArr) {
    let totalCalories;

    itemArr.forEach((item) => {
        if (!totalCalories) {
            totalCalories = Number(item);
        
        } else {
            totalCalories += Number(item);
        }
    })

    calorieArr.push(totalCalories);
}
