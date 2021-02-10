import React from "react";

class TodoList extends React.Component {
  constructor() {
    super();
  }

  initTodoList() {
    let todoList = this.getTodoList();
    if (todoList == null) {
      console.log("TodoList initailized");
      todoList = [];
      this.setTodoList(todoList);
    }
  }

  setTodoList(todoList) {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }

  getTodoList() {
    let todoList = JSON.parse(localStorage.getItem("todoList"));
    return todoList;
  }

  setActiveTodoID(todoID) {
    localStorage.setItem("todoID", todoID);
  }

  getActiveTodoID() {
    let todoID = localStorage.getItem("todoID");
    return todoID;
  }

  onDeleteTodoItem = (e) => {
    e.preventDefault();
    let selectedID = e.currentTarget.getAttribute("data-id");
    let itemList = this.getTodoList();
    let filteredList = itemList.filter((title) => {
      return title.id != selectedID;
    });
    this.setTodoList(filteredList);
    this.setState({});
  };

  onEditTodoItem = (e) => {
    let editItemID = e.currentTarget.getAttribute("data-id");
    this.setActiveTodoID(parseInt(editItemID));
    window.location = "/create";
  };

  cursorMarker = {
    cursor: "pointer",
  };

  listStyle = {
    fontSize: "large",
  };

  headingStyles = {
    width: 800,
    fontSize: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginLeft: 120,
    padding: 10,
  };

  render() {
    let todoList = this.getTodoList();
    return (
      <div>
        <h1 style={this.headingStyles}>TODO List Page</h1>
        <div style={this.listStyle}>
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Title</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {todoList.map((todoItem, index) => (
                <tr>
                  <td scope="row" key={todoItem.id}>
                    {index + 1}
                  </td>
                  <td key={todoItem.name}>{todoItem.name}</td>
                  <td>
                    <span
                      className="glyphicon glyphicon-edit"
                      onClick={this.onEditTodoItem}
                      data-id={todoItem.id}
                      style={this.cursorMarker}
                    ></span>
                  </td>
                  <td>
                    <span
                      className="glyphicon glyphicon-remove"
                      onClick={this.onDeleteTodoItem}
                      data-id={todoItem.id}
                      style={this.cursorMarker}
                    ></span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TodoList;
