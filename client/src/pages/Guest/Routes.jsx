import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" render={Login} />
      <Route path="/register" render={() => <h1>Regisration page</h1>} />
    </Switch>
  );
};

export default Routes;
