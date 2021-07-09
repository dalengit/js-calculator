// Calculator class defines methods it can take 
class Calculator {
    constructor(previousOperand, currentOperand) {
        this.previousOperand = previousOperand;
        this.currentOperand = currentOperand;
    }

    clear() {}

    delete() {}

    appendNumber(number) {}

    chooseOpertation(operation) {}

    compute() {}

    updateDisplay() {}

}

// Selectors
const numberButton = document.querySelectorAll('[data-number]');
const operationButton = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const previousOperand = document.querySelector('[data-previos-operand]');
const currentOperand = document.querySelector('[data-current-operand]');