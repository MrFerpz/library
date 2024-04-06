// DOM link to the body of the HTML
let body = document.querySelector("body");

// Setting up Library array
const myLibrary = [];

// Constructor function for the books
function Book(title, author, noPages, hasRead) {
    this.title = title;
    this.author = author;
    this.noPages = noPages;
    this.hasRead = hasRead;
    this.info = function () {
        if (hasRead === "no".toLowerCase()) {
            console.log(`${this.title} by ${this.author}, ${this.noPages} pages, not read yet.`)
    } else {
            console.log(`${this.title} by ${this.author}, ${this.noPages} pages, has read.`)
    }
}}

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

// Making the display in the DOM
function bookDisplay () {
    // Accessing the table
    let table = document.getElementById("table");

    // Looping through the length of library...
    for (let i = 0; i < myLibrary.length; i++) {

        // Creating a row and 4 empty cells
        let row = document.createElement("tr");
        let c1 = document.createElement("td");
        let c2 = document.createElement("td");
        let c3 = document.createElement("td");
        let c4 = document.createElement("td");

        // Putting text in the cells corresponding to the book details
        c1.innerText = myLibrary[i].title;
        c2.innerText = myLibrary[i].author;
        c3.innerText = myLibrary[i].noPages;
        c4.innerText = myLibrary[i].hasRead;

        // Attaching the cells to the row 
        row.appendChild(c1);
        row.appendChild(c2);
        row.appendChild(c3);
        row.appendChild(c4);

        // Attaching the row to the table
        table.appendChild(row);
    }
}

bookDisplay();

let newBookButton = document.createElement("button");
newBookButton.classList.add("newBook");
newBookButton.textContent = "Add New Book";
body.appendChild(newBookButton);

function generateForm () {

    // Decided to make this form in JS rather than HTML for practice...
    let newBookForm = document.createElement("form");
    newBookForm.setAttribute("method", "post");
    newBookForm.setAttribute("action", "submit.php");

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
    noPagesInput.setAttribute("type", "number");
    noPagesInput.setAttribute("id", "no-pages-input");
    noPagesInput.setAttribute("name", "book-form");
    let noPagesLabel = document.createElement("label");
    noPagesLabel.setAttribute("for", "no-pages-input");
    noPagesLabel.innerText = "Number of pages";

    let hasReadInput = document.createElement("input");
    hasReadInput.setAttribute("type", "radio");
    noPagesInput.setAttribute("id", "has-read-input");
    noPagesInput.setAttribute("name", "book-form");
    let hasReadLabel = document.createElement("label");
    hasReadLabel.setAttribute("for", "has-read-input");
    hasReadLabel.innerText = "Has read";

    newBookForm.appendChild(titleLabel);
    newBookForm.appendChild(titleInput);
    newBookForm.appendChild(authorLabel);
    newBookForm.appendChild(authorInput);
    newBookForm.appendChild(noPagesLabel);
    newBookForm.appendChild(noPagesInput);
    newBookForm.appendChild(hasReadLabel);
    newBookForm.appendChild(hasReadInput);
    body.appendChild(newBookForm);
}

newBookButton.addEventListener("click", generateForm)