function deleteByEmail() {
    function deleteByEmail() {
        let emailInputElement = document.querySelector('input[name="email"]');
        let emailCeilElement = document.querySelectorAll('tr td:nth-of-type(2)');
        let resultField = document.getElementById('result');
    
        let emailElements = Array.from(emailCeilElement);
        let targetEmail = emailElements.find(el => el.textContent === emailInputElement.value);
        if (targetEmail) {
            targetEmail.parentNode.remove();
            resultField.textContent = 'Deleted.'
        } else {
            resultField.textContent = 'Not found.'
        }
    }
}