import React from "react";

class CreateTodo extends React.Component {
  activeTodoID = null;
  constructor() {
    super();
    this.initTodoList();
  }

  initTodoList() {
    let todoList = this.getTodoList();
    if (todoList == null) {
      console.log("TodoList initailized");
      todoList = [];
      this.setTodoList(todoList);
    }
  }

  setActiveTodoID(todoID) {
    localStorage.setItem("todoID", todoID);
  }

  getActiveTodoID() {
    let todoID = localStorage.getItem("todoID");
    return todoID;
  }

  setTodoList(todoList) {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }

  getTodoList() {
    let todoList = JSON.parse(localStorage.getItem("todoList"));
    return todoList;
  }

  addNewTodoItem = () => {
    let todoList = this.getTodoList();
    let todoTitle = document.getElementById("addTitle");
    if (todoTitle.value.trim() == "") {
      alert("Invalid todo-name");
      return;
    }
    if (this.activeTodoID != -1) {
      let newTodoItem = todoList.find(
        (todoItem) => todoItem.id == this.activeTodoID
      );
      newTodoItem.name = todoTitle.value;
      this.setTodoList(todoList);

      let addButton = document.getElementById("addButton");
      addButton.innerHTML = "ADD";
    } else {
      let newTodoItem = {
        id: this.nextTodoItemID(),
        name: todoTitle.value,
      };
      todoList.push(newTodoItem);
    }

    this.setTodoList(todoList);
    todoTitle.value = "";
    this.activeTodoID = -1;
    this.setActiveTodoID(this.activeTodoID);
  };

  nextTodoItemID() {
    let todoId = localStorage.getItem("todoId");
    if (todoId == null) {
      todoId = 0;
    }
    todoId++;
    localStorage.setItem("todoId", todoId);
    return todoId;
  }

  inputStyles = {
    width: 800,
    fontSize: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginLeft: 120,
    padding: 10,
  };

  buttonStyles = {
    width: 200,
    fontSize: 30,
    borderRadius: 10,
  };

  componentDidMount() {
    this.activeTodoID = this.getActiveTodoID();
    if (this.activeTodoID != -1) {
      let itemList = this.getTodoList();

      let editedItem = itemList.find(
        (todoItem) => todoItem.id == this.activeTodoID
      );
      let todoTitle = document.getElementById("addTitle");
      todoTitle.value = editedItem["name"];

      let addButton = document.getElementById("addButton");
      addButton.innerHTML = "Update";

      this.setState({});
    }
  }

  render() {
    return (
      <div>
        <div class="flex">
          <h1 style={this.inputStyles}>TODO Create Page</h1>
          <div class="input-btn" style={this.inputStyles}>
            <input
              style={this.inputStyles}
              type="text"
              id="addTitle"
              className="form-control"
              placeholder="Title..."
            />
            <button
              style={this.buttonStyles}
              //className="btn btn-secondary btn-2"
              onClick={this.addNewTodoItem}
              id="addButton"
            >
              ADD
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateTodo;
