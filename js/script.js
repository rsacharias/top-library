const myLibrary = [];

function Book(title, author, pages, read) {
  const id = crypto.randomUUID();

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    let output = `${id}: ${this.title} by ${this.author}, ${this.pages} pages, `;
    output += read ? `finished reading` : `not read yet`;
    return output;
  };
}

function addBookToLibrary(title, author, pages) {
  myLibrary.push(new Book(title, author, pages, false));
}
