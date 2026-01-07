"use strict";

const MAX_ELEMENT_LIST = 3;

function create() {
    return [];
}

function isEmpty(list) {
    return (list.length === 0);
}

function isFull(list) {
    return (list.length === MAX_ELEMENT_LIST);
}

function sizeList(list) {
    return list.length;
}

function isValidBookFormat(elem) {
    return ISBN_REGEX.test(elem.ISBN);
}

function add(list, elem) {
    if (!elem.title || !elem.ISBN) throw "The element isn't a valid book";
    if (isFull(list)) throw "The list is full";

    let isInserted = false;
    for(let i = 0; i < list.length; i++) {
        if (elem.ISBN < list[i].ISBN) {
            list.splice(i, 0, elem); // insert index
            isInserted = true;
            break;
        }
    }
    if (!isInserted) list.push(elem);
    return sizeList(elem);
}

function get(list, index) {
    if (index < 0 || index > list.length) throw "Index is out of bounds";
    return list[index]
}

// Return elements with "-"
function toString(list) {
    return list.reduceRight(function(str, item, index) {
        return (index !== list.length - 1) ? str + " - " + item : str + item;
    }, "");
}

// Return element position
// Element doesn't exists -> return -1
// Check ISBN
function indexOf(list, elem) {
    if (!elem.title || !elem.ISBN) throw "The element isn't a valid book";

    for (let i = 0; i < list.length; i++) {
        if (list[i].ISBN === elem.ISBN) {
            return i;
        }
    }
    return -1;
}

function capacity() {
    return MAX_ELEMENT_LIST;
}

function clear() {
    list.splice(0, stackDiv.length); //Remove all elements list
}

function firstElement(list) {
    if (isEmpty(list)) throw "The list is empty";
    return list[0].author; // return the first position with author
}

function lastElement(list) {
    if (isEmpty(list)) throw "The list is empty";
    return list.length - 1; // return the last position
}

// Remove index in the list
// Return element removed
function remove(list, index) {
    if (index < 0 || index > list.length) throw "Index is out of bounds";
    return list.splice(index, 1)[0].ISBN;
}

// Remove element in the list
// Return true -> removed
// Return false -> not removed
function removeElement(list, elem) {
    if (!elem.title || !elem.ISBN) throw "The element isn't a valid book";
    try {
        list.splice(index, 1);
        return true; 
    } catch(error) {
        console.error("Error removing element: " + error);
        return false;
    }
}

function testByISBN() {
    console.log("Starting tests....")

    let bookList = create();

    console.log("Capacity: "+ capacity());
    console.log("List is emtpy: " + isEmpty(bookList));
    console.log("List is full: " + isFull(bookList));
    console.log("Size list: " + sizeList(bookList));

    const book1 = {
        ISBN: "999-84-9804-654-0",
        title: "El Quijote",
        author: "Miguel de Cervantes",
        publicationDate: new Date(1605, 0, 1),
        price: 20,
    }
    const book2 = {
        ISBN: "999-11-9804-633-0",
        title: "El Quijote Retorna",
        author: "Miguel de Turbantes",
        publicationDate: new Date(1605, 0, 1),
        price: 20,
    }
    const book3 = {
        ISBN: "999-85-9804-677-0",
        title: "El Quijote 3",
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
        console.log("Trying to add a book when the list is full...");
        const book3 = {
            ISBN: 978-84-9804-777-7,
            title: "El Quijote del Futuro",
            author: "Autor Desconocido",
            publicationDate: new Date(2025, 0, 1),
            price: 30,
        };
        add(bookList, book3);
    } catch (error) {
        console.log("Error: " + error);
    }

    console.log("List is emtpy: " + isEmpty(bookList));
    console.log("List is full: " + isFull(bookList));
}

window.onload = testByISBN;