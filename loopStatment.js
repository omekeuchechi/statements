const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);
// console.log(numbers[4]);
// console.log(numbers[5]);
// console.log(numbers[6]);
// console.log(numbers[7]);
// console.log(numbers[8]);
// console.log(numbers[9]);

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Find and change the highest score in an array of student Score
const studentScore = [80, 90, 70, 60, 50];

// highest score
let highestScore = studentScore[0];

// position
let position = 0;

for (let i = 0; i < studentScore.length; i++) {
    if (studentScore[i] > highestScore) {
        highestScore = studentScore[i];
        position = i;
    }
}

console.log("The highest score is " + highestScore + " at position " + position);

// change the highestScore to a new value
studentScore[position] = 3;
console.log(studentScore);

