import Book from './Book.js';
import EBook from './EBook.js';

//1
const book1 = new Book("Harry Potter and the Philosopher's Stone", 'J. K. Rowling', 1997);
const book2 = new Book('Harry Potter and the Chamber of Secrets', 'J. K. Rowling', 1998);
const book3 = new Book('Harry Potter and the Prisoner of Azkaban', 'J. K. Rowling', 1999);
const book4 = new Book('Harry Potter and the Goblet of Fire', 'J. K. Rowling', 2000);
const book5 = new Book('Harry Potter and the Order of the Phoenix', 'J. K. Rowling', 2003);
const book6 = new Book('Harry Potter and the Half-Blood Prince', 'J. K. Rowling', 2005);
const book7 = new Book('Harry Potter and the Deathly Hallows', 'J. K. Rowling', 2007);

book1.printInfo();
book2.printInfo();
book3.printInfo();
book4.printInfo();
book5.printInfo();
book6.printInfo();
book7.printInfo();

//2
const eBook1 = new EBook('Perfume: The Story of a Murderer', 'Patrick Süskind', 1985, 'PDF');
const eBook2 = new EBook('One Hundred Years of Solitude', 'Gabriel García Márquez', 1967, 'EPUB');

eBook1.printInfo();
eBook2.printInfo();

//3
book3.title = null;
book3.title = 'Title set check';
console.log(book3.title);

book1.author = ' ';
book1.author = 'Author set check';
console.log(book1.author);

book2.year = -1854;
book2.year = 1900;
console.log(book2.year);

eBook1.format = '';
console.log(eBook1.format);

//4
console.log(Book.returnOldestBook([book1, book3, book4, eBook1, eBook2]));

//5
console.log(EBook.returnEBook(book1, 'pdf'));
