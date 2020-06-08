import React from "react";
import { Button } from "./styles";

const index = ({ colored, content }) => {
  return <Button colored={colored}>{content}</Button>;
};

export default index;
