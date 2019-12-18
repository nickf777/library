// I want an array that contains a collection of object literals of the book class
// To do the above I need a book constructor that takes in author, title, number of pages, read status, and any other info
// I need a function that creates a new book object using Object.create and adds it to the array
// I need a render function that iterates through the array of books and renders them on the page with their own card/information panel
// I need to program a change read status button that changes the read status with a click
// I need to learn and figure out the fundamentals of firebase to make it possible to store the information.
// I need to clean it all up and make it look visually appealing

let myLibrary = [];

function Book(author, title, numberOfPages, readStatus) {
    // the constructor
    this.author = author
    this.title = title
    this.numberOfPages = numberOfPages
    this.readStatus = readStatus
}


function addBookToLibrary() {
    let table = document.getElementById("library");
    let author = document.getElementById("author").value;
    let title = document.getElementById("title").value;
    let numberPages = document.getElementById("numberPages").value;
    let hasRead = document.querySelector("input[name=readStatus]:checked").value;
    let newBook = new Book(author, title, numberPages, hasRead);
    let html = "<tr><th>Author</th><th>Title</th><th>Number of Pages</th><th>Read Status</th></tr>"
    myLibrary.push(newBook);
    // To reset the table headings
    table.innerHTML = html;
    let addNewBook = document.getElementById("addNewBook");
    if (addNewBook.style.display === "none") {
        addNewBook.style.display = "block"
    } else {
        addNewBook.style.display = "none"
    }
    render()
}


function render() {
    myLibrary.forEach(book => {
        let table = document.getElementById("library");
        let newRow = document.createElement("tr");
        let author = document.createElement("td")
        author.innerHTML = book.author;
        let title = document.createElement("td");
        title.innerHTML = book.title;
        let numberOfPages = document.createElement("td");
        numberOfPages.innerHTML = book.numberOfPages;
        let readStatus = document.createElement("td");
        readStatus.innerHTML = book.readStatus;
        newRow.append(author, title, numberOfPages, readStatus);
        table.appendChild(newRow);
    })
}

window.addEventListener("load", render);

let addNewButton = document.getElementById("addNewButton")
addNewButton.addEventListener("click", function() {
    let addNewBook = document.getElementById("addNewBook");
    if (addNewBook.style.display === "none") {
        addNewBook.style.display = "block"
    } else {
        addNewBook.style.display = "none"
    }
})

document.getElementById("submit").addEventListener("click", addBookToLibrary);