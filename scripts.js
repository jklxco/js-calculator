add = (a, b) => a + b;
subtract = (a, b) => a - b;
multiply = (a, b) => a * b;
divide = (a, b) => a / b;

function operate(calcArray) {
    let operator = calcArray[1];
    let num1 = Number( calcArray[0] );
    let num2 = Number( calcArray[2] );

    return (operator === '+') ? add(num1, num2)
        : (operator === '-') ? subtract(num1, num2)
        : (operator === '*') ? multiply(num1, num2)
        : (operator === '/') ? divide(num1, num2)
        : 'undefined'; 

}

const display = document.querySelector('.display');
const buttons = document.querySelectorAll(".button");
let displayValue = '';
display.textContent= 0;
calcArray = [];

for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', e => {

        if (e.target.className.includes("button operator")) {

            calcArray.push(displayValue);
            displayValue = '';

            if (calcArray.length < 3) {
                calcArray.push(e.toElement.id);
            } else {
                displayValue = operate(calcArray);
                display.textContent = displayValue;
                calcArray = [];
                calcArray.push(displayValue);
                displayValue = '';
                if (!e.target.className.includes('equals')) {
                    calcArray.push(e.toElement.id);
                };
            };
        } else if (e.target.className.includes("clear")) {
            displayValue = [];
            display.textContent = 0;
            calcArray = [];

        } else {
            displayValue += e.target.textContent;
            display.textContent = displayValue;
        };
    });
};
