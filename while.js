let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

const studentScore = [80, 90, 70, 60, 50];

let highestScore = studentScore[0];
let position = 0;

while (position < studentScore.length) {
    if (studentScore[position] > highestScore) {
        highestScore = studentScore[position];
    }
    position++;
}

console.log("The highest score is " + highestScore + " at position " + position);