function solve() {
    let recipientInputElement = document.getElementById('recipientName');
    let titleInputElement = document.getElementById('title');
    let messageInputElement = document.getElementById('message');

    document.getElementById('add').addEventListener('click', add);
    document.getElementById('reset').addEventListener('click', reset);

    let listOfMailsElement = document.getElementById('list');

    function add(ev) {
        ev.preventDefault();

        if (recipientInputElement.value === '' || titleInputElement.value === '' || messageInputElement.value === '') {
            return;
        }

        let li = document.createElement('li');
        listOfMailsElement.appendChild(li);

        let title = document.createElement('h4');
        title.textContent = `Title: ${titleInputElement.value}`;
        li.appendChild(title);

        let recipientName = document.createElement('h4');
        recipientName.textContent = `Recipient name: ${recipientInputElement.value}`;
        li.appendChild(recipientName);

        let message = document.createElement('span');
        message.textContent = `${messageInputElement.value}`;
        li.appendChild(message);

        let divButtons = document.createElement('div');
        divButtons.classList.add('list-action');
        li.appendChild(divButtons);

        let sendBtn = document.createElement('button');
        sendBtn.type = 'submit';
        sendBtn.setAttribute('id', 'send')
        sendBtn.textContent = 'Send';
        sendBtn.addEventListener('click', sendMail);

        let deleteBtn = document.createElement('button');
        deleteBtn.type = 'submit';
        deleteBtn.setAttribute('id', 'delete')
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteMailFromList);

        divButtons.appendChild(sendBtn);
        divButtons.appendChild(deleteBtn);

        function sendMail(ev) {
            let currentInfo = ev.target.parentElement.parentElement;

            let sentMailsFieldElement = document.getElementsByClassName('sent-list')[0];

            let li = document.createElement('li');
            sentMailsFieldElement.appendChild(li);

            let spanRecipient = document.createElement('span');
            spanRecipient.textContent = `To: ${recipientName.textContent.split(': ')[1]} Title: ${title.textContent.split(': ')[1]}`;
            li.appendChild(spanRecipient);

            let divButton = document.createElement('div');
            divButton.classList.add('btn');
            let deleteBtn = document.createElement('button');
            deleteBtn.type = 'submit';
            deleteBtn.classList.add('delete');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', deleteFromSent);

            divButton.appendChild(deleteBtn);
            li.appendChild(divButton);

            currentInfo.remove();
        }

        function deleteMailFromList(ev) {
            let currentInfo = ev.target.parentElement.parentElement;

            let deleteList = document.getElementsByClassName('trash')[0];

            let li = document.createElement('li');
            deleteList.appendChild(li);

            let spanRecipient = document.createElement('span');
            spanRecipient.textContent = `To: ${recipientName.textContent.split(': ')[1]} Title: ${title.textContent.split(': ')[1]}`;
            li.appendChild(spanRecipient);

            currentInfo.remove();
        }

        function deleteFromSent(ev) {
            let currentInfo = ev.target.parentElement.parentElement;

            let deleteList = document.getElementsByClassName('trash')[0];

            let li = document.createElement('li');
            deleteList.appendChild(li);

            let spanRecipient = document.createElement('span');
            spanRecipient.textContent = `To: ${recipientName.textContent.split(': ')[1]} Title: ${title.textContent.split(': ')[1]}`;
            li.appendChild(spanRecipient);

            currentInfo.remove();
        }

    }

    function reset(ev) {
        ev.preventDefault();

        recipientInputElement.value = '';
        titleInputElement.value = '';
        messageInputElement.value = '';
    }

}
solve()