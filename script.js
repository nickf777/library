// I want an array that contains a collection of object literals of the book class
// To do the above I need a book constructor that takes in author, title, number of pages, read status, and any other info
// I need a function that creates a new book object using Object.create and adds it to the array
// I need a render function that iterates through the array of books and renders them on the page with their own card/information panel
// I need to program a change read status button that changes the read status with a click
// I need to learn and figure out the fundamentals of firebase to make it possible to store the information.
// I need to clean it all up and make it look visually appealing

let myLibrary = [{
    author: "Marie Forleo",
    title: "Everything is Figure-outable",
    numberOfPages: 246,
    readStatus: "Read"
},
{
    author: "Tony Robbins",
    title: "Awaken the Giant Within",
    numberOfPages: 350,
    readStatus: "Read"
}];

function Book(author, title, numberOfPages, readStatus) {
    // the constructor
    this.author = author
    this.title = title
    this.numberOfPages = numberOfPages
    this.readStatus = readStatus
}

// When I click the add new book button
// A window needs to pop up with a form that allows for user input 
// The Book constructor needs to be called with the arguments provided by the form
// That new Book instance needs to have its prototype set as the book
// That new Book instance needs to be added to the array
// The render function needs to be called again 

function addBookToLibrary() {

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