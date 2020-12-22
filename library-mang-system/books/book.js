let bookDetailList = [];
let bookID = 1;

function onClickAddBooks(event) {
    let isbn = document.getElementById("isbn");
    let book = document.getElementById("book");
    let author = document.getElementById("author");
    let publisher = document.getElementById("publisher");
    let quantity = document.getElementById("quantity");

    console.log(isbn.id);

    let bookIdDomList = [isbn, book, author, publisher, quantity];

    let hasValid = checkRequired(bookIdDomList);
    console.log(hasValid);

    if(hasValid){
        bookDetailList.push(
            {"ID": bookID++,
            "ISBN": isbn.value,
            "BOOK": book.value,
            "AUTHOR": author.value,
            "PUBLISHER": publisher.value,
            "QUANTITY": quantity.value}
        );
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
    let table = document.getElementById("table-body");
    var row = document.createElement("tr");
    var cell = document.createElement("td");

    table.innerHTML = bookDetailList.map((bookItem) => {
        return `<tr>          
                <td>${bookItem.ID}</td>
                <td>${bookItem.ISBN}</td>
                <td>${bookItem.BOOK}</td>
                <td>${bookItem.AUTHOR}</td>
                <td>${bookItem.PUBLISHER}</td>
                <td>${bookItem.QUANTITY}</td>
                <td><button><i class="fas fa-edit"></i></button></td>
                </tr>`
    }).join(" ");
                        
}