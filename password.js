const formBody = document.getElementById("check-pass-form");
const inputPass = document.createElement("input");
const btnElement = document.createElement("button");
const msg = document.getElementById("msg");

// input creation
inputPass.type = "password";
inputPass.id = "password";
inputPass.placeholder = "***";


formBody.appendChild(inputPass);

// btn creation
btnElement.type = "submit";
btnElement.id = "submit-btn";
btnElement.innerText = "Submit";

formBody.appendChild(btnElement);


const checkPassword = (input) => {

    let pass = input.value;

    console.log(input.value);

    if (input.value == "" || input.value == undefined) {
        // msg.innerText = "Field is empty";    
        return resMsg(msg, "Field is required", "error");
    }

    if (input.value.length < 8) {
        return resMsg(msg, "Week password", "error");
    }

    if (input.value.length >= 8) {
        return resMsg(msg, "Strong password", "success");
    }
    
}

const resMsg = (errorElement, errorMsg, errorColor) => {
    if (errorColor === "error") {
        errorElement.innerText = errorMsg;
        errorElement.classList.add("error"); 
    } else if(errorColor === "success") {
        errorElement.innerText = errorMsg;
        errorElement.classList.add("success");
    } else {
        errorElement.innerText = "internal server error";
    }
    setTimeout(() => {
        errorElement.style.display = "none";
    }, 1000);

    errorElement.style.display = "block";
}

let dot = "ok";

btnElement.addEventListener('click', () => checkPassword(inputPass));