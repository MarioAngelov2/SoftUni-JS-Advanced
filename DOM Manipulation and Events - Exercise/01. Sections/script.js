function create(words) {
   let parrentElement = document.getElementById('content');
   let elements = words;

   for (let element of elements) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      let text = document.createTextNode(element);

      p.appendChild(text);
      p.style.display = 'none';
      div.appendChild(p);

      div.addEventListener('click', function (ev) {
         ev.currentTarget.children[0].style.display = 'block';
      });
      parrentElement.appendChild(div);
   }
}