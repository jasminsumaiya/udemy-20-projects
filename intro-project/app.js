window.addEventListener('load', init);

function init() {
    const form = document.getElementById("form");
    form.addEventListener('submit', onFormSubmit);

    let eyeIconList = document.querySelectorAll('.togglePassword');
    let passwordDomList = Array.from(eyeIconList);
    passwordDomList.forEach((dom) => {
        dom.addEventListener('click', onClickIcon);
    });
}

function onFormSubmit(e) {
    e.preventDefault();

    let domIdList = ['username', 'email', 'password', 'ConformPassword'];
    let checkRequiredvalue = checkRequired(domIdList);
    if (checkRequiredvalue === true) {
        let email = document.getElementById('email');
        validateEmail(email);
    }
    let password = document.getElementById('password');
    let ConformPassword = document.getElementById('ConformPassword');
    checkPasswordMatch(password, ConformPassword);

    validatePassword(password);
}

function onClickIcon(e) {
    e.preventDefault();
    let icon = e.currentTarget;
    let parentElement = icon.parentElement;
    var inputPassword = parentElement.querySelector('input');
    visiblePassword(icon, inputPassword);
}

function checkRequired(domIdList) {
    let hasValidRequiredElements = true;
    domIdList.forEach((domId) => {
        let domElement = document.getElementById(domId);
        if (domElement.value.trim() === "") {
            hasValidRequiredElements = false;
            showError(domElement, `${getDomElementName(domElement)} is required`);
        } else {
            checkLength(domElement);
        }
    });
    return hasValidRequiredElements;
}

function getDomElementName(inputDom) {
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

function checkLength(domElement) {

    let min = domElement.getAttribute('min');
    let max = domElement.getAttribute('max');

    if (domElement.value.length < min) {
        showError(domElement, `${getDomElementName(domElement)} must be at least ${min}`);
    } else if (domElement.value.length > max) {
        showError(domElement, `${getDomElementName(domElement)} must be less than ${max}`);
    } else {
        showSuccess(domElement);
    }
}

function validateEmail(inputDom) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let email = document.getElementById('email');
    if (reg.test(inputDom.value.trim())) {
        showSuccess(email);
    } else {
        showError(email, "Email is not valid");
    }
}

function validatePassword(password) {
    var regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (regex.test(password.value.trim())) {
        showSuccess(password);
    } else {
        showError(password, "Password must be at least a symbol, upper and lower case letters and a number");
    }
}

function checkPasswordMatch(password1, password2) {
    if (password1.value !== password2.value) {
        showError(password2, 'Password do not match');
    }
}

function visiblePassword(icon, inputPassword) {
    if (inputPassword.getAttribute('type') === 'password') {
        inputPassword.setAttribute('type', 'text');
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        inputPassword.setAttribute('type', 'password');
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}