window.addEventListener("load", init);
let titleList = [];

function init() {
    let submit = document.querySelector(".add-btn");
    submit.addEventListener("click", addToList);
    renderToDoList();
}

function addToList() {
    let toDoTitle = document.getElementById("add-title");
    let term = toDoTitle.value;
    if (term.trim()) {
        //push the value in to array 
        titleList.push({
            "workTitle": toDoTitle.value,
            "workID": titleList.length,
            "status": "inActive"
        });

        renderToDoList();
        toDoTitle.value = '';
    } else {
        alert("Enter any work");
    }
}

function deleteList(e) {
    let selectedID = e.currentTarget.parentElement.getAttribute('data-work-id');
    let itemList = titleList.filter((title) => {
        return title.workID != selectedID;
    });
    titleList = itemList;
    renderToDoList();
}

function renderToDoList() {
    let addedList = document.getElementById("added-list");
    addedList.innerHTML = `<ul>
                    ${titleList.map((todoItem) => `${addListToDom(todoItem)}`).join('')}
                          </ul>`;
}

function addListToDom(todoItem) {
    let activeIcon = `<span class="column1">`;
    if (todoItem.status == "active") {
        activeIcon += `<i class="tick-mark fa fa-check" aria-hidden="true"></i>`;
    }
    activeIcon += "</span>"

    return `<li data-work-id="${todoItem.workID}" data-status1="${todoItem.status}" 
                    onclick="addListToSuccess(event)">
                ${activeIcon} 
                <span class="column2">${todoItem.workTitle}</span>
            <button class="column3 edit-btn">edit</button>
            <i class="column4 delete-icone fa fa-trash" aria-hidden="true" 
                                onclick="deleteList(event)"></i>
            </li>`
}

function addListToSuccess(e) {
    let successItemID = e.currentTarget.getAttribute('data-work-id');
    let clickedOne = titleList.find((title) => title.workID == successItemID);
    console.log(clickedOne);
    clickedOne.status = "active";

    renderToDoList();
}

