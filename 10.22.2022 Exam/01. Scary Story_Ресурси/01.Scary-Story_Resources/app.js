window.addEventListener("load", solve);

function solve() {
  let firstNameInput = document.getElementById('first-name');
  let lastNameInput = document.getElementById('last-name');
  let ageInput = document.getElementById('age');
  let storyTitleInput = document.getElementById('story-title');
  let genreInput = document.getElementById('genre');
  let storyTextInput = document.getElementById('story');

  let publishBtn = document.getElementById('form-btn')
  publishBtn.addEventListener('click', publish);

  let previewText = document.getElementById('preview-list');
  let divBlock = document.getElementById('main');

  function publish(ev) {
    ev.preventDefault();

    if (!firstNameInput.value || !lastNameInput.value || !ageInput.value || !storyTitleInput.value || !storyTextInput.value) {
      return;
    }

    if (firstNameInput.value === '' || 
    lastNameInput.value === '' || 
    ageInput.value === '' || 
    storyTitleInput.value === '' || 
    storyTextInput.value === '') {
      return;
    }

    //create dom elements
    let li = document.createElement('li');
    li.classList.add('story-info');
    previewText.appendChild(li);

    let article = document.createElement('article');
    li.appendChild(article);

    let h4 = document.createElement('h4');
    h4.textContent = `Name: ${firstNameInput.value} ${lastNameInput.value}`;
    article.appendChild(h4);

    let pAge = document.createElement('p');
    pAge.textContent = `Age: ${ageInput.value}`;
    article.appendChild(pAge);

    let pTitle = document.createElement('p');
    pTitle.textContent = `Title: ${storyTitleInput.value}`;
    article.appendChild(pTitle);

    let pGenre = document.createElement('p');
    pGenre.textContent = `Genre: ${genreInput.value}`;
    article.appendChild(pGenre);

    let pText = document.createElement('p');
    pText.textContent = `${storyTextInput.value}`;
    article.appendChild(pText);

     //add new buttons
     let saveBtn = document.createElement('button');
     saveBtn.classList.add('save-btn');
     saveBtn.textContent = `Save Story`;
     saveBtn.addEventListener('click', save);
     li.appendChild(saveBtn);
 
     let editBtn = document.createElement('button');
     editBtn.classList.add('edit-btn');
     editBtn.textContent = `Edit Story`;
     editBtn.addEventListener('click', edit);
     li.appendChild(editBtn);
 
     let deleteBtn = document.createElement('button');
     deleteBtn.classList.add('delete-btn');
     deleteBtn.textContent = `Delete Story`;
     li.appendChild(deleteBtn);

    //clear input fields
    firstNameInput.value = '';
    lastNameInput.value = '';
    ageInput.value = '';
    storyTitleInput.value = '';
    storyTextInput.value = '';

    //disable publish button
    publishBtn.disabled = true;
    
    //other buttons actions
    function edit() {
      let currentInfo = previewText.querySelectorAll('li');

      let firstAndLastName = h4.textContent.split(': ')[1];
      let firstName = firstAndLastName.split(' ');
      firstNameInput.value = firstName[0];
      lastNameInput.value = firstName[1];
      ageInput.value = pAge.textContent.split(': ')[1];
      storyTitleInput.value = pTitle.textContent.split(': ')[1];
      storyTextInput.value = pText.textContent;

      publishBtn.disabled = false;
      editBtn.setAttribute('disabled', true);
      saveBtn.setAttribute('disabled', true);
      deleteBtn.setAttribute('disabled', true);
      
      //removing all li elements from previewText
      for (let li of currentInfo) {
        li.remove();
      }
    }

    function save() {
      divBlock.innerHTML = '';
      let finalMessage = document.createElement('h1');
      finalMessage.textContent = `Your scary story is saved!`;
      divBlock.appendChild(finalMessage)
    }
  }
  
}
