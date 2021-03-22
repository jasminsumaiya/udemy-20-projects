let addBtn = document.getElementById("addBtn");
let addTask = document.getElementById("addTask");
let list = document.getElementById("list");
let toDoList = [];
let toDoId = 1;
let toDoEditId = 0;

addBtn.addEventListener("click", addToDoList);
function addToDoList() {
  if (toDoEditId == 0) {
    toDoList.push({ task: addTask.value, taskId: toDoId++, status: false });
  } else {
    let editedList = toDoList.find((toDoItem) => {
      return toDoItem.taskId == toDoEditId;
    });

    editedList.task = addTask.value;
    toDoEditId = 0;
    let addBtn = document.getElementById("addBtn");
    addBtn.innerText = "add";
  }
  renderList();
  addTask.value = "";
}

function renderList() {
  list.innerHTML = toDoList
    .map((toDoItem) => {
      let itemClass = toDoItem.status ? "item strike-task" : "item";
      let checkBttnClass = toDoItem.status ? "checkBtn show-check" : "checkBtn";
      let itemListClass = toDoItem.status
        ? "list-item style-list"
        : "list-item";

      let itemClass = "item";
      let checkBttnClass = "checkBtn";
      let itemListClass = "list-item";
      if (toDoItem.status) {
        itemClass += "strike-task";
        checkBttnClass += "show-check";
        itemListClass += "style-list";
      }

      let editBtn = `<span class="edit" data-edit-id = ${toDoItem.taskId} onclick = "editTask(event)">`;
      if (!toDoItem.status) {
        editBtn += `<i class="fa fa-edit" ></i>`;
      }
      editBtn += `</span>`;

      return `<div class ="${itemListClass}">
                <span class = "${checkBttnClass}"><i class="fa fa-check"></i></span>
                <span class ="${itemClass}" data-item-id=${toDoItem.taskId} onclick="styleList(event)"> ${toDoItem.task} </span>
                ${editBtn}  
                <span class ="delete" data-delete-id =${toDoItem.taskId} onclick ="deleteTask(event)"><i class="fa fa-trash-o"></i></span>
            </div>`;
    })
    .join("");
}

function styleList(e) {
  //<span class ="edit" data-edit-id = ${toDoItem.taskId} onclick = "editTask(event)"><i class="fa fa-edit"></i></span>
  // e.target.classList.add('strike-task')
  // let completedList = e.target.parentElement
  // console.log(completedList)
  // completedList.classList.add('style-list')
  // let checkButton = e.target.previousElementSibling;
  // checkButton.classList.add('show-check')
  let completedToDoId = e.currentTarget.getAttribute("data-item-id");
  let completedItem = toDoList.find((toDoItem) => {
    return toDoItem.taskId == completedToDoId;
  });
  completedItem.status = true;

  renderList();
  /*toDoList.forEach((toDoItem) => {
    if (toDoItem.status) {
      e.target.classList.add("strike-task");
      let completedList = e.target.parentElement;
      console.log(completedList);
      completedList.classList.add("style-list");
      let checkButton = e.target.previousElementSibling;
      checkButton.classList.add("show-check");
    }
  });*/
}

function deleteTask(e) {
  let currentTargetId = e.currentTarget.getAttribute("data-delete-id");
  console.log(currentTargetId);
  let filteredlist = toDoList.filter((toDoItem) => {
    return toDoItem.taskId != currentTargetId;
  });
  toDoList = filteredlist;
  renderList();
}

function editTask(e) {
  let editTaskId = e.currentTarget.getAttribute("data-edit-id");
  console.log(editTaskId);
  toDoEditId = editTaskId;
  let editedList = toDoList.find((toDoItem) => {
    return toDoItem.taskId == editTaskId;
  });
  console.log(editedList);
  addTask.value = editedList["task"];
  let updateBtn = document.getElementById("addBtn");
  updateBtn.innerText = "update";
  console.log(toDoEditId);
}

console.log(toDoList);

// if (toDoList.status == true) {
//     let checkButton = e.target.previousElementSibling;
//     checkButton.classList.add('show-check')
//     let editButton = e.target.nextElementSibling;
//     editButton.classList.add('remove-btn')

//FIND THE CORRESPONDING OBJECT WHEN CLICKED
//CHANGE THE STATUS OF THE OBJECT
//WRITE THE IF CONDITION IF TRUE
//RENDERLIST
