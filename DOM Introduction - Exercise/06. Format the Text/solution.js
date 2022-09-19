function solve() {

  let inputText = document.getElementById('input');
  let splittetText = inputText.value.split('.').filter(s => s !== '');
  let outputDiv = document.getElementById('output');

  while (splittetText.length > 0) {
    let text = splittetText.splice(0, 3).join('.') + '.';
    let newP = document.createElement('p');
    newP.textContent = text;
    outputDiv.appendChild(newP);
  }
}