const myLibrary = [];


const ShowButton = document.getElementById("OpenAdd");
const dialog = document.querySelector("dialog");
const closeButton = document.getElementById("close");
const outputBox = document.querySelector("output");
const form = document.getElementById("formBook");

ShowButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  form.reset();
  dialog.close("closedByUser");
  
});


function Book(author, title, numpages, read) {
  // the constructor...
  this.author = author;
  this.title = title;
  this.numpages = numpages;
  this.read = read;

  this.change_read = function(){
    this.read = this.read ? false : true;
  }
}


function add_display(book){
  const template = document.querySelector("#book-template");
  const grid = document.getElementById("contents_book");
  const number_of_books = document.getElementById("total_books");

  const clone = template.content.cloneNode(true);
  const meow = clone.querySelector(".meow");
  const inside = meow.querySelector(".lol");
  const button_divs = meow.querySelector(".button_divs");

  inside.querySelector(".text-title").textContent = book.title;
  inside.querySelector(".text-author").textContent = book.author;
  inside.querySelector(".text-pages").textContent = book.numpages;

  const deleters = button_divs.querySelector(".deletes");
  const have_read = button_divs.querySelector(".Have_Read");

  if (book.read){
    have_read.style.backgroundColor = 'rgba(0, 176, 88, 0.86)';
    have_read.textContent = "Done Reading";
  } else{
    have_read.style.backgroundColor = '#ec7a45';
    have_read.textContent = "Not yet read";
  }


  grid.appendChild(clone);

  number_of_books.textContent = myLibrary.length;

  deleters.addEventListener("click", ()=>{
    myLibrary.pop(book);
    number_of_books.textContent = myLibrary.length;
    grid.removeChild(meow);
    console.log(myLibrary);
  });

  have_read.addEventListener("click", () => {
    book.change_read();
    if (book.read){
      have_read.style.backgroundColor = 'rgba(0, 176, 88, 0.86)';
      have_read.style.border = '1px solid rgb(0, 106, 37)';
      have_read.textContent = "Done Reading";
    } else{
      have_read.style.backgroundColor = '#ec7a45';
      have_read.style.border = '1px solid rgb(215, 56, 16)';
      have_read.textContent = "Not yet read";
    }

  });
}

function addBookToLibrary(author, title, numpages, read) {
  // take params, create a book then store it in the array
  const newBook = new Book(author, title, numpages, read);
  
  myLibrary.push(newBook);
  add_display(newBook);
  console.log(myLibrary);
}




document.querySelector("#AddBook").addEventListener("click", (event)=>{
  event.preventDefault();
  const form = document.querySelector('#formBook');
  if (form.checkValidity()){
    const author = document.querySelector('input[name="author"]').value;
    const title = document.querySelector('input[name="title"]').value;
    const pages = document.querySelector('input[name="pages"]').value;
    const read = document.querySelector('#read').checked;

    addBookToLibrary(author, title, pages, read);

    dialog.close()
    form.reset();
  } else{
    form.reportValidity();
  }

  

});


