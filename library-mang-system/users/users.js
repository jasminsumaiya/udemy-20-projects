let userDetailList = [];
let userID = 1;

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
        userDetailList.push(
            {"ID": userID++,
            "USERNAME": username.value,
            "EMAIL": email.value,
            "ADDRESS": address.value,
            "CITY": city.value,
            "CONTACT": contact.value}
        );
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
    let userFields = ['ID', 'USERNAME', 'EMAIL', 'ADDRESS', 'CITY', 'CONTACT'];

    tableBody[0].innerHTML = userDetailList.map((userItem) => {
        return `<tr>          
                <td>${userItem.ID}</td>
                <td>${userItem.USERNAME}</td>
                <td>${userItem.EMAIL}</td>
                <td>${userItem.ADDRESS}</td>
                <td>${userItem.CITY}</td>
                <td>${userItem.CONTACT}</td>
                <td></td>
                <td><button><i class="fas fa-edit"></i></button></td>
                <td><button><i class="fa fa-trash"></i></button></td>
                </tr>`
    }).join(" ");
                        
}