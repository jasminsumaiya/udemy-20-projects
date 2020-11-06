window.addEventListener('load', init);

function init() {
    const form = document.getElementById("form");
    form.addEventListener('submit', onFormSubmit);
}

function onFormSubmit(e) {
    e.preventDefault();

    let domElementInfoList = [
        {domid: "userName", domname: "Username"},
        {domid: "email", domname: "Email"},
        {domid: "password1", domname: "password1"},
        {domid: "password2", domname: "password2"},
    ];
    domElementInfoList.forEach((domObj) => {
        validateDomValue(domObj.domid, domObj.domname);
    });
}

function validateDomValue(domId, domName){
    const domElement = document.getElementById(domId);

    if (domElement.value === "") {
        showError(domElement, `${domName} is required`);
    } else {
        showSuccess(domElement);
    }
}

function showError(input, msg) {
    const formCtrl = input.parentElement;
    formCtrl.className = "form-control error";
    const small = formCtrl.querySelector('small');
    small.innerText = msg;
}

function showSuccess(input) {
    const formCtrl = input.parentElement;
    formCtrl.className = "form-control success";
}