export default class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year
    }

    get title(){
        return this._title;
    }

    get author(){
        return this._author;
    }

    get year(){
        return this._year;
    }

    set title(bookTitle) {
        if (typeof bookTitle !== 'string' || bookTitle.trim() === '') {
            console.log("Invalid book title: must be a non-empty string.");
            return;
        }
        this._title = bookTitle;
    }

    set author(bookAuthor) {
        if (typeof bookAuthor !== 'string' || bookAuthor.trim() === '') {
            console.log("Invalid book author: must be a non-empty string.");
            return;
        }
        this._author = bookAuthor;
    }

    set year(bookYear) {
        if (!Number.isInteger(bookYear) || bookYear <= 0) {
            console.log("Invalid book year: must be a positive integer greater than zero.");
            return;
        }
        this._year = bookYear;
    }


    printInfo() {
        console.log(`"${this.title}" was written by ${this.author} in ${this.year}.`);
    }

    static returnOldestBook(booksArray) {
        if (!Array.isArray(booksArray) || booksArray.length === 0) {
            console.log('Enter array of books');
        }
        return booksArray.reduce((oldestBook, book) => (book.year < oldestBook.year ? book : oldestBook));
    }
}