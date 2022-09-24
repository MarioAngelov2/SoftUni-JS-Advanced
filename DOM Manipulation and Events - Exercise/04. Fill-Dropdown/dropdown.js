function addItem() {
    let inputTextElement = document.getElementById('newItemText');
    let inputValueElement = document.getElementById('newItemValue');
    let idMenuElement = document.getElementById('menu');


    let optionElement = document.createElement('option');
    
    optionElement.textContent = inputTextElement.value;
    optionElement.value = inputValueElement.value;
    
    idMenuElement.appendChild(optionElement);

    inputTextElement.value = '';
    inputValueElement.value = '';
}