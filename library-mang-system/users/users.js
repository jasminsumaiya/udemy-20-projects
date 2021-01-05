let activeID = -1;

window.addEventListener('load', init);

function init(){
    let userDetailList = getUserDetailList();
    if(userDetailList == null || userDetailList.length == 0){
        let userList = [];
        setUserDetailList(userList);
    }
    renderUserList();
}

function onClickAddUser(e) {
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let address = document.getElementById("address");
    let city = document.getElementById("city");
    let contact = document.getElementById("contact");

    console.log(username.id);

    let userDomList = [username, email, address, city, contact];

    let hasValid = checkRequired(userDomList);
    console.log(hasValid);

    if(hasValid){
        let userDetailList = getUserDetailList();

        if(activeID == -1){
            userDetailList.push(
                {"ID": nextUserID(),
                "USERNAME": username.value,
                "EMAIL": email.value,
                "ADDRESS": address.value,
                "CITY": city.value,
                "CONTACT": contact.value}
            );
        } else{
            let editedItem = userDetailList.find((item) => item.ID == activeID);
            activeID = -1;
            
            editedItem.USERNAME = username.value;
            editedItem.EMAIL = email.value;
            editedItem.ADDRESS = address.value;
            editedItem.CITY = city.value;
            editedItem.CONTACT = contact.value;

            let submit = document.getElementById("submit");
            submit.textContent = "Add User";
        }  

        setUserDetailList(userDetailList);
    }
    userDomList.forEach((domItem) => domItem.value = "");
    renderUserList();
}

//----form validation--------
function checkRequired(userDomList) {
    let hasValid = true;
    userDomList.forEach((domItem) => {
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

function renderUserList() {
    let tableBody = document.getElementsByTagName("tbody");

    let userDetailList = getUserDetailList();
    tableBody[0].innerHTML = userDetailList.map((userItem) => {
        return `<tr>          
                <td>${userItem.ID}</td>
                <td>${userItem.USERNAME}</td>
                <td>${userItem.EMAIL}</td>
                <td>${userItem.ADDRESS}</td>
                <td>${userItem.CITY}</td>
                <td>${userItem.CONTACT}</td>
                <td></td>
                <td><button><i class="fas fa-edit" data-edit-id="${userItem.ID}" onClick="onEditUserList(event)"></i></button></td>
                <td><button><i class="fa fa-trash" data-delite-id="${userItem.ID}" onClick="onDeliteUserList(event)"></i></button></td>
                </tr>`
    }).join(" ");                    
}

function onEditUserList(e) {
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let address = document.getElementById("address");
    let city = document.getElementById("city");
    let contact = document.getElementById("contact");

    let targetId = e.currentTarget.getAttribute("data-edit-id");
    console.log(targetId);
    activeID = targetId;

    let userDetailList = getUserDetailList();
    let findEditItem = userDetailList.find((item) => item.ID == targetId);
    console.log(findEditItem);

    username.value = findEditItem["USERNAME"];
    email.value = findEditItem["EMAIL"];
    address.value = findEditItem["ADDRESS"];
    city.value = findEditItem["CITY"];
    contact.value = findEditItem["CONTACT"];

    let submit = document.getElementById("submit");
    submit.textContent = "UPDATE";
}

function onDeliteUserList(e) {
    let targetId = e.currentTarget.getAttribute("data-delite-id");

    let userDetailList = getUserDetailList();
    let filterItems = userDetailList.filter((item) => item.ID != targetId);
    
    setUserDetailList(filterItems);
    renderUserList();
}

function getUserDetailList(){
    let userDetailList = JSON.parse(localStorage.getItem('userDetailList'));
    return userDetailList;
}

function setUserDetailList(userDetailList){
    localStorage.setItem('userDetailList', JSON.stringify(userDetailList));
}

function nextUserID() {
    let userID = localStorage.getItem('userID');
    if(userID == null){
        userID = 0;
    }
    userID++;
    localStorage.setItem('userID', userID);
    return userID;
}