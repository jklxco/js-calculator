add = (a, b) => a + b;
subtract = (a, b) => a - b;
multiply = (a, b) => a * b;
divide = (a, b) => a / b;

function operate(calcArray) {
    let operator = calcArray[1];
    let num1 = calcArray[0];
    let num2 = calcArray[2];

    return (operator === '+') ? add(num1, num2)
        : (operator === '-') ? subtract(num1, num2)
        : (operator === '*') ? multiply(num1, num2)
        : (operator === '/') ? divide(num1, num2)
        : 'undefined'; 

}

const array = [13, "-", 6];
console.log(operate(array));

