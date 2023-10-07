let currentInput = "";
let currentOperation = "";
let currentOperand = "";

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById("result").value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    document.getElementById("result").value = currentInput;
}

function calculateResult() {
    try {
        currentOperand = eval(currentInput);
        document.getElementById("result").value = currentOperand;
        currentInput = currentOperand;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}
