window.addEventListener('load', solve);

function solve() {
    let genreInputElement = document.getElementById('genre');
    let nameInputElement = document.getElementById('name');
    let authorInputElement = document.getElementById('author');
    let dateInputElement = document.getElementById('date');

    document.getElementById('add-btn').addEventListener('click', add);
    let divAllHits = document.querySelector('.all-hits-container');

    function add(ev) {
        ev.preventDefault();

        if (genreInputElement === '' || nameInputElement === '' || authorInputElement === '' || dateInputElement === '') {
            return;
        }

        let div = document.createElement('div');
        div.classList.add('hits-info');
        divAllHits.appendChild(div);

        let img = document.createElement('img');
        img.src = './static/img/img.png';
        div.appendChild(img);

        let title = document.createElement('h2');
        title.textContent = `Genre: ${genreInputElement.value}`;
        div.appendChild(title);

        let name = document.createElement('h2');
        name.textContent = `Name: ${nameInputElement.value}`;
        div.appendChild(name);

        let author = document.createElement('h2');
        author.textContent = `Author: ${authorInputElement.value}`;
        div.appendChild(author);

        let date = document.createElement('h3');
        date.textContent = `Date: ${dateInputElement.value}`;
        div.appendChild(date);

        let saveBtn = document.createElement('button');
        saveBtn.classList.add('save-btn');
        saveBtn.textContent = 'Save song';
        div.appendChild(saveBtn);

        let likeBtn = document.createElement('button');
        likeBtn.classList.add('like-btn');
        likeBtn.textContent = 'Like song';
        div.appendChild(likeBtn);

        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';
        div.appendChild(deleteBtn);

        clearInput(genreInputElement, nameInputElement, authorInputElement, dateInputElement)
    }

    function clearInput(genreInputElement, nameInputElement, authorInputElement, dateInputElement) {
        genreInputElement.value = '';
        nameInputElement.value = '';
        authorInputElement.value = '';
        dateInputElement.value = '';
    }
}