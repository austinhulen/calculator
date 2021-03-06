const displayOutput = document.querySelector('#displayTxt');
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
    return changeToExponetial(answer); 
}

function addToDisplay (input) {
    if (displayStorage.length < 12){ //doesn't allow more than 12 digits in the display.
        displayStorage += input; 
    }
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

function equalSignCheck() {
    if(input.length == 1 && operator.length == 1){ // Doesn't let the user hit equal until they typed at least one number and an operator. 
        input.push(displayStorage);
        let tempInput1 = parseFloat(input.shift());
        let tempInput2 = parseFloat(input.shift());
        if (isNaN(tempInput2)){  //Test if the user didn't enter another number before hitting equals
            tempInput2 = tempInput1; //If so then it will calculate the number they entered twice with the operator. EX. 5 + =  ---> 5 + 5 = 10
        }
        displayStorage = operate(operator.shift(), tempInput1, tempInput2);
        displayOutput.innerText = displayStorage;
    }
}

function changeToExponetial(input) {
    let temp = input.toString().length; // convert the number to a string
    if(temp > 12) { // if it is more than 12 characters then return in Exp form. 
        return input.toExponential(3);
    }
    else {
        return input;
    }
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

equalButton.addEventListener('click', () => equalSignCheck());

clearButton.addEventListener('click', () => clearAll());

document.addEventListener('keypress', function(e) {
    console.log(e.keyCode);
    switch (e.keyCode) {
        case 13: 
            e.preventDefault();
            document.querySelector('#equals').click();
            break;
        case 42: 
            document.querySelector('#multiply').click();
            break;
        case 43: 
            document.querySelector('#plus').click();
            break;
        case 45: 
            document.querySelector('#minus').click();
            break;
        case 46: 
            document.querySelector('#period').click();
            break;
        case 47: 
            document.querySelector('#divide').click();
            break;
        case 48: 
            document.querySelector('#zero').click();
            break;
        case 49: 
            document.querySelector('#one').click();
            break;
        case 50: 
            document.querySelector('#two').click();
            break;
        case 51: 
            document.querySelector('#three').click();
            break;
        case 52: 
            document.querySelector('#four').click();
            break;
        case 53: 
            document.querySelector('#five').click();
            break;
        case 54: 
            document.querySelector('#six').click();
            break;
        case 55: 
            document.querySelector('#seven').click();
            break;
        case 56: 
            document.querySelector('#eight').click();
            break;
        case 57: 
            document.querySelector('#nine').click();
            break;
        case 61: 
            e.preventDefault();
            document.querySelector('#equals').click();
            break;
    }
});


