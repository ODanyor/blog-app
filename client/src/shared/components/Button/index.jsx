import React from "react";
import { Button } from "./styles";

const index = (props) => {
  return <Button colored={props.colored}>{props.content}</Button>;
};

export default index;
