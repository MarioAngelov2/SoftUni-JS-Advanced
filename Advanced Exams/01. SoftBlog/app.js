function solve(){
   let authorInputEl = document.getElementById('creator');
   let titleInputEl = document.getElementById('title');
   let categoryInputEl = document.getElementById('category');
   let contentInputEl = document.getElementById('content');
   let buttons = [...document.querySelectorAll('button')]

   buttons[0].addEventListener('click', create);

   let articleSection = document.querySelector('.site-content').children[0]

   function create(ev) {
      ev.preventDefault();

      let article = document.createElement('article');
      articleSection.appendChild(article);

      let h1 = document.createElement('h1');
      h1.textContent = 'JavaScript';
      articleSection.appendChild(h1);

      let pCategory = document.createElement('p');
      pCategory.textContent = `Category:`;
      let textCategory = document.createElement('strong');
      textCategory.textContent = `${categoryInputEl.value}`;
      pCategory.appendChild(textCategory);
      articleSection.appendChild(pCategory);

      let pCreator = document.createElement('p');
      pCreator.textContent = `Creator:`;
      let textCreator = document.createElement('strong');
      textCreator.textContent = `${authorInputEl.value}`;
      pCreator.appendChild(textCreator);
      articleSection.appendChild(pCreator)
   }
  }
