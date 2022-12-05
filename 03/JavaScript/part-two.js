const fs = require('fs');
let prioritySum = 0;
const alphabetLower = 'abcdefghijklmnopqrstuvwxyz'.split('');
const alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) return;

    const inputArr = data.split('\r\n');

    for (let i = 0; i < inputArr.length; i++) {
        if (i == 0 || i % 3 == 0) {
            const firstRucksack = inputArr[i];
            const secondRucksack = inputArr[i + 1];
            const thirdRucksack = inputArr[i + 2];

            findTheBadge(firstRucksack, secondRucksack, thirdRucksack);
        
        } else continue;
    }

    console.log(`The sum of all priorities is ${prioritySum}`);
});

function findTheBadge(firstRucksack, secondRucksack, thirdRucksack) {
    const firstRucksackArr = firstRucksack.split('');
    const secondRucksackArr = secondRucksack.split('');
    const thirdRucksackArr = thirdRucksack.split('');
    const rucksackArr = firstRucksackArr.concat(secondRucksackArr, thirdRucksackArr);
    let letter;

    for (let i = 0; i < rucksackArr.length; i++) {
        const item = rucksackArr[i];

        if (firstRucksackArr.includes(item) && secondRucksackArr.includes(item)
            && thirdRucksackArr.includes(item)) {
                
                letter = item;

                calculatePriority(letter);
        }

        if (letter) break;
    };
}

function calculatePriority(letter) {
    const uppercase = /^[A-Z]/;
    const lowercase = /^[a-z]/;
    let index;

    if (letter.match(lowercase)) {
        index = alphabetLower.indexOf(letter) + 1;
    
    } else if (letter.match(uppercase)) {
        index = alphabetUpper.indexOf(letter) + 27;
    }

    prioritySum += index;
}