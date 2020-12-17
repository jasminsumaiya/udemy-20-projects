let transactionList = [];
let transactionID = 1

function onAddTransactionClick(e) {
    let transaction = document.getElementById("transaction");
    let amount = document.getElementById("amount");
    let domList = [transaction, amount];
    let hasValid = checkRequired(domList);
    if(hasValid){
        transactionList.push(
            {"content": transaction.value, 
            "amount": amount.value, 
            "ID": transactionID++}
        );
    }
    refreshDomElement();
    transaction.value = "";
    amount.value = "";
}

//----form validation--------
function checkRequired(domList) {
    let hasValid = true;
    domList.forEach((domItem) => {
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

function refreshDomElement() {
    renderHistry();
    //renderIncome();
    //renderExpence();
    //renderBalance();
}

function renderHistry() {
    let histry = document.getElementById("histry");
    histry.innerHTML = transactionList.map((transaction) => {
        let status = transaction.amount > 0 ? "plus" : "minus";
                        return `<li class="histry-list" data-status="${status}">
                                    <span class="col1">${transaction.content}</span>
                                    <span class="col2">${transaction.amount}</span>
                                    <button class="delite-btn col3">X</button>
                                </li>`
    }).join(" ");
}

