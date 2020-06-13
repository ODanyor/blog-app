import React from "react";
import { Router, Route, Redirect } from "react-router-dom";

import history from "browserHistory";
import Authenticate from "Auth";

import User from "pages/User";
import Guest from "pages/Guest";
import Login from "pages/Guest/Login";
import Register from "pages/Guest/Register";

const Routes = () => {
  return (
    <Router history={history}>
      <Redirect from="/" to="/authenticate" />
      <Route path="/authenticate" exact component={Authenticate} />

      <Route path="/" exact component={User} />

      <Route path="/explore" exact component={Guest} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
    </Router>
  );
};

export default Routes;
