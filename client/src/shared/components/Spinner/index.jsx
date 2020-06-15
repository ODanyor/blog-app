import React from "react";
import { Spinner } from "./styles";

const index = ({ size }) => {
  return (
    <Spinner size={size}>
      <div className="loader"></div>
    </Spinner>
  );
};

export default index;
