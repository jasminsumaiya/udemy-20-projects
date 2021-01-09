window.addEventListener('load', init);
//let issuedID = 0;
//let issuedList = [];

function init() {
    let userDropdown = document.getElementById("user-dropdown");
    let userDetailList = getUserDetailList();

    let userOptionList = userDetailList.map((userDetail) => `<option value=${userDetail.ID}>${userDetail.USERNAME}</option>`);
    userOptionList.unshift(`<option>User</option>`);

    userDropdown.innerHTML = userOptionList.join(" ");

    //////////////

    let bookDropdown = document.getElementById("book-dropdown");
    let bookDetailList = getBookDetailList();

    let bookOptionList = bookDetailList.map((bookDetail) => `<option value=${bookDetail.ID}>${bookDetail.BOOK}</option>`);
    bookOptionList.unshift(`<option>Book</option>`);

    bookDropdown.innerHTML = bookOptionList.join(" ");

    //////////////

    let issuedBookMaper = getIssuedBookMaper();
    if (issuedBookMaper == null) {
        let issuedMaper = {};
        setIssuedBookMaper(issuedMaper);
    }

    rendeIssuedList();
}

function getUserDetailList() {  
    let userDetailList = JSON.parse(localStorage.getItem('userDetailList'));
    return userDetailList;
}

function getBookDetailList() {
    let bookDetailList = JSON.parse(localStorage.getItem('bookDetailList'));
    return bookDetailList;
}

function setBookDetailList(bookDetailList) {
    localStorage.setItem('bookDetailList', JSON.stringify(bookDetailList));
}

/////////////get and set the values of issued page items

function getIssuedBookMaper() {
    let issuedBookMaper = JSON.parse(localStorage.getItem('issuedBookMaper'));
    return issuedBookMaper;
}

function setIssuedBookMaper(issuedMaper) {
    localStorage.setItem('issuedBookMaper', JSON.stringify(issuedMaper));
}

function onClickAddUser(e) {
    let userDropdown = document.getElementById("user-dropdown");
    let bookDropdown = document.getElementById("book-dropdown");
    let countDom = document.getElementById("count");

    let domElList = [userDropdown, bookDropdown, countDom];
    let hasValid = checkRequired(domElList);
    if (hasValid != true) {
        return;
    }

    let bookDetailList = getBookDetailList();

    let selectedBookData = bookDetailList.find((bookDEtail) => bookDEtail.ID == bookDropdown.value);
    console.log(selectedBookData);

    let givenCount = parseInt(countDom.value);
    let currentQuantity = parseInt(selectedBookData.QUANTITY) - parseInt(selectedBookData.ISSUEDBOOK);
    console.log(currentQuantity);

    if (givenCount > currentQuantity) {
        showError(countDom, `count exceeds the limit ${currentQuantity}`);
        countDom.value = 0;
        return;
    } 
    showSuccess(countDom);

    let newIssueBookCount = parseInt(selectedBookData.ISSUEDBOOK) + parseInt(countDom.value);
    console.log(newIssueBookCount);

    selectedBookData.ISSUEDBOOK = newIssueBookCount;
    setBookDetailList(bookDetailList);

    //////////

    let key = userDropdown.value;
    let issuedBookMaper = getIssuedBookMaper(); //{}
    let issuedBookKey = bookDropdown.value;
    //////////   issuedBookMaper[key] = [];
    let neededData = { bookid: issuedBookKey, count: givenCount };
    //if false means creat new array or push the value in to the array
    if (issuedBookMaper[key]) {
        let bookList = issuedBookMaper[key];
        let existingBook = bookList.find((book) => book.bookid == issuedBookKey);
        if(existingBook){
            existingBook.count += givenCount;
        } else {
            issuedBookMaper[key].push(neededData);
        }
    } else {
        let bookList = [neededData];
        issuedBookMaper[key] = bookList;
    }
    console.log(issuedBookMaper);

    setIssuedBookMaper(issuedBookMaper);

    rendeIssuedList();
}

function rendeIssuedList(){
    let tableBody = document.getElementsByTagName("tbody");

    let issuedBookMaper = getIssuedBookMaper();  //{}
    let userDetailList = getUserDetailList();    //[]
    let bookDetailList = getBookDetailList();    //[]
    let newDomList = [];
    let slNo = 1;

    for(var key in issuedBookMaper){
        let newUser = userDetailList.find((user) => user.ID == key);
        
        let bookIssueList = issuedBookMaper[key]; //[]

        let newBookList = bookIssueList.map((item) => {
            let book = bookDetailList.find((book) => book.ID == item.bookid);
            return `<li>${book.BOOK} - ${item.count}</li>`;
        }).join(" ");
        console.log(newBookList);

        newDomList.push(`<tr>
                            <td>${slNo++}</td>
                            <td>${newUser.USERNAME}</td>
                            <td><ul>${newBookList}</ul></td>
                        </tr>`);
    };

    tableBody[0].innerHTML = newDomList.join(" ");
}

//----form validation--------
function checkRequired(domElList) {
    let hasValid = true;
    domElList.forEach((domItem) => {
        if (!domItem.value.trim() || domItem.value.trim() == "User" || domItem.value.trim() == "Book") {
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
    domEl.classList.add('error');
    let small = domEl.querySelector("small");
    small.innerText = message;
}

function showSuccess(domElement) {
    let domEl = domElement.parentElement;
    domEl.classList.remove('error');
    domEl.classList.add('success');
}

//----form validation--------