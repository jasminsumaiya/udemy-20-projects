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
    renderIncome();
    renderExpence();
    renderBalance();
}

function renderHistry() {
    let histry = document.getElementById("histry");
    histry.innerHTML = transactionList.map((transaction) => {
        let status = transaction.amount > 0 ? "plus" : "minus";
                        return `<li class="histry-list" data-status="${status}">
                                    <span class="col1">${transaction.content}</span>
                                    <span class="col2">${transaction.amount}</span>
                                    <button class="delite-btn col3" onclick="deliteItem(event)" data-delite-id="${transaction.ID}">X</button>
                                </li>`
    }).join(" ");
}

function renderIncome() {
    let income = document.getElementById("money-plus");
    let incomeAmount = 0;
    transactionList.forEach((transactionItem) => {
        if(transactionItem.amount > 0){
            incomeAmount =  parseInt(incomeAmount) + parseInt(transactionItem.amount);;
        }
    });
    income.textContent = `+$ ${incomeAmount}`;
}

function renderExpence() {
    let expense = document.getElementById("money-minus");
    let expenseAmount = 0;
    transactionList.forEach((transactionItem) => {
        if(transactionItem.amount < 0){
            expenseAmount =  parseInt(expenseAmount) + parseInt(transactionItem.amount);
        }
    });
    expense.textContent = `-$ ${Math.abs(expenseAmount)}`;
}

function renderBalance() {
    let balance = document.getElementById("balance");
    let balanceAmound = 0;
    transactionList.forEach((transactionItem) => {
        balanceAmound += parseInt(transactionItem.amount);
    });
    balance.textContent = `$ ${balanceAmound}`;
}

function deliteItem(e) {
    let currentID = e.currentTarget.getAttribute("data-delite-id");
    let filteredList = transactionList.filter((transaction) => transaction.ID != currentID);
    transactionList = filteredList;
    refreshDomElement();
}

