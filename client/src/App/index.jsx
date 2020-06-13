import React from "react";

import BaseStyles from "./BaseStyles";
import Routes from "./Routes";

import "./fontStyles.css";

const index = () => {
  return (
    <React.Fragment>
      <Routes />
      <BaseStyles />
      <h1>🚧 Blog is under 🔨</h1>
    </React.Fragment>
  );
};

export default index;
