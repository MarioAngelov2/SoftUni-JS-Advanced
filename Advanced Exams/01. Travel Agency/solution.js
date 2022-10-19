window.addEventListener('load', solution);

function solution() {
  let fullNameInputElement = document.getElementById('fname');
  let emailInputElement = document.getElementById('email');
  let phNumberInputElement = document.getElementById('phone');
  let addresInputElement = document.getElementById('address');
  let postCodeInputElement = document.getElementById('code');

  let submitButton = document.getElementById('submitBTN')
  let editButton = document.getElementById('editBTN');
  let continueBtn = document.getElementById('continueBTN');

  submitButton.addEventListener('click', submit);
  
  let infoPreviewListElement = document.getElementById('infoPreview');
  let divBlock = document.getElementById('block');
  
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
    
    clearInput(fullNameInputElement, emailInputElement, phNumberInputElement, addresInputElement, postCodeInputElement);
    
    submitButton.setAttribute('disabled', true);
    editButton.disabled = false;
    continueBtn.disabled = false;
    
    editButton.addEventListener('click', edit);
    continueBtn.addEventListener('click', continueFunc);
    
    function edit() {
      let currentInfo = infoPreviewListElement.querySelectorAll('li')

      fullNameInputElement.value = fName.textContent.split(': ')[1];
      emailInputElement.value = email.textContent.split(': ')[1];
      phNumberInputElement.value = phNumber.textContent.split(': ')[1];
      addresInputElement.value = address.textContent.split(': ')[1];
      postCodeInputElement.value = postCode.textContent.split(': ')[1];

      for (let li of currentInfo) {
        li.remove()
      }
      editButton.disabled = true;
      continueBtn.disabled = true;
      submitButton.disabled = false;
    }

    function continueFunc() {
      divBlock.innerHTML = '';
      let finalMessage = document.createElement('h3');
      finalMessage.textContent = `Thank You For Your Reservation!`;
      divBlock.appendChild(finalMessage)
    }
  }

 

  function clearInput(fullNameInputElement, emailInputElement, phNumberInputElement, addresInputElement, postCodeInputElement) {
    fullNameInputElement.value = '';
    emailInputElement.value = '';
    phNumberInputElement.value = '';
    addresInputElement.value = '';
    postCodeInputElement.value = '';
  }
}
