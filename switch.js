// let tracffickLigth = prompt("Input a valid checking");
// switch (tracffickLigth) {
//     case "red":
//         alert("stop");
//     break;
//     case "yellow":
//         alert("ready");
//     break;
//     case "green":
//         alert("go");
//     break;
//     default:
//         alert("Invalid input");
// }



// simple calculaetor
let num1 = prompt("Enter num1: ");
let op = prompt("Enter operator: ");
let num2 = prompt("Enter num2: ");


let n1 = Number(num1);
let n2 = Number(num2);

let result;

switch (op) {
    case "+":
        result = n1 + n2;
        alert(result);
        break;
    case "-":
        result = n1 + n2;
        alert(result);
        break;
    case "*":
        result = n1 * n2;
        break;
    case "/":
        result = n1 / n2;
        alert(result);
    case "%":
        result = n1 % n2;
        break;
    default: 
        alert("Invalid");
}

