"use strict";

const MAX_ELEMENT_LIST = 2;

function create() {
    return [];
}

function isEmpty(set) {
    return (set.length === 0);
}

function size(set) {
    return set.length;
}

function has(set, elem) {
    if (!elem.ISBN || !elem.title) throw "The element isn't a valid book";
    set.some(book => book.ISBN === elem.ISBN);
}

function add(set, elem) {
    if (!elem.ISBN || !elem.title) throw "The element isn't a valid book";
    if(has(set, elem)) throw "The element ISBN is already exists";

    set.push(elem);
    return size(set);
}

// Return elements with "-"
function toString(set) {
    return set.reduceRight(function(str, item, index) {
        return (index !== set.length - 1) ? str + " - " + item : str + item;
    }, "");
}

function clear(set) {
    set.length = 0; //Remove all elements list
}

function remove(set, elem) {
    if (!elem.ISBN || !elem.title) throw "The element isn't a valid book";

    const index = set.findIndex(book => book.ISBN === elem.ISBN);
    if (index === -1) return false;  // Book doesn't finded

    set.splice(index, 1); // Remove book by index
    return true;  // book removed
}

function testByISBN() {
    console.log("Starting tests....")

    let bookList = create();

    console.log("List is emtpy: " + isEmpty(bookList));

    const book1 = {
        ISBN: "999-84-9804-654-0",
        title: "Book 1 Original",
        author: "Miguel de Cervantes",
        publicationDate: new Date(1605, 0, 1),
        price: 20,
    }
    const book1Repeat = {
        ISBN: "999-84-9804-654-0",
        title: "Book 1 Repeat",
        author: "Miguel de Cervantes",
        publicationDate: new Date(1605, 0, 1),
        price: 20,
    }
    const book2 = {
        ISBN: "999-11-9804-633-0",
        title: "Book 2",
        author: "Miguel de Turbantes",
        publicationDate: new Date(1605, 0, 1),
        price: 20,
    }
    const book3 = {
        ISBN: "999-85-9804-677-0",
        title: "Book 3",
        author: "Miguel de Cervantes 3",
        publicationDate: new Date(2025, 0, 1),
        price: 30,
    };

    // Ivalid book 1 -> missing title
    const invalidBook1 = {
        ISBN: "978-84-9804-654-0",
        author: "Estopa",
    }
     // Ivalid book 2 -> missing ISBN
    const invalidBook2 = {
        author: "cri cri",
        title: "Return error",
    }

    console.log("Adding book 3: " + add(bookList, book3));
    console.log("Adding book 2: " + add(bookList, book2));
    console.log("Adding book 1: " + add(bookList, book1));

    // Show ordered like: book 2, book 1, book 3
    console.log("Book list after add books: " + JSON.stringify(bookList, null, 2));

    console.log("Book list with author: " + toString(bookList));

    try {
        console.log("Trying to add an invalid book without title...");
        add(bookList, invalidBook1);
    } catch (error) {
        console.log("Error: " + error);
    }

    try {
        console.log("Trying to add an invalid book without ISBN...");
        add(bookList, invalidBook2);
    } catch (error) {
        console.log("Error: " + error);
    }
    try {
        console.log("Trying to add a book with a duplicate ISBN...");
        add(bookList, book1Repeat);  // Exists
    } catch (error) {
        console.log("Error: " + error);
    }

    console.log("Removing book 1 ORIGINAL: " + remove(bookList, book1)); // true
    console.log("Book list after removing book 1 ORIGINAL: " + JSON.stringify(bookList, null, 2));

    const nonExistentBook = {
        ISBN: "000-00-0000-000-0",
        title: "Nonexistent Book",
        author: "Unknown",
        publicationDate: new Date(),
        price: 10,
    };

    console.log("Removing a nonexistent book: " + remove(bookList, nonExistentBook)); // false

    console.log("Final book list: " + toString(bookList));
}

window.onload = testByISBN;