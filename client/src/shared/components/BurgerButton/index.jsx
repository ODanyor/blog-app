import React from "react";
import { BurgerButton, Burger } from "./styles";

const index = ({ trigger }) => {
  return (
    <BurgerButton onClick={trigger}>
      <Burger />
      <Burger />
      <Burger />
    </BurgerButton>
  );
};

export default index;
