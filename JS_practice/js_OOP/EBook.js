import Book from './Book.js';

export default class EBook extends Book {
  constructor(title, author, year, format) {
    super(title, author, year);
    this.format = format;
  }

  get format() {
    return this._format;
  }

  set format(eBookFormat) {
    if (typeof eBookFormat !== 'string' || eBookFormat.trim() === '') {
      console.log('Invalid book format: must be a non-empty string.');
      return;
    }
    this._format = eBookFormat;
  }

  printInfo() {
    console.log(`"${this.title}" was written by ${this.author} in ${this.year}. Format: ${this.format}.`);
  }

  static returnEBook(bookInfo, bookFormat) {
    if (!(bookInfo instanceof Book)) {
      console.log('The book has to be instance of Book');
      return;
    }
    if (typeof bookFormat !== 'string' || bookFormat.trim() === '') {
      console.log('Enter valid ebook format');
      return;
    }
    return new EBook(bookInfo.title, bookInfo.author, bookInfo.year, bookFormat);
  }
}
