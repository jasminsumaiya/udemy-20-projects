import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { NavBar } from "./components/NavBar";

import { Home } from "./views/home";
import { CreateTodo } from "./views/create-todo";
import { TodoList } from "./views/todo-list";

export const Routes = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/create" component={CreateTodo} />
        <Route exact path="/list" component={TodoList} />

        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </div>
  );
};
