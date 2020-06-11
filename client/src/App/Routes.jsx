import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";

import history from "browserHistory";
import User from "pages/User";
import Guest from "pages/Guest";
import Login from "pages/Login";
import Register from "pages/Register";

const Routes = () => {
  return (
    <Router history={history}>
      <Route path="/" exact component={Guest} />
      {/* <Redirect from="/" to="/explore" /> */}
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
    </Router>
  );
};

export default Routes;
