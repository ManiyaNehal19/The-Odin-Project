

class Book {
  constructor(title, author, pagecount, readstatus) {
    this.title = title;
    this.author = author;
    this.pagecount = pagecount;
    this.readstatus = readstatus;
  }

  toggleReadStatus() {
    this.readstatus = !this.readstatus;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(title) {
    this.books = this.books.filter(book => book.title !== title);
  }

  getBooks() {
    return this.books;
  }

  toggleBookStatus(title) {
    const book = this.books.find(book => book.title === title);
    if (book) {
      book.toggleReadStatus();
    }
  }
}

const myLibrary = new Library();

function displayBooks() {
  const container = document.querySelector(".container");
  container.innerHTML = ""; // Clear previous content

  myLibrary.getBooks().forEach(book => {
    const div = document.createElement("div");
    div.classList.add("book");
    div.id = book.title;

    const readStatusText = book.readstatus ? "Read" : "Not Read";

    div.innerHTML = `
      <h2>Title: ${book.title}</h2>
      <p>Author: ${book.author}</p>
      <p>Page Count: ${book.pagecount}</p>
      <p>Status: ${readStatusText}</p>
      <div class="button">
        <button class="toggle">Toggle Read Status</button>
        <button class="delete">Delete</button>
      </div>
    `;

    // Apply inline styles
    div.style.backgroundColor = "#f5f1fb";
    div.style.borderRadius = "23px";
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";
    div.style.flexDirection = "column";
    div.style.paddingBottom = "12px";
    div.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";

    container.appendChild(div);
  });

  attachEventListeners();

  // Style the buttons
  const buttons = document.querySelectorAll("button");
  buttons.forEach(but => {
    but.style.height = "35px";
    but.style.width = "150px";
    but.style.fontSize = "15px";
    but.style.color = "white";
    but.style.border = "none";
    but.style.borderRadius = "23px";

    if (but.innerHTML === "Toggle Read Status") {
      but.style.backgroundColor = "#ff7ea5";
    } else {
      but.style.backgroundColor = "#20deff";
    }
  });
}

function attachEventListeners() {
  const toggleButtons = document.querySelectorAll(".toggle");
  toggleButtons.forEach(button => {
    button.addEventListener("click", event => {
      const bookTitle = event.target.closest(".book").id;
      myLibrary.toggleBookStatus(bookTitle);
      displayBooks();
    });
  });

  const deleteButtons = document.querySelectorAll(".delete");
  deleteButtons.forEach(button => {
    button.addEventListener("click", event => {
      const bookTitle = event.target.closest(".book").id;
      myLibrary.removeBook(bookTitle);
      displayBooks();
    });
  });
}

// Form handling
const bookFormDialog = document.getElementById("bookFormDialog");
const addNewButton = document.querySelector(".add-new");
const form = document.getElementById("bookForm");

addNewButton.style.backgroundColor = "#5c3882";
addNewButton.addEventListener("click", () => {
  bookFormDialog.showModal();
});

form.addEventListener("submit", event => {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = parseInt(document.getElementById("pages").value, 10);
  const read = document.getElementById("read").checked;

  const newBook = new Book(title, author, pages, read);
  myLibrary.addBook(newBook);

  form.reset();
  bookFormDialog.close();
  displayBooks();
});

// Initial book list
myLibrary.addBook(new Book("Billy Summer", "Stephen King", 300, false));
myLibrary.addBook(new Book("1984", "George Orwell", 328, true));
myLibrary.addBook(new Book("The Catcher in the Rye", "J.D. Salinger", 277, false));
myLibrary.addBook(new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, true));
myLibrary.addBook(new Book("To Kill a Mockingbird", "Harper Lee", 281, false));
myLibrary.addBook(new Book("Moby Dick", "Herman Melville", 635, true));
myLibrary.addBook(new Book("Pride and Prejudice", "Jane Austen", 432, false));
myLibrary.addBook(new Book("The Hobbit", "J.R.R. Tolkien", 310, true));

displayBooks();
