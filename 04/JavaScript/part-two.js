const fs = require('fs');
let count = 0;
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) return;

    const inputArr = data.split('\r\n');

    inputArr.forEach((item) => {
        findAllOverlaps(item);
    });

    console.log(`${count} assignment pairs overlap`);
});

function findAllOverlaps(item) {
    const firstPair = item.slice(0, item.indexOf(','));
    const secondPair = item.slice((item.indexOf(',') + 1));

    const firstPairNumberOne = Number(firstPair.slice(0, firstPair.indexOf('-')));
    const firstPairNumberTwo = Number(firstPair.slice((firstPair.indexOf('-') + 1)));
    const secondPairNumberOne = Number(secondPair.slice(0, secondPair.indexOf('-')));
    const secondPairNumberTwo = Number(secondPair.slice((secondPair.indexOf('-') + 1)));

    let firstPairArr = [];
    let secondPairArr = [];

    firstPairArr = createFirstPairArr(firstPairNumberOne, firstPairNumberTwo);
    secondPairArr = createSecondPairArr(secondPairNumberOne, secondPairNumberTwo);
    
    if (firstPairArr.length > secondPairArr.length) {
        compareFirstPairArrLonger(firstPairArr, secondPairArr);
    
    } else if (secondPairArr.length > firstPairArr.length) {
        compareSecondPairArrLonger(firstPairArr, secondPairArr);
    
    } else {
        compareFirstPairArrLonger(firstPairArr, secondPairArr);
    } 
}

function createFirstPairArr(numberOne, numberTwo) {
    let firstPairArr = [];

    if (numberOne == numberTwo) {
        firstPairArr.push(numberOne);
    
    } else {
        for (let i = numberOne; i <= numberTwo; i++) {
            firstPairArr.push(i);
        }
    }

    return firstPairArr;
}

function createSecondPairArr(numberThree, numberFour) {
    let secondPairArr = [];

    if (numberThree == numberFour) {
        secondPairArr.push(numberThree);

    } else {
        for (let i = numberThree; i <= numberFour; i++) {
            secondPairArr.push(i);
        }
    }

    return secondPairArr;
}

function compareFirstPairArrLonger(firstPairArr, secondPairArr) {
    for (let i = 0; i < firstPairArr.length; i++) {
        if (secondPairArr.includes(firstPairArr[i])) {
            count += 1;
            break;
        }
    }
}

function compareSecondPairArrLonger(firstPairArr, secondPairArr) {
    for (let i = 0; i < secondPairArr.length; i++) {
        if (firstPairArr.includes(secondPairArr[i])) {
            count += 1;
            break;
        }
    }
}