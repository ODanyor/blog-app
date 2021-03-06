import React from "react";
import { Switch, Route } from "react-router-dom";

// Pages
import {
  HomePage,
  ExplorePage,
  NotificationsPage,
  MessagesPage,
  BookmarksPage,
  ProfilePage,
  SettingsPage,
} from "./Pages";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/explore" exact component={ExplorePage} />
      <Route path="/notifications" exact component={NotificationsPage} />
      <Route path="/messages" exact component={MessagesPage} />
      <Route path="/bookmarks" exact component={BookmarksPage} />
      <Route
        path="/posts/:post_id"
        exact
        component={() => <h1>Post page.</h1>}
      />
      <Route path="/profile/:user_id" exact component={ProfilePage} />
      <Route path="/settings" exact component={SettingsPage} />
    </Switch>
  );
};

export default Routes;
