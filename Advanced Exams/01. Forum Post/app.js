window.addEventListener("load", solve);

function solve() {
  document.getElementById('publish-btn').addEventListener('click', createPost);
  //document.getElementById('clear-btn').addEventListener('click', clearInfo);
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
    let ulPublishedList = document.getElementById('published-list');

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
    editBtn.addEventListener('click', editText);

    let approveBtn = document.createElement('button');
    approveBtn.classList.add('action-btn');
    approveBtn.classList.add('approve');
    approveBtn.textContent = 'Approve';
    li.appendChild(approveBtn)
    approveBtn.addEventListener('click', approveText);

    titleElementInput.value = '';
    categoryElementInput.value = '';
    contentElementInput.value = '';


    function editText(e) {
      let currentPost = e.target.parentElement;

      titleElementInput.value = title.textContent;
      categoryElementInput.value = categoryP.textContent.split(': ')[1];
      contentElementInput.value = contentP.textContent.split(': ')[1];

      currentPost.remove();
    }

    function approveText(e) {
      let cuurentInfo = e.target.parentElement;

      ulPublishedList.appendChild(contentP);
      ulPublishedList.appendChild(categoryP);
      ulPublishedList.appendChild(title);
      ulPublishedList.appendChild(article);
      ulPublishedList.appendChild(li);

      cuurentInfo.remove();
    }
  }

  // function clearInfo(e) {
  //   let allInfo = e.target.parentElement;
  //   debugger
  //   allInfo.remove()
  // }
}
