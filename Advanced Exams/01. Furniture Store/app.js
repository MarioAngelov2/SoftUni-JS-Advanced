window.addEventListener('load', solve);

function solve() {
    let modelInputElement = document.getElementById('model');
    let yearInputElement = document.getElementById('year');
    let descriptionInputElement = document.getElementById('description');
    let priceInputElement = document.getElementById('price');

    document.getElementById('add').addEventListener('click', add);
    let furnitureList = document.getElementById('furniture-list');
    let sum = 0;
    
    function add(ev) {
        ev.preventDefault();
        
        if (modelInputElement === '' || yearInputElement < 0 || descriptionInputElement === '' || priceInputElement < 0) {
            return;
        }
        
        let trInfo = document.createElement('tr');
        trInfo.classList.add('info');
        furnitureList.appendChild(trInfo);
        
        let tdModel = document.createElement('td');
        tdModel.textContent = `${modelInputElement.value}`;
        trInfo.appendChild(tdModel);
        
        let tdPrice = document.createElement('td');
        tdPrice.textContent = `${Number(priceInputElement.value).toFixed(2)}`;
        trInfo.appendChild(tdPrice);
        
        let tdButtons = document.createElement('td');
        trInfo.appendChild(tdButtons);
        
        let moreBtn = document.createElement('button');
        moreBtn.classList.add('moreBtn');
        moreBtn.textContent = 'More Info';
        tdButtons.appendChild(moreBtn);
        moreBtn.addEventListener('click', more);
        
        let buyBtn = document.createElement('button');
        buyBtn.classList.add('buyBtn');
        buyBtn.textContent = 'Buy it';
        tdButtons.appendChild(buyBtn);
        buyBtn.addEventListener('click', buy);
        
        let trMoreInfo = document.createElement('tr');
        trMoreInfo.classList.add('hide');
        furnitureList.appendChild(trMoreInfo);
        
        let tdYear = document.createElement('td');
        tdYear.textContent = `Year: ${yearInputElement.value}`;
        trMoreInfo.appendChild(tdYear);
        
        let tdDescription = document.createElement('td');
        tdDescription.setAttribute('colspan', 3);
        tdDescription.textContent = `Description: ${descriptionInputElement.value}`;
        trMoreInfo.appendChild(tdDescription);
        
        clearInputs(modelInputElement, yearInputElement, descriptionInputElement, priceInputElement)
        
        function more(ev) {
            if (ev.target.textContent === 'More Info') {
                ev.target.textContent = 'Less Info';
                trMoreInfo.style.display = 'contents';
            } else {
                ev.target.textContent = 'More Info';
                trMoreInfo.style.display = 'none';
            }
        }
        
        function buy(ev) {
            let totalPrice = document.querySelector('.total-price');
            let furnitureInfo = ev.target.parentElement.parentElement;
            furnitureInfo.remove();
            
            sum += Number(tdPrice.textContent)
            
            totalPrice.textContent = `${sum.toFixed(2)}`
        }
        
        function clearInputs(modelInputElement, yearInputElement, descriptionInputElement, priceInputElement) {
            modelInputElement.value = '';
            yearInputElement.value = '';
            descriptionInputElement.value = '';
            priceInputElement.value = '';
        }
    }
}