class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {

        if (this.capacity < this.books.length + 1) {
            throw Error(`Not enough space in the collection.`);
        } else {
            let objBook = {
                bookName: bookName,
                bookAuthor: bookAuthor,
                payed: false
            }
            this.books.push(objBook);
            return `The ${bookName}, with an author ${bookAuthor}, collect`
        }
    }

    payBook(bookName) {
        let book = this.books.find((book) => book.bookName === bookName);

        if (!book) {
            throw Error(`${bookName} is not in the collection.`);
        }

        if (book.payed === true) {
            throw Error(`${bookName} has already been paid.`);
        } else {
            book.payed = true;
            return `${bookName} has been successfully paid.`
        }
    }

    removeBook(bookName) {
        let book = this.books.find((book) => book.bookName === bookName);

        if (!book) {
            throw Error(`The book, you're looking for, is not found.`);
        }

        if (book.payed === false) {
            throw Error(`${bookName} need to be paid before removing from the collection.`)
        }
        let index = this.books.indexOf(book);
        this.books.splice(index, 1);
        return `${bookName} remove from the collection.`
    }

    getStatistics(bookAuthor) {
        let result = '';

        if (!bookAuthor) {
            let emptySlots = 0;
            if (this.capacity > this.books.length) {
                emptySlots = Number(this.capacity) - this.books.length;
                result += `The book collection has ${emptySlots} empty spots left.\n`
            }

            let sortedBooks = this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));
            sortedBooks.map(book => { result += `${book.bookName} == ${book.bookAuthor} - ${book.payed ? 'Has Paid' : 'Not Paid'}.\n` })
            return result;
        } else {
            if (!this.books.find(book => book.bookAuthor === bookAuthor)) {
                throw Error(`${bookAuthor} is not in the collection.`);
            }
            this.books.filter(book => book.bookAuthor === bookAuthor)
                .map(book => { result += `${book.bookName} == ${book.bookAuthor} - ${book.payed ? 'Has Paid' : 'Not Paid'}.\n` })
            return result;
        }
    }
}

// const library = new LibraryCollection(2)
// console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.addBook('Ulysses', 'James Joyce'));

// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// console.log(library.payBook('In Search of Lost Time'));
// console.log(library.payBook('Don Quixote'));

// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// console.log(library.removeBook('Don Quixote'));
// console.log(library.removeBook('In Search of Lost Time'));

// const library = new LibraryCollection(5)
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Ulysses', 'James Joyce');
// console.log(library.getStatistics());

const library = new LibraryCollection(2)
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
console.log(library.getStatistics('Miguel de Cervantes'));
