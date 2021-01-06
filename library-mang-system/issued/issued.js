window.addEventListener('load', init);
let issuedID = 1;
let issuedList = [];

function init(){
    let userDropdown =  document.getElementById("user-dropdown");
    let userDetailList = getUserDetailList();
    console.log(userDetailList);
    
    let userOptionList = userDetailList.map((userDetail) => userDetail.USERNAME);
    userOptionList.unshift("User");
    console.log(userOptionList);

    userDropdown.innerHTML = userOptionList.map((user) => {
        return `<option>${user}</option>`   //disabled selected value
    }).join(" ");

    //////////////

    let bookDropdown =  document.getElementById("book-dropdown");
    let bookDetailList = getBookDetailList();
    console.log(bookDetailList);
    
    let bookOptionList = bookDetailList.map((bookDetail) => bookDetail.BOOK);
    bookOptionList.unshift("Book");
    console.log(userOptionList);

    bookDropdown.innerHTML = bookOptionList.map((book) => {
        return `<option>${book}</option>`
    }).join(" ");
}

function getUserDetailList(){
    let userDetailList = JSON.parse(localStorage.getItem('userDetailList'));
    return userDetailList;
}

function getBookDetailList(){
    let bookDetailList = JSON.parse(localStorage.getItem('bookDetailList'));
    return bookDetailList;
}