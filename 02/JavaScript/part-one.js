let totalScore = 0;
const fs = require('fs');
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) return;

    const inputArr = data.split('\r\n');

    inputArr.forEach((item) => {
        const opponent = item.slice(0, 1);
        const me = item.slice(2);

        playRound(opponent, me);
    })

    console.log(`Total score: ${totalScore}`);
});

function playRound(opponent, me) {
    switch(opponent) {
        case 'A':
            calculateScoreRock(me);
        break;

        case 'B':
            calculateScorePaper(me);
        break;

        case 'C':
            calculateScoreScissors(me);
        break;
    }
}

function calculateScoreRock(me) {
    switch(me) {
        case 'X':
            totalScore += 4;
        break;

        case 'Y':
            totalScore += 8;
        break;

        case 'Z':
            totalScore += 3;
        break;
    }
}

function calculateScorePaper(me) {
    switch(me) {
        case 'X':
            totalScore += 1;
        break;

        case 'Y':
            totalScore += 5;
        break;

        case 'Z':
            totalScore += 9;
        break;
    }
}

function calculateScoreScissors(me) {
    switch(me) {
        case 'X':
            totalScore += 7;
        break;

        case 'Y':
            totalScore += 2;
        break;

        case 'Z':
            totalScore += 6;
        break;
    }
}