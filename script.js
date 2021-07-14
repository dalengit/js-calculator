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

    delete() {
        // Deletes a single character of the current number 
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

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

    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];

        let integerDisplay;
        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
        };

        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay;
        };
    }

    updateDisplay() {
        this.currentOperandElement.innerText = this.getDisplayNumber(this.currentOperand);
        if (this.operation != null) {
            // Concatenates the entered number alongside operation 
            this.previousOperandElement.innerText = 
                `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        } else {
            // Clears the previous input
            this.previousOperandElement.innerText = '';        
        }
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

deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
})