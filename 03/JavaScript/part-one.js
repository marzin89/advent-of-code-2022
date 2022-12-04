const fs = require('fs');
let prioritySum = 0;
const alphabetLower = 'abcdefghijklmnopqrstuvwxyz'.split('');
const alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) return;

    const inputArr = data.split('\r\n');

    inputArr.forEach((item) => {
        checkInputItem(item);
    });

    console.log(`The sum of all priorities is ${prioritySum}`);
});

function checkInputItem(item) {
    const length = item.length;
    const index = length / 2;
    const firstPart = item.slice(0, index).split('');
    const secondPart = item.slice(index).split('');

    for (let i = 0; i < firstPart.length; i++) {
        const letter = firstPart[i];

        if (secondPart.includes(letter)) {
            calculatePriority(letter);
            return;
        
        } else continue;
    }
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