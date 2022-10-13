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
    
    let li = document.createElement('li');
    li.className = 'rpost';
    
    let article = document.createElement('article');
    
    let title = document.createElement('h4', `${titleValue}`);
    article.appendChild(title);

    let categoryP = document.createElement('p');
    categoryP.textContent = `Category: ${categoryValue}`
    article.appendChild(categoryP);

    let contentP = document.createElement('p')
    contentP.textContent = `Content: ${contentValue}`
    article.appendChild(contentP);

    li.appendChild(article);

    titleValue.value = '';
    categoryValue.value = '';
    contentValue.value = '';
  }
}
