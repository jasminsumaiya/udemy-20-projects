let todoId = 0;
let activeTodoID = -1;
let titleList = [];

function onMouseClick(e) {
    addToList();
}

function onKeyDown(e) {
    if (e.keyCode == 13) {
        addToList();
    }
}

//add todo item into array
function addToList() {
    let toDoTitle = document.getElementById("add-title");
    let submit = document.querySelector(".add-btn");
    let term = toDoTitle.value;

    if (term.trim()) {
        //push the value in to array 
        if (activeTodoID == -1) {
            titleList.push({
                "workTitle": toDoTitle.value,
                "workID": todoId++,
                "status": "inActive"
            });
        } else {
            let editedItem = titleList.find((todoItem) => todoItem.workID == activeTodoID);
            editedItem.workTitle = toDoTitle.value;
            activeTodoID = -1;

            //change UPDATE btn into ADD btn
            let submit = document.querySelector(".add-btn");
            submit.textContent = "add";
        }
        renderToDoList();
        toDoTitle.value = '';
    } else {
        alert("Enter any work");
    }
}

function deleteList(e) {
    e.preventDefault();
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
                    ${titleList.map((todoItem) => `${renderTodoItem(todoItem)}`).join('')}
                          </ul>`;
}

function renderTodoItem(todoItem) {
    //add tick mark in "active" status
    let activeIcon = `<span class="column1">`;
    if (todoItem.status == "active") {
        activeIcon += `<i class="tick-mark fa fa-check" aria-hidden="true"></i>`;
    }
    activeIcon += "</span>"

    //add edit icon in status "inactive" //remove the edit icon in "active" status
    let editIcon = `<span class="column3 edit-icon">`;
    if (todoItem.status != "active") {
        editIcon += `<i class="fas fa-edit" data-edit-id="${todoItem.workID}" onclick="editTodoItem(event)"></i>`;
    }
    editIcon += "</span>";

    //text content strick-through
    let mainContent = `<span class="column2">`;
    if (todoItem.status != "active") {
        mainContent += `${todoItem.workTitle}`;
    } else {
        mainContent += `<del>${todoItem.workTitle}</del>`;
    }
    mainContent += "</span>";

    return `<li data-work-id="${todoItem.workID}" data-status1="${todoItem.status}" onclick="toggleTodoItem(event)">
                ${activeIcon} 
                ${mainContent}
                ${editIcon}
                <i class="column4 delete-icon fa fa-trash" aria-hidden="true" onclick="deleteList(event)"></i>
            </li>`
}

function toggleTodoItem(e) {
    e.preventDefault();
    let successItemID = e.currentTarget.getAttribute('data-work-id');
    let clickedOne = titleList.find((todoItem) => todoItem.workID == successItemID);
    if (clickedOne.status == "active") {
        clickedOne.status = "inActive";
    } else {
        clickedOne.status = "active";
    }
    renderToDoList();
}

//edit content
function editTodoItem(e) {
    e.stopImmediatePropagation();
    let toDoTitle = document.getElementById("add-title");
    let editItemID = e.currentTarget.getAttribute('data-edit-id');
    //update edited value in the same place
    activeTodoID = editItemID;
    //place the edited item into input box
    let editedItem = titleList.find((todoItem) => todoItem.workID == editItemID);
    toDoTitle.value = editedItem["workTitle"];
    //change ADD btn into UPDATE btn 
    let submit = document.querySelector(".add-btn");
    submit.textContent = "UPDATE";
}

