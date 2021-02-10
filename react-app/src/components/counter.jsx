import React, { Component } from "react";

class counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  styles = {
    fontSize: 30,
    fontWeight: "bold",
  };

  render() {
    return (
      <div>
        <span style={this.styles} className={this.addNewClass()}>
          {this.formatCount()}
        </span>
        <button
          className="btn btn-secondary btn-2"
          onClick={this.handleIncrement}
        >
          submit
        </button>
        <ul style={this.styles}>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }

  handleIncrement = () => {
    let newState = { ...this.state };
    newState.count += 1;
    this.setState(newState);
  };

  addNewClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    return this.state.count === 0 ? "zero" : this.state.count;
  }
}

export default counter;
