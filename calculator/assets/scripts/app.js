let currentValue = 0;

function getUserInput() {
    return +userInput.value;
}

function printResult(initialValue, operator, userValue) {
    const calcDescription = `${initialValue} ${operator} ${userValue}`
    outputResult(currentValue, calcDescription)
}

function add() {
    const userInputValue = getUserInput()
    const initialValue = currentValue
    currentValue += userInputValue
    printResult(initialValue, "+", userInputValue)
}

function sub() {
    const userInputValue = getUserInput()
    const initialValue = currentValue
    currentValue -= userInputValue
    printResult(initialValue, "-", userInputValue)
}

function mul() {
    const userInputValue = getUserInput()
    const initialValue = currentValue
    currentValue *= userInputValue
    printResult(initialValue, "x", userInputValue)
}

function div() {
    const userInputValue = getUserInput()
    const initialValue = currentValue
    currentValue /= userInputValue
    printResult(initialValue, "/", userInputValue)
}

addBtn.addEventListener("click", add);
subBtn.addEventListener("click", sub);
mulBtn.addEventListener("click", mul);
divBtn.addEventListener("click", div);
