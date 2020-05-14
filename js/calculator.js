const displayOutput = document.querySelector('#display');
const numberedButtons = document.querySelectorAll('.number.btn');
const operatorButtons = document.querySelectorAll('.operator.btn');
const equalButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear');
let displayStorage = '';
let operator = [];
let input = [];
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
        case 'x':
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

//checkToOperate will check if there has been enough inputs entered to give a solution. Ex. needs to have 2 operators in the array. 
function checkToOperate() {
    if(operator.length == 2){
        let tempInput1 = parseInt(input.shift());
        let tempInput2 = parseInt(input.shift());
        input.push(operate(operator.shift(), tempInput1, tempInput2));
        displayOutput.innerText = input[0];
        displayStorage = input[0];
    }
}

function clearAll() {
    displayStorage = '';
    operator = [];
    input = [];
    displayOutput.innerText = '0'; 
}

function checkForCurrentDecimal() {
    return displayStorage.indexOf('.');
}

numberedButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        //Checks to see if the user entered a decimal and checks to make sure a decimal hasn't been entered for the current input
        if(e.toElement.innerText === '.' && checkForCurrentDecimal() !== -1){
            return;
        }
        addToDisplay(e.toElement.innerText);
    });
});

operatorButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
            operator.push(e.toElement.innerText);
            input.push(displayStorage);
            displayStorage = '';
            checkToOperate();
    });
});

equalButton.addEventListener('click', function() {
    if(input.length == 1 && operator.length == 1){ // Doesn't let the user hit equal until they typed at least one number and an operator. 
        input.push(displayStorage);
        let tempInput1 = parseFloat(input.shift());
        let tempInput2 = parseFloat(input.shift());
        if (isNaN(tempInput2)){  //Test if the user didn't enter another number before hitting equals
            tempInput2 = tempInput1; //If so then it will calculate the number they entered twice with the operator. EX. 5 + =  ---> 5 + 5 = 10
        }
        displayStorage= operate(operator.shift(), tempInput1, tempInput2);
        displayOutput.innerText = displayStorage;
    }
});

clearButton.addEventListener('click', () => clearAll());


