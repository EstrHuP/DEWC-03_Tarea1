"use strict";

// ISBN-10 o ISBN-13 con guiones
const ISBN_REGEX = /^(97(8|9))?\d{1,5}-\d{1,7}-\d{1,7}-[\dX]$/;
const MAX_ELEMENT_LIST = 4;

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

function addBook(list, elem) {
    // Check the book element have a good ISBN
 //   if (!isValidBookFormat(elem)) throw "The element ISBN isn't valid";
    if (!elem.title || !elem.ISBN) throw "The element isn't a valid book";

    // Check the list isn't full
    if (isFull(list)) throw "The list is full";
    else list.push(elem);

    // Save the list in the sizeList
    return sizeList(list);
}

function addBookAt(list, elem, index) {
    if (!elem.title || !elem.ISBN) throw "The element isn't a valid book";
    if (index < 0 || index > list.length) throw "Index is out of bounds";
    if (isFull(list)) throw "The list is full";

    list.splice(index, 0, elem);
    return sizeList(list);
}

function get(list, index) {
    //TODO
}

// Return elements with "-"
function toString(list) {
    return list.reduceRight(function(str, item, index) {
        return (index !== list.length - 1) ? str + " - " + item.author : str + item.author; // order by last author to first author
    }, "");
}

// Return element position
// Element doesn't exists -> return -1
// Check ISBN
function indexOf(list, elem) {
    // TODO: - check books?
}

// Return last element position starting with the endend
// Element doesn't exists -> return -1
// Check ISBN
function lastIndexOf(list, elem) {
 // TODO
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
    // TODO
}

// Remove element in the list
// Return true -> removed
// Return false -> not removed
function removeElement(list, elem) {
    if (!elem.title || !elem.ISBN) throw "The element isn't a valid book";
    // TODO
}

// Replace element to index.
// Return the old element in the list
function set(list, elem, index) {
    if (!elem.title || !elem.ISBN) throw "The element isn't a valid book";
    // TODO
}

function testBook() {
    console.log("Starting tests....")

    let bookList = create();

    console.log("Capacity: "+ capacity());
    console.log("List is emtpy: " + isEmpty(bookList));
    console.log("List is full: " + isFull(bookList));
    console.log("Size list: " + sizeList(bookList));

    const book1 = {
        ISBN: 978-84-9804-654-0,
        title: "El Quijote",
        author: "Miguel de Cervantes",
        publicationDate: new Date(1605, 0, 1),
        price: 20,
    }
    const book2 = {
        ISBN: 978-84-9804-633-0,
        title: "El Quijote Retorna",
        author: "Miguel de Turbantes",
        publicationDate: new Date(1605, 0, 1),
        price: 20,
    }

    // Ivalid book 1 -> missing title
    const invalidBook1 = {
        ISBN: 978-84-9804-654-0,
        author: "Estopa",
    }
     // Ivalid book 2 -> missing ISBN
    const invalidBook2 = {
        author: "cri cri",
        title: "Return error",
    }

    console.log("Adding book 1: " + addBook(bookList, book1));
    console.log("Adding book 2: " + addBook(bookList, book2));

    try {
        // Missing title
        console.log("Trying add invalid book without title...");
        addBook(bookList, invalidBook1);

        // Missing ISBN
        console.log("Trying add invalid ISBN book...");
        addBook(bookList, invalidBook2);

        // Add at: out of index
        console.log("Trying add book at index 3....");
        addBookAt(bookList, book2, 3)
    } catch(error) {
        console.log(error);
    }

    console.log("Book list with string by author: " + toString(bookList));

    console.log("First element: " + firstElement(bookList));
    console.log("Last element: " + lastElement(bookList));
}


/*

function create() {
    return [];
}

function capacity() {
    return MAX_ElEMENT_STACK;
}

function isEmpty(stack) {
    return (stack.length === 0);
}

function isFull(stack) {
    return (stack.length === MAX_ElEMENT_STACK);
}

function size(stack) {
    return stack.length;
}

function push(stack, elem) {
    elem = Number.parseInt(elem);
    if (Number.isNaN(elem)) {
        throw "The element isn't a number.";
    }
    if (!isFull(stack)) {
        stack.push(elem);
    } else {
        throw "The stack is full.";
    }

    return size(stack);
}

function toString(stack) {
    return stack.reduceRight(function(str, item, index) {
        return (index !== stack.length - 1) ? str + " - " + item : str + item;
    }, "");
}

function firstElement(stack) {
    if (isEmpty(stack)) throw "The stack is empty";
    return stack[0];
}

function lastElement(stack) {
    if (isEmpty(stack)) throw "The stack is empty";
    return stack.length - 1;
}

function search(stack, elem) {
    elem = Number.parseInt(elem);
    if (Number.isNaN(elem)) {
        throw "The element isn't a number.";
    }
    if (isEmpty(stack)) throw "The stack is empty";

    return stack.findIndex(function (item) {
        return item === elem;
    });
}

function peek(stack) {
    if (isEmpty(stack)) throw "The stack is empty";
    return stack[stack.length - 1];
}

function pop(stack) {
    if (isEmpty(stack)) throw "The stack is empty";
    return stack.pop(); // Elimina el ultimo elemento de la pila
}

function clear(stack) {
    stack.splice(0, stack.length); // Elimina todos los elementos dentro de la pila
}

function testStack() {
    let stack = create();

    console.log("Capacidad: "+ capacity());
    console.log("Es vacio: " + isEmpty(stack));
    console.log("Esta lleno: " + isFull(stack));
    console.log("Tamaño: " + size(stack));

    try {
        for (let i = 0; i < MAX_ElEMENT_STACK; i++){
            console.log("n elementos: " + push(stack, i));
        }
        push(stack, 999)
    } catch(error) {
        console.log(error)
    }

    console.log(toString(stack));
    console.log(firstElement(stack));
    console.log(lastElement(stack));

    console.log("Posicion de elemento 3: " + search(stack, 3));
    console.log("Posicion de elemento -3: " + search(stack, -3));

    try {
        while(true) {
            console.log("Peek: " + peek(stack));
            console.log("Pop: " + pop(stack));
            console.log(toString(stack));
        }
    } catch (error) {
        console.log(error);
    }
} */

window.onload = testBook;