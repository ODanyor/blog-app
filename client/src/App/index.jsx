import React from "react";

import BaseStyles from "./BaseStyles";
import Routes from "./Routes";

import "./fontStyles.css";

const index = () => {
  return (
    <React.Fragment>
      <Routes />
      <BaseStyles />
    </React.Fragment>
  );
};

export default index;
