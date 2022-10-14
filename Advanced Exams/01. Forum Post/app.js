window.addEventListener("load", solve);

function solve() {
  document.getElementById('publish-btn').addEventListener('click', createPost);
  let titleElementInput = document.getElementById('post-title');
  let categoryElementInput = document.getElementById('post-category');
  let contentElementInput = document.getElementById('post-content');

  function createPost(e) {
    let titleValue = titleElementInput.value;
    let categoryValue = categoryElementInput.value;
    let contentValue = contentElementInput.value;

    if (!titleValue || !categoryValue || !contentValue) {
      return;
    }

    let ulElement = document.getElementById('review-list');

    let li = document.createElement('li');
    li.className = 'rpost';

    let article = document.createElement('article');

    let title = document.createElement('h4');
    title.textContent = `${titleValue}`;
    article.appendChild(title);

    let categoryP = document.createElement('p');
    categoryP.textContent = `Category: ${categoryValue}`
    article.appendChild(categoryP);

    let contentP = document.createElement('p')
    contentP.textContent = `Content: ${contentValue}`
    article.appendChild(contentP);

    li.appendChild(article);
    ulElement.appendChild(li);

    let editBtn = document.createElement('button');
    editBtn.classList.add('action-btn');
    editBtn.classList.add('edit');
    editBtn.textContent = 'Edit';
    li.appendChild(editBtn)

    let approveBtn = document.createElement('button');
    approveBtn.classList.add('action-btn');
    approveBtn.classList.add('approve');
    approveBtn.textContent = 'Approve';
    li.appendChild(approveBtn)

    titleElementInput.value = '';
    categoryElementInput.value = '';
    contentElementInput.value = '';

    editBtn.addEventListener('click', editText);

    function editText() {
      titleElementInput.value = title.innerText;
      categoryElementInput.value = categoryP.innerText;
      contentElementInput.value = contentP.innerText;
    }
  }
}
