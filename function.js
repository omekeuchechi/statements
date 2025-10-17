let userName = "John Doe";



addNum(2, 2)

function add(num1, num2) {
    return num1 + num2;
}

console.log(add(2, 2))


function addNum(num1, num2) {
    console.log(num1 + num2);
}

// Arrow function
const substaction = (num1, num2) => {
    console.log(num1 - num2);
};

const callName = userName => console.log(`My Name is ${userName}`)

const greating = (name, g) => {
    console.log("Good " + g + " " + name);
}

const secondGreating = (name, g) => {
    console.log(`Good ${g} ${name}`);
}

secondGreating("James", "Evening");
greating("John Doe", "Morning");


substaction(4, 2);


addNum(2, 2)
console.log(add(5, 10));

const calculatorProgram = (num1, num2, op, callback) => {
  let result;
  switch (op) {
    case '+': result = num1 + num2; break;
    case '-': result = num1 - num2; break;
    case '*': result = num1 * num2; break;
    case '/': result = num1 / num2; break;
    default: throw new Error('Unsupported operator');
  }
  console.log(callback(result));
};

// Example usage:
calculatorProgram(10, 20, "+", (res) => res); 


// Dark and light mode 
// response message in form