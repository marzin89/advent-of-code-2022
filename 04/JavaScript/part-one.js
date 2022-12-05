const fs = require('fs');
let count = 0;
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) return;

    const inputArr = data.split('\r\n');

    inputArr.forEach((item) => {
        findOverlap(item);
    });

    console.log(`${count} assignment pairs fully overlap`);
});

function findOverlap(item) {
    const firstPair = item.slice(0, item.indexOf(','));
    const secondPair = item.slice((item.indexOf(',') + 1));
    const firstPairNumberOne = Number(firstPair.slice(0, firstPair.indexOf('-')));
    const firstPairNumberTwo = Number(firstPair.slice((firstPair.indexOf('-') + 1)));
    const secondPairNumberOne = Number(secondPair.slice(0, secondPair.indexOf('-')));
    const secondPairNumberTwo = Number(secondPair.slice((secondPair.indexOf('-') + 1)));

    if (firstPairNumberOne >= secondPairNumberOne && firstPairNumberTwo <= 
        secondPairNumberTwo) {
            count += 1;
        
    } else if (secondPairNumberOne >= firstPairNumberOne && secondPairNumberTwo <=
        firstPairNumberTwo) {
            count += 1;
    }
}