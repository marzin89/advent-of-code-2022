let totalScore = 0;
let me;
const fs = require('fs');
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) return;

    const inputArr = data.split('\r\n');

    inputArr.forEach((item) => {
        const opponent = item.slice(0, 1);
        const result = item.slice(2);

        playRound(opponent, result);
    })

    console.log(`Total score: ${totalScore}`);
});

function playRound(opponent, result) {
    switch(result) {
        case 'X':
            calculateScoreLose(opponent);
        break;

        case 'Y':
            calculateScoreDraw(opponent);
        break;

        case 'Z':
            calculateScoreWin(opponent)
        break;
    }
}

function calculateScoreWin(opponent) {
    switch(opponent) {
        case 'A':
            me = 'Y';
            totalScore += 8;
        break;

        case 'B':
            me = 'Z';
            totalScore += 9;
        break;

        case 'C':
            me = 'X';
            totalScore += 7;
        break;
    }
}

function calculateScoreDraw(opponent) {
    switch(opponent) {
        case 'A':
            me = 'X';
            totalScore += 4;
        break;

        case 'B':
            me = 'Y';
            totalScore += 5;
        break;

        case 'C':
            me = 'Z';
            totalScore += 6;
        break;
    }
}

function calculateScoreLose(opponent) {
    switch(opponent) {
        case 'A':
            me = 'Z';
            totalScore += 3;
        break;

        case 'B':
            me = 'X';
            totalScore += 1;
        break;

        case 'C':
            me = 'Y'
            totalScore += 2;
        break;
    }
}