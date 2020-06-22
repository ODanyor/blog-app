import React from "react";
import { NavbarLeft } from "../styles";

// Components
import { Spinner } from "shared/components";

const index = () => {
  return (
    <NavbarLeft>
      <Spinner size="35px" />
    </NavbarLeft>
  );
};

export default index;
