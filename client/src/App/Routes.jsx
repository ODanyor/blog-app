import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";

import history from "../browserHistory";
import User from "../pages/User";
import Guest from "../pages/Guest";

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        {/* <Redirect from="/" to="/home" /> */}
        <Route path="/" component={Guest} />
      </Switch>
    </Router>
  );
};

export default Routes;
