import React from "react";
import { Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route
        path="/posts/:post_id"
        exact
        component={() => <h1>Post page.</h1>}
      />
      <Route path="/:user_id" exact component={() => <h1>User wall.</h1>} />
    </Switch>
  );
};

export default Routes;
