function subtract() {
    let firstElement = document.getElementById('firstNumber').value;
    let secondElement = document.getElementById('secondNumber').value;
    let firstElAsNumber = Number(firstElement);
    let secondElAsNumber = Number(secondElement)
    let result = firstElAsNumber - secondElAsNumber;

    let outputElement = document.getElementById('result');
    outputElement.textContent = result;

}