import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

const index = (props) => {
  return (
    <Router>
      <h1>User account</h1>
      <Routes />
    </Router>
  );
};

export default index;
