// DOM link to the body of the HTML
let body = document.querySelector("body");

// Setting up Library array
const myLibrary = [];

// Constructor function for the books
// function Book(title, author, noPages, hasRead) {
//     this.title = title;
//     this.author = author;
//     this.noPages = noPages;
//     this.hasRead = hasRead;
//     this.info = function () {
//         if (hasRead === "no".toLowerCase()) {
//             console.log(`${this.title} by ${this.author}, ${this.noPages} pages, not read yet.`)
//     } else {
//             console.log(`${this.title} by ${this.author}, ${this.noPages} pages, has read.`)
//     }
// }}

class Book {
    constructor(title, author, noPages, hasRead) {
        this.title = title;
        this.author = author;
        this.noPages = noPages;
        this.hasRead = hasRead;
    }
}

// Define some new books
const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 400, "no");
const theWhale = new Book("The Whale", "Whaley Jeremiah", 24, "yes");
const theHedgehog = new Book ("The Hedgehog", "Hedgey J", 402, "yes");
const massiveChungus = new Book ("The Massive Chungus", "Chung Dilla", 10000, "yes");

function addBookToLibrary (book) {
    myLibrary.push(book)
}

// Add the books
addBookToLibrary(theHobbit);
addBookToLibrary(theWhale);
addBookToLibrary(theHedgehog);
addBookToLibrary(massiveChungus);

let table = document.getElementById("table");

// Making the display in the DOM
function bookDisplay () {

    // Looping through the length of library...
    for (let i = 0; i < myLibrary.length; i++) {

        // Creating a row and 5 empty cells
        let row = document.createElement("tr");
        row.setAttribute("class", "tableRow");
        row.setAttribute("data-row", i);
        let c1 = document.createElement("td");
        let c2 = document.createElement("td");
        let c3 = document.createElement("td");
        let c4 = document.createElement("td");
        let c5 = document.createElement("td");
        
        let removeButton = document.createElement("button");
        removeButton.setAttribute("data-button", i);
        removeButton.setAttribute("class", "remove-button");
        removeButton.addEventListener("click", () => {
            removeBook(i, row);
        })

        // Putting text in the cells corresponding to the book details
        c1.innerText = myLibrary[i].title;
        c2.innerText = myLibrary[i].author;
        c3.innerText = myLibrary[i].noPages;
        c4.innerText = myLibrary[i].hasRead;
        c5.appendChild(removeButton);

        // Attaching the cells to the row 
        row.appendChild(c1);
        row.appendChild(c2);
        row.appendChild(c3);
        row.appendChild(c4);
        row.appendChild(c5);

        // Attaching the row to the table
        table.appendChild(row);
    }
}

function removeBook(i, row) {
    myLibrary.splice(i, 1);
    table.removeChild(row);
}

// Updating the display to show default books
bookDisplay();

// Making a button to add a new book entry
let newBookButton = document.createElement("button");
newBookButton.classList.add("newBook");
newBookButton.textContent = "Add New Book";
body.appendChild(newBookButton);

// Making the form appear only after you have clicked the button
newBookButton.addEventListener("click", generateForm);

function generateForm () {

    // Decided to make this form in JS rather than HTML for practice...
    let newBookForm = document.createElement("form");
    newBookForm.setAttribute("method", "post");
    newBookForm.setAttribute("id", "newForm");

    // Setting up each input & label element on the DOM
    let titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "title-input");
    titleInput.setAttribute("name", "book-form");
    let titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "title-input");
    titleLabel.innerText = "Title";

    let authorInput = document.createElement("input");
    authorInput.setAttribute("type", "text");
    authorInput.setAttribute("id", "author-input");
    authorInput.setAttribute("name", "book-form");
    let authorLabel = document.createElement("label");
    authorLabel.setAttribute("for", "author-input");
    authorLabel.innerText = "Author";

    let noPagesInput = document.createElement("input");
    noPagesInput.setAttribute("type", "text");
    noPagesInput.setAttribute("id", "no-pages-input");
    noPagesInput.setAttribute("name", "book-form");
    let noPagesLabel = document.createElement("label");
    noPagesLabel.setAttribute("for", "no-pages-input");
    noPagesLabel.innerText = "Number of pages";

    let hasReadInput = document.createElement("input");
    hasReadInput.setAttribute("type", "radio");
    hasReadInput.setAttribute("id", "has-read-input");
    hasReadInput.setAttribute("name", "book-form");
    let hasReadLabel = document.createElement("label");
    hasReadLabel.setAttribute("for", "has-read-input");
    hasReadLabel.innerText = "Has read";

    let submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("id", "submit-button");
    submitButton.innerText = "Submit";

    // Adding them all to the form
    newBookForm.appendChild(titleLabel);
    newBookForm.appendChild(titleInput);
    newBookForm.appendChild(authorLabel);
    newBookForm.appendChild(authorInput);
    newBookForm.appendChild(noPagesLabel);
    newBookForm.appendChild(noPagesInput);
    newBookForm.appendChild(hasReadLabel);
    newBookForm.appendChild(hasReadInput);
    newBookForm.appendChild(submitButton);
    body.appendChild(newBookForm);

    submitButton.addEventListener("click", storeValues);
}

function storeValues (event) {
    // Stopping the auto submit
    event.preventDefault();

    // Capturing the values in the form boxes as variables
    let newTitle = document.getElementById("title-input").value;
    let newAuthor = document.getElementById("author-input").value;
    let newNoPages = document.getElementById("no-pages-input").value;
    let newHasRead = document.getElementById("has-read-input").checked ? "yes" : "no";

    // Entering them as a new book into our library
    const newBook = new Book(newTitle, newAuthor, newNoPages, newHasRead);
    addBookToLibrary(newBook);
    newForm.innerHTML = "";

    // Removing all the existing rows before updating the display
    let bookRows = document.getElementsByClassName("tableRow");
    while (bookRows.length > 0) {
        bookRows[0].remove()
    }
    bookDisplay();
}

