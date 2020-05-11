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
    switch (operator) {
        case '+': 
            add(a, b);
            break;
        case '-': 
            subtract(a, b);
            break;
        case '*':
            multiply(a, b);
            break;
        case '/': 
            divide(a,b);
            break;
        default: 
            'Error, command not recongnized.'
            break;
    }
}