const myLibrary = [
  {
    title: "Billy Summer",
    author: "Stephen King",
    pagecount: 300,
    readstatus: false
  },
  {
    title: "1984",
    author: "George Orwell",
    pagecount: 328,
    readstatus: true
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    pagecount: 277,
    readstatus: false
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pagecount: 180,
    readstatus: true
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pagecount: 281,
    readstatus: false
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    pagecount: 635,
    readstatus: true
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    pagecount: 432,
    readstatus: false
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pagecount: 310,
    readstatus: true
  }
];



function Book(title, author, pagecount, readstatus) {
  this.title  = title;
  this.author = author;
  this.pagecount= pagecount;
  this.readstatus=readstatus;

}

function addBookToLibrary(title, author, pagecount, readstatus) {
  const book = new Book(title, author, pagecount, readstatus);
  myLibrary.push(book);
}


function displaybook() {
  const leng = myLibrary.length;
  const container = document.querySelector(".container");
  let readstat;
  container.innerHTML = ""; // Clear the container before re-rendering the books

  for (let i = 0; i < leng; i++) {
    const div = document.createElement("div");
    div.classList.add("book");
    div.id = `${myLibrary[i].title}`;
    readstat = myLibrary[i].readstatus ? "Read" : "Not Read";

    div.innerHTML = `
      <h2>Title: ${myLibrary[i].title}</h2>
      <p>Author: ${myLibrary[i].author}</p>
      <p>Page Count: ${myLibrary[i].pagecount}</p>
      <p>Status: ${readstat}</p>
      <div class="button"> 
        <button class="toggle">Toggle Read Status</button>
        <button class="delete">Delete</button>
      </div>
    `;
    
    container.appendChild(div); // Append the div element to the container
  }


  const toggleButtons = document.querySelectorAll(".toggle");
  toggleButtons.forEach((toggleButton, index) => {
    toggleButton.addEventListener("click", () => {
      myLibrary[index].readstatus = !myLibrary[index].readstatus;
      displaybook();
    });
  });
  const deleteButtons = document.querySelectorAll(".delete");
  deleteButtons.forEach((delButton) => {
    delButton.addEventListener("click", () => {
      const bookDiv = delButton.closest(".book");  
      const bookId = bookDiv.id; 
      const bookIndex = myLibrary.findIndex((book) => book.title === bookId);
  
      if (bookIndex !== -1) {
        myLibrary.splice(bookIndex, 1);  
        displaybook(); 
      }
    });
  });
  // Styling the books
  const divbook = document.querySelectorAll(".book");
  divbook.forEach((book) => {
    book.style.backgroundColor = "#f5f1fb";
    book.style.borderRadius = "23px";
    book.style.display = "flex";
    book.style.alignItems = "center";
    book.style.justifyContent = "center";
    book.style.flexDirection = "column";
    book.style.paddingBottom = "12px";
    book.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
  });

  // Style the buttons
  const buttons = document.querySelectorAll("button");
  buttons.forEach((but) => {
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

displaybook();
const bookFormDialog = document.getElementById("bookFormDialog");
const addNew = document.querySelector(".add-new");
const forms = document.getElementById("bookForm");
addNew.style.backgroundColor = "#5c3882";
addNew.addEventListener("click", ()=>{
  bookFormDialog.showModal();
})
forms.addEventListener("submit", (event)=>{
  event.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;
  addBookToLibrary(title, author, pages, read);
  forms.reset();
  bookFormDialog.close();
displaybook();
addNew.style.backgroundColor = "#5c3882";

})
