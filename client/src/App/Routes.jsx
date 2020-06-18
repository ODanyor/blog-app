import React from "react";
import { Router, Route, Redirect } from "react-router-dom";

import history from "browserHistory";
import Authenticate from "Auth";
import Determinant from "./Determinant";

import Login from "pages/Guest/Login";
import Register from "pages/Guest/Register";
import Verification from "pages/Guest/Verification";

const Routes = () => {
  return (
    <Router history={history}>
      <Redirect from="/" to="/authenticate" />
      <Route path="/authenticate" exact component={Authenticate} />

      <Route path="/" exact component={Determinant} />

      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/verification" component={Verification} />
    </Router>
  );
};

export default Routes;
