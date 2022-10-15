function solve() {
    let firstNameInputElement = document.getElementById('fname');
    let lastNameInputElement = document.getElementById('lname');
    let emailInputElement = document.getElementById('email');
    let birthInputElement = document.getElementById('birth');
    let positionInputElement = document.getElementById('position');
    let salaryInputElement = document.getElementById('salary');

    document.getElementById('add-worker').addEventListener('click', hire);

    let tBody = document.getElementById('tbody');
    let budgedMessageElement = document.getElementById('message');
    let totalBudget = 0;

    function hire(ev) {
        ev.preventDefault();

        if (firstNameInputElement.value === '' ||
            lastNameInputElement.value === '' ||
            emailInputElement.value === '' ||
            birthInputElement.value === '' ||
            positionInputElement.value === '' ||
            salaryInputElement.value === '') {
            return;
        }

        let tr = document.createElement('tr');
        tBody.appendChild(tr);

        let tdFirstName = document.createElement('td');
        tdFirstName.textContent = `${firstNameInputElement.value}`;
        tr.appendChild(tdFirstName);

        let tdLastName = document.createElement('td');
        tdLastName.textContent = `${lastNameInputElement.value}`;
        tr.appendChild(tdLastName);

        let tdEmail = document.createElement('td');
        tdEmail.textContent = `${emailInputElement.value}`
        tr.appendChild(tdEmail);

        let tdBirth = document.createElement('td');
        tdBirth.textContent = `${birthInputElement.value}`;
        tr.appendChild(tdBirth);

        let tdPosition = document.createElement('td');
        tdPosition.textContent = `${positionInputElement.value}`;
        tr.appendChild(tdPosition);

        let tdSalary = document.createElement('td');
        tdSalary.textContent = `${salaryInputElement.value}`;
        tr.appendChild(tdSalary);

        let tdButtons = document.createElement('td');

        let firedBtn = document.createElement('button');
        firedBtn.classList.add('fired');
        firedBtn.textContent = 'Fired';
        firedBtn.addEventListener('click', fired);

        let editBtn = document.createElement('button');
        editBtn.classList.add('edit');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', edit);

        tdButtons.appendChild(firedBtn);
        tdButtons.appendChild(editBtn);
        tr.appendChild(tdButtons);

        totalBudget += Number(tdSalary.textContent)
        budgedMessageElement.textContent = `Your budget for salary must be: ${totalBudget.toFixed(2)}`
        
        clearFields(firstNameInputElement, lastNameInputElement, emailInputElement, birthInputElement, positionInputElement, salaryInputElement);

        function edit(ev) {
            let currentInfo = ev.target.parentElement.parentElement;
    
            firstNameInputElement.value = tdFirstName.textContent;
            lastNameInputElement.value = tdLastName.textContent;
            emailInputElement.value = tdEmail.textContent;
            birthInputElement.value = tdBirth.textContent;
            positionInputElement.value = tdPosition.textContent;
            salaryInputElement.value = tdSalary.textContent;

            totalBudget -= Number(tdSalary.textContent)
            budgedMessageElement.textContent = `Your budget for salary must be:${totalBudget.toFixed(2)}`
            currentInfo.remove();
        }
        
        function fired(ev) {
            let currentInfo = ev.target.parentElement.parentElement;

            totalBudget -= Number(tdSalary.textContent);
            budgedMessageElement.textContent = `Your budget for salary must be:${totalBudget.toFixed(2)}`

            currentInfo.remove();
        }
    }
    
    function clearFields(firstNameInputElement, lastNameInputElement, emailInputElement, birthInputElement, positionInputElement, salaryInputElement) {
        firstNameInputElement.value = '';
        lastNameInputElement.value = '';
        emailInputElement.value = '';
        birthInputElement.value = '';
        positionInputElement.value = '';
        salaryInputElement.value = '';
    }
}
solve()