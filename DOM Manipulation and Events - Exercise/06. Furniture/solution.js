function solve() {

  let button = document.querySelectorAll('button');
  
  button[0].addEventListener('click', generate);
  button[1].addEventListener('click', buy);

  function generate() {
    let dataFurniture = JSON.parse(document.querySelectorAll('textarea')[0].value);

    
    for (let furniture of dataFurniture) {
      
      let tr = document.createElement('tr');

      // image
      let tdImg = document.createElement('td');
      let img = document.createElement('img');
      img.src = furniture.img;
      tdImg.appendChild(img);
      tr.appendChild(tdImg);

      // name furniture
      let tdFurniture = document.createElement('td');
      let pFurniture = document.createElement('p');
      tdFurniture.appendChild(pFurniture);
      tr.appendChild(tdFurniture);
      pFurniture.textContent = furniture.name;
      
      // price
      let tdPrice = document.createElement('td');
      let price = document.createElement('p');
      price.textContent = furniture.price
      tdPrice.appendChild(price);
      tr.appendChild(tdPrice);

      // decoration factor
      let tdFactor = document.createElement('td');
      let decFactor = document.createElement('p');
      decFactor.textContent = furniture.decFactor;
      tdFactor.appendChild(decFactor);
      tr.appendChild(tdFactor);

      // checkbox
      let tdCheckbox = document.createElement('td');
      let checkboxInput = document.createElement('input');
      checkboxInput.type = 'checkbox';
      tdCheckbox.appendChild(checkboxInput);
      tr.appendChild(tdCheckbox);

      document.querySelector('tbody').appendChild(tr);
    }
  }

  function buy() {

    let checkboxes = Array.from(document.querySelectorAll('tbody input'))
    .filter(c => c.checked);
    let bought = [];
    let price = 0;
    let decFactor = 0;

    checkboxes.forEach(x => {
      let parent = x.parentElement.parentElement;
      let data = Array.from(parent.querySelectorAll('p'));
      bought.push(data[0]);
      price += Number(data[1].textContent);
      decFactor += Number(data[2].textContent);
    });

    document.querySelectorAll('textarea')[1].value = 
    `Bought furniture: ${bought.join(', ')}` +
    `Total price: ${price.toFixed(2)}` +
    `Average decoration factor: ${decFactor / checkboxes.length}`
  }

}