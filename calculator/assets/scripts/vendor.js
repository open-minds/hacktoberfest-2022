const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subBtn = document.getElementById('btn-sub');
const mulBtn = document.getElementById('btn-mul');
const divBtn = document.getElementById('btn-div');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result, text) {
    currentResultOutput.textContent = result;
    currentCalculationOutput.textContent = text;
}