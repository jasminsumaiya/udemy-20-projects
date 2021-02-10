import React from "react";

let inputStyles = {
  fontSize: 30,
  alignItems: "center",
  justifyContent: "center",
  marginLeft: 120,
  padding: 10,
};

const TodoHome = (props) => {
  return (
    <div>
      <h3 style={inputStyles}>Welcome to My To Do List App</h3>
    </div>
  );
};

export default TodoHome;
