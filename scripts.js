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
        : 'undefined' ; 

}
/*
const array = [13, "-", 6];
console.log(operate(array));
*/

let display = document.querySelector('.display');
const buttons = document.querySelectorAll(".button");
let displayValue = '';
display.textContent= 0;
calcArray = [];

for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', e => {
        if (e.target.className === "button operator") {
            calcArray.push(displayValue);
            displayValue = '';
            calcArray.push(e.toElement.id);
        } else if (e.target.className === "button operator equals") {
            calcArray.push(displayValue);
            console.log(calcArray);
            displayValue = operate(calcArray);
            display.textContent = displayValue;
            calcArray = [];
            
        } else {
            displayValue += e.target.textContent;
            display.textContent = displayValue;
        };
    });
};
