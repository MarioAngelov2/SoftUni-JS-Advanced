window.addEventListener('load', solution);

function solution() {
  let fullNameInputElement = document.getElementById('fname');
  let emailInputElement = document.getElementById('email');
  let phNumberInputElement = document.getElementById('phone');
  let addresInputElement = document.getElementById('address');
  let postCodeInputElement = document.getElementById('code');

  document.getElementById('submitBTN').addEventListener('click', submit);

  let infoPreviewListElement = document.getElementById('infoPreview');

  function submit(ev) {
    ev.preventDefault();

    let fName = document.createElement('li');
    fName.textContent = `Full Name: ${fullNameInputElement.value}`;
    infoPreviewListElement.appendChild(fName);

    let email = document.createElement('li');
    email.textContent = `Email: ${emailInputElement.value}`
    infoPreviewListElement.appendChild(email);

    let phNumber = document.createElement('li');
    phNumber.textContent = `Phone Number: ${phNumberInputElement.value}`;
    infoPreviewListElement.appendChild(phNumber);

    let address = document.createElement('li');
    address.textContent = `Address: ${addresInputElement.value}`;
    infoPreviewListElement.appendChild(address);

    let postCode = document.createElement('li');
    postCode.textContent = `Postal Code: ${postCodeInputElement.value}`
    infoPreviewListElement.appendChild(postCode);
  }
}
