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
        if (number === '.' && this.currentOperand.includes('.')) return;
        // Number with multiple digits can be added 
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return; 
        if (this.previousOperand !== '') {
            this.compute();
        }
        // Declaration of operation -> makes current operand into previous operand -> current operand = null
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute() {
        let computation;
        const previousVar = parseFloat(this.previousOperand);
        const currentVar = parseFloat(this.currentOperand);
        if (isNaN(previousVar) || isNaN(currentVar)) return; 
        switch (this.operation) {
            case '+': 
                computation = previousVar + currentVar
                break
            case '-': 
                computation = previousVar - currentVar
                break
            case '*': 
                computation = previousVar * currentVar
                break
            case '÷': 
                computation = previousVar / currentVar
                break
            default: 
                return;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }

    updateDisplay() {
        console.log(this.currentOperand);
        this.currentOperandElement.innerText = this.currentOperand;
        this.previousOperandElement.innerText = this.previousOperand; 
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

// Add event listener loop and input recognition - add number to the display
numberButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operationButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
})

allClearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})