import React from "react";
import { Nav, ButtonToolbar, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import "./NavBar.css";

class NavBar extends React.Component {
  constructor() {
    super();
  }

  navBarStyles = {
    fontWeight: "bold",
    backgroundColor: "black",
    fontSize: 20,
    color: "white",
    height: 70,
    padding: 20,
    height: 85,
  };

  navButtonStyle = {
    marginTop: 0,
    marginLeft: 20,
    font: "large",
  };

  render() {
    return (
      <ButtonToolbar style={this.navBarStyles} className="custom-btn-toolbar">
        <LinkContainer to="/">
          <Button
            style={this.navButtonStyle}
            className="nav-item nav-link navButton"
          >
            Home
          </Button>
        </LinkContainer>
        <LinkContainer to="/create">
          <Button
            style={this.navButtonStyle}
            className="nav-item nav-link navButton"
          >
            Create
          </Button>
        </LinkContainer>
        <LinkContainer to="/list">
          <Button
            style={this.navButtonStyle}
            className="nav-item nav-link navButton"
          >
            List
          </Button>
        </LinkContainer>
      </ButtonToolbar>
    );
  }
}

/*const NavBar = () => {
  return (
    <ButtonToolbar className="custom-btn-toolbar">
      <LinkContainer to="/">
        <Button>Home</Button>
      </LinkContainer>
      <LinkContainer to="/create">
        <Button>Create</Button>
      </LinkContainer>
      <LinkContainer to="/list">
        <Button>List</Button>
      </LinkContainer>
    </ButtonToolbar>
  );
};*/

export default NavBar;
