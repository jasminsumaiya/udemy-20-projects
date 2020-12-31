let bookID = 1;
let activeID = -1;
let bookDetailList = [
    {
        "ID": bookID++,
        "ISBN": parseInt(123),
        "BOOK": "javascript",
        "AUTHOR": "smith",
        "PUBLISHER": "Pearson",
        "QUANTITY": parseInt(20)
    },
    {
        "ID": bookID++,
        "ISBN": parseInt(987),
        "BOOK": "JAVA",
        "AUTHOR": "jhonPaul",
        "PUBLISHER": "adam",
        "QUANTITY": parseInt(10)
    }
];

window.addEventListener("load", init);
function init(){
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

    if(hasValid){
        if (activeID == -1) {
            bookDetailList.push(
                {
                    "ID": bookID++,
                    "ISBN": parseInt(isbn.value),
                    "BOOK": book.value,
                    "AUTHOR": author.value,
                    "PUBLISHER": publisher.value,
                    "QUANTITY": parseInt(quantity.value)
                }
            );
        } else {
            let editedItem = bookDetailList.find((bookItem) => bookItem.ID == activeID);
            console.log(editedItem);
            editedItem.ISBN = isbn.value;
            editedItem.BOOK = book.value;
            editedItem.AUTHOR = author.value;
            editedItem.PUBLISHER = publisher.value;
            editedItem.QUANTITY = quantity.value;
            activeID = -1;
            //change UPDATE btn into ADD btn
            let submit = document.getElementById("submit");
            submit.textContent = "Add Books";
        }
    }
    bookIdDomList.forEach((domItem) => domItem.value = "");
    renderBookList();
}

//----form validation--------
function checkRequired(bookIdDomList) {
    let hasValid = true;
    bookIdDomList.forEach((domItem) => {
        if (!domItem.value.trim()) {
            hasValid = false;
            showError(domItem,  `${domItem.name} is required`);
        } else {
            showSuccess(domItem);
        }
    });
    return hasValid;
}

function showError(domElement, message) {
    let domEl = domElement.parentElement;
    domEl.className = "form-control error";
    let small = domEl.querySelector("small");
    small.innerText = message;
}

function showSuccess(domElement) {
    let domEl = domElement.parentElement;
    domEl.className = "form-control success";
}
//----form validation--------

function renderBookList() {
    let tableBody = document.getElementsByTagName("tbody");

    tableBody[0].innerHTML = bookDetailList.map((bookItem) => {
        return `<tr>          
                <td>${bookItem.ID}</td>
                <td>${bookItem.ISBN}</td>
                <td>${bookItem.BOOK}</td>
                <td>${bookItem.AUTHOR}</td>
                <td>${bookItem.PUBLISHER}</td>
                <td>${bookItem.QUANTITY}</td>
                <td></td>
                <td><button><i class="fas fa-edit" data-edit-id="${bookItem.ID}" onclick="editBookList(event)"></i></button></td>
                <td><button><i class="fa fa-trash" data-delite-id="${bookItem.ID}" onclick="deliteBookList(event)"></i></button></td>
                </tr>`
    }).join(" ");        
}

function editBookList(e) {
    let isbn = document.getElementById("isbn");
    let book = document.getElementById("book");
    let author = document.getElementById("author");
    let publisher = document.getElementById("publisher");
    let quantity = document.getElementById("quantity");

    let editItemId = e.currentTarget.getAttribute('data-edit-id');
    activeID = editItemId;

    let filteredItem = bookDetailList.filter((bookItem) => bookItem.ID == editItemId);

    isbn.value = filteredItem["ISBN"];
    book.value = filteredItem["BOOK"];
    author.value = filteredItem["AUTHOR"];
    publisher.value = filteredItem["PUBLISHER"];
    quantity.value = filteredItem["QUANTITY"]; 

    let submit = document.getElementById("submit");
    submit.textContent = "UPDATE";
}

function deliteBookList(e) {
    let deliteItemId = e.currentTarget.getAttribute('data-delite-id');
    let filteredItem = bookDetailList.filter((bookItem) => bookItem.ID != deliteItemId);
    bookDetailList = filteredItem;
    renderBookList();
}