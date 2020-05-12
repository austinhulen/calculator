const displayOutput = document.querySelector('#display');
const numberedButtons = document.querySelectorAll('.number.btn');
let displayStorage = '';
function add (num1, num2) {
    return num1 + num2;
}

function subtract (num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    return num1 / num2; 
}

function operate (operator, a, b) {
    let answer;
    switch (operator) {
        case '+': 
            answer = add(a, b);
            break;
        case '-': 
            answer = subtract(a, b);
            break;
        case '*':
            answer = multiply(a, b);
            break;
        case '/': 
            answer = divide(a, b);
            break;
        default: 
            answer = 'Error, command not recongnized.'
            break;
    }
    return answer; 
}

function addToDisplay (input) {
    displayStorage += input; 
    displayOutput.innerText = displayStorage;

}

numberedButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        addToDisplay(e.toElement.innerText);
    });
});
