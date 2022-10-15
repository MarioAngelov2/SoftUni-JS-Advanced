window.addEventListener("load", solve);

function solve() {
  let makeInputElement = document.getElementById('make');
  let modelInputElement = document.getElementById('model');
  let productionYearInputElement = document.getElementById('year');
  let fuelTypeElement = document.getElementById('fuel');
  let originalCostInputElement = document.getElementById('original-cost');
  let sellingPriceInputElement = document.getElementById('selling-price');

  document.getElementById('publish').addEventListener('click', publishBtn);

  let price = 0;
  let totalProfit = 0;

  function publishBtn(ev) {
    ev.preventDefault();

    if (makeInputElement.value === '' || modelInputElement.value === '' || productionYearInputElement.value === '' ||
      fuelTypeElement === '' || originalCostInputElement.value === '' || sellingPriceInputElement.value === '') {
      return;
    }

    if (Number(originalCostInputElement.value) > Number(sellingPriceInputElement.value)) {
      return;
    }

    let tableBody = document.getElementById('table-body');
    let ulCarList = document.getElementById('cars-list');
    let profitElement = document.getElementById('profit');

    let tr = document.createElement('tr');
    tr.classList.add('row');
    tableBody.appendChild(tr);

    let tdMake = document.createElement('td');
    tdMake.textContent = `${makeInputElement.value}`;
    tr.appendChild(tdMake)

    let tdModel = document.createElement('td');
    tdModel.textContent = `${modelInputElement.value}`;
    tr.appendChild(tdModel);

    let tdProductionYear = document.createElement('td');
    tdProductionYear.textContent = `${productionYearInputElement.value}`;
    tr.appendChild(tdProductionYear);

    let tdFuel = document.createElement('td');
    tdFuel.textContent = `${fuelTypeElement.value}`;
    tr.appendChild(tdFuel);

    let tdOriginalCost = document.createElement('td');
    tdOriginalCost.textContent = `${originalCostInputElement.value}`;
    tr.appendChild(tdOriginalCost);

    let tdSellPrice = document.createElement('td');
    tdSellPrice.textContent = `${sellingPriceInputElement.value}`;
    tr.appendChild(tdSellPrice);

    let editBtn = document.createElement('button');
    editBtn.classList.add('action-btn');
    editBtn.classList.add('edit');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', edit);
    tr.appendChild(editBtn);

    let sellBtn = document.createElement('button');
    sellBtn.classList.add('action-btn');
    sellBtn.classList.add('sell');
    sellBtn.textContent = 'Sell';
    sellBtn.addEventListener('click', sell);
    tr.appendChild(sellBtn);

    tableBody.appendChild(tr);

    makeInputElement.value = '';
    modelInputElement.value = '';
    productionYearInputElement.value = '';
    fuelTypeElement.value = '';
    originalCostInputElement.value = '';
    sellingPriceInputElement.value = '';


    function edit(ev) {
      let currentInfo = ev.target.parentElement;

      makeInputElement.value = tdMake.textContent;
      modelInputElement.value = tdModel.textContent;
      productionYearInputElement.value = tdProductionYear.textContent;
      fuelTypeElement.value = tdFuel.textContent;
      originalCostInputElement.value = tdOriginalCost.textContent;
      sellingPriceInputElement.value = tdSellPrice.textContent;

      currentInfo.remove();
    }

    function sell(ev) {
      let currentInfo = ev.target.parentElement;

      price = Number(tdSellPrice.textContent) - Number(tdOriginalCost.textContent);
      
      let li = document.createElement('li');
      li.classList.add('each-list');
      ulCarList.appendChild(li);

      let spanModel = document.createElement('span');
      spanModel.textContent = `${tdMake.textContent} ${tdModel.textContent}`;
      li.appendChild(spanModel);

      let spanProductionYear = document.createElement('span');
      spanProductionYear.textContent = `${tdProductionYear.textContent}`;
      li.appendChild(spanProductionYear);

      let spanPrice = document.createElement('span');
      spanPrice.textContent = `${price}`;
      li.appendChild(spanPrice);


      currentInfo.remove();

      totalProfit += price;
      profitElement.textContent = totalProfit.toFixed(2);
    }
  }
}
