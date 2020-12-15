window.addEventListener("load", init);
let todoId = 0;
let titleList = [{
    "workTitle": "One",
    "workID": todoId++,
    "status": "inActive"
},{
    "workTitle": "toDoTitle.value",
    "workID": todoId++,
    "status": "active"
},{
    "workTitle": "Tewnty",
    "workID": todoId++,
    "status": "inActive"
}];


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
            "workID": todoId++,
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


    let editIcon = `<span class="column3 edit-icon">`;
    if (todoItem.status != "active") {
        editIcon += `<i class="fas fa-edit"></i>`;
    }
    editIcon += "</span>"
    


    return `<li data-work-id="${todoItem.workID}" data-status1="${todoItem.status}" 
                    onclick="toggleTodoItem(event)">
                ${activeIcon} 
                <span class="column2">${todoItem.workTitle}</span>
                ${editIcon}
            <i class="column4 delete-icon fa fa-trash" aria-hidden="true" 
                                onclick="deleteList(event)"></i>
            </li>`
}

function toggleTodoItem(e) {
    e.preventDefault();
    let successItemID = e.currentTarget.getAttribute('data-work-id');
    let clickedOne = titleList.find((title) => title.workID == successItemID);
    if(clickedOne.status == "active"){
        clickedOne.status = "inActive"; 
    } else{
        clickedOne.status = "active"; 
    }
    renderToDoList();
}

