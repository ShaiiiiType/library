const myLibrary = [];

function Book(author, title, numpages) {
  // the constructor...
  this.author = author;
  this.title = title;
  this.numpages = numpages;
}

function addBookToLibrary(author, title, numpages) {
  // take params, create a book then store it in the array
  const newBook = new Book(author, title, numpages);
  myLibrary.push(newBook);
  console.log(myLibrary);
}


document.querySelector("#AddBook").addEventListener("click", ()=>{
  const author = document.querySelector('input[name="author"]').value;
  const title = document.querySelector('input[name="title"]').value;
  const pages = document.querySelector('input[name="pages"]').value;

  addBookToLibrary(author, title, pages);
});

