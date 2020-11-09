window.addEventListener('load', init);

function init() {
    const form = document.getElementById("form");
    form.addEventListener('submit', onFormSubmit);
}

function onFormSubmit(e) {
    e.preventDefault();

    let domIdList = ['userName', 'email', 'password', 'ConformPassword'];
    checkRequired(domIdList);

    let email = document.getElementById('email');
    validateEmail(email);  

    let password = document.getElementById('password');
    let ConformPassword = document.getElementById('ConformPassword');
    checkPasswordMatch(password, ConformPassword);
}

function checkRequired(domIdList){
    domIdList.forEach((domId) => {
        let domElement = document.getElementById(domId);

        if (domElement.value.trim() === "") {
            showError(domElement, `${getDomElementName(domElement)} is required`);
        } else {
            //showSuccess(domElement);
            checkLength(domElement);
        }
    });
}

function getDomElementName(inputDom){
    return inputDom.id.charAt(0).toUpperCase() + inputDom.id.slice(1);
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

function checkLength(domElement){
    
        let min = domElement.getAttribute('min'); 
        let max = domElement.getAttribute('max');

        if(domElement.value.length < min){
            showError(domElement, `${getDomElementName(domElement)} must be at least ${min}`);
        }else if(domElement.value.length > max) {
            showError(domElement, `${getDomElementName(domElement)} must be less than ${max}`);
        }else{
            showSuccess(domElement);
        }
}

function validateEmail(inputDom) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(inputDom.value.trim())) {
        showSuccess(email);
    }else{
        showError(email, "Email is not valid");
    }
}

function checkPasswordMatch(password1, password2){
    if(password1.value !== password2.value){
        showError(password2, 'Password do not match');
    }
}