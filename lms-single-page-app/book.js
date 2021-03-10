let activeBookID = -1;

function initBookList() {
  let bookDetailList = getBookDetailList();
  if (bookDetailList == null || bookDetailList.length == 0) {
    let bookList = [];
    setBookDetailList(bookList);
  }
  renderBookList();
}

function onClickAddBooks(event) {
  let isbn = document.getElementById("isbn");
  let book = document.getElementById("book");
  let author = document.getElementById("author");
  let publisher = document.getElementById("publisher");
  let quantity = document.getElementById("quantity");
  //console.log(isbn.id);

  let bookIdDomList = [isbn, book, author, publisher, quantity];

  let hasValid = checkRequired(bookIdDomList);
  console.log(hasValid);

  if (hasValid) {
    let bookDetailList = getBookDetailList();
    if (activeBookID == -1) {
      bookDetailList.push({
        ID: nextBookID(),
        ISBN: parseInt(isbn.value),
        BOOK: book.value,
        AUTHOR: author.value,
        PUBLISHER: publisher.value,
        QUANTITY: parseInt(quantity.value),
        ISSUEDBOOK: 0,
      });
    } else {
      let editedItem = bookDetailList.find(
        (bookItem) => bookItem.ID == activeBookID
      );
      console.log("editedItem", editedItem);

      editedItem.ISBN = isbn.value;
      editedItem.BOOK = book.value;
      editedItem.AUTHOR = author.value;
      editedItem.PUBLISHER = publisher.value;
      editedItem.QUANTITY = quantity.value;
      editedItem.ISSUEDBOOK = 0;

      activeBookID = -1;
      //change UPDATE btn into ADD btn
      let bookSubmit = document.getElementById("bookSubmit");
      bookSubmit.textContent = "Add Books";
    }
    setBookDetailList(bookDetailList);
  }
  bookIdDomList.forEach((domItem) => (domItem.value = ""));
  renderBookList();
}

//----form validation--------
function checkRequired(bookIdDomList) {
  let hasValid = true;
  bookIdDomList.forEach((domItem) => {
    if (!domItem.value.trim()) {
      hasValid = false;
      showError(domItem, `${domItem.name} is required`);
    } else {
      showSuccess(domItem);
    }
  });
  return hasValid;
}

function showError(domElement, message) {
  let domEl = domElement.parentElement;
  domEl.className = "form-style error";
  let small = domEl.querySelector("small");
  small.innerText = message;
}

function showSuccess(domElement) {
  let domEl = domElement.parentElement;
  domEl.className = "form-style success";
}
//----form validation--------

function renderBookList() {
  let tableBody = document.getElementsByTagName("tbody");

  let bookDetailList = getBookDetailList();
  tableBody[0].innerHTML = bookDetailList
    .map((bookItem) => {
      return `<tr>          
                <td>${bookItem.ID}</td>
                <td>${bookItem.ISBN}</td>
                <td>${bookItem.BOOK}</td>
                <td>${bookItem.AUTHOR}</td>
                <td>${bookItem.PUBLISHER}</td>
                <td>${bookItem.QUANTITY}</td>
                <td>${bookItem.ISSUEDBOOK}</td>
                <td><button><i class="fas fa-edit" data-edit-id="${bookItem.ID}" onclick="editBookList(event)"></i></button></td>
                <td><button><i class="fa fa-trash" data-delite-id="${bookItem.ID}" onclick="deliteBookList(event)"></i></button></td>
                </tr>`;
    })
    .join(" ");
}

function editBookList(e) {
  let isbn = document.getElementById("isbn");
  let book = document.getElementById("book");
  let author = document.getElementById("author");
  let publisher = document.getElementById("publisher");
  let quantity = document.getElementById("quantity");

  let editItemId = e.currentTarget.getAttribute("data-edit-id");
  activeBookID = editItemId;
  console.log(editItemId);

  let bookDetailList = getBookDetailList();
  let findItem = bookDetailList.find((bookItem) => bookItem.ID == editItemId);
  console.log(findItem);

  isbn.value = parseInt(findItem["ISBN"]);
  book.value = findItem["BOOK"];
  author.value = findItem["AUTHOR"];
  publisher.value = findItem["PUBLISHER"];
  quantity.value = parseInt(findItem["QUANTITY"]);

  let bookSubmit = document.getElementById("bookSubmit");
  bookSubmit.textContent = "UPDATE";

  let bookIdDomList = [isbn, book, author, publisher, quantity];
  bookIdDomList.forEach((domItem) => showSuccess(domItem));
}

function deliteBookList(e) {
  let deliteItemId = e.currentTarget.getAttribute("data-delite-id");
  let bookDetailList = getBookDetailList();
  let filteredItem = bookDetailList.filter(
    (bookItem) => bookItem.ID != deliteItemId
  );
  setBookDetailList(filteredItem);
  renderBookList();
}

function setBookDetailList(bookDetailList) {
  localStorage.setItem("bookDetailList", JSON.stringify(bookDetailList));
}

function getBookDetailList() {
  let bookDetailList = JSON.parse(localStorage.getItem("bookDetailList"));
  return bookDetailList;
}

function nextBookID() {
  let bookID = localStorage.getItem("bookID");
  if (bookID == null) {
    bookID = 0;
  }
  bookID++;
  localStorage.setItem("bookID", bookID);
  return bookID;
}
