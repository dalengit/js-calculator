// Calculator object defines methods it can take 
class Calculator {
    constructor(previousOperandElement, currentOperandElement) {
        this.previousOperandElement = previousOperandElement;
        this.currentOperandElement= currentOperandElement;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {}

    appendNumber(number) {
        this.currentOperand = number;
    }

    chooseOperation(operation) {}

    compute() {}

    updateDisplay() {
        console.log(this.currentOperand);
        this.currentOperandElement.innerText = this.currentOperand;
    }

}

// Selectors
const numberButton = document.querySelectorAll('[data-number]');
const operationButton = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const previousOperandElement = document.querySelector('[data-previous-operand]');
const currentOperandElement = document.querySelector('[data-current-operand]');

// New instance of calc
const calculator = new Calculator(previousOperandElement, currentOperandElement);

// Add event listener and input recognition 
numberButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})