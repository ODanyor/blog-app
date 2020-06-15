import React from "react";
import { FormButton } from "./styles";

// Components
import { Spinner } from "shared/components";

const index = (props) => {
  const { type, disabled, children } = props;

  return (
    <FormButton type={type} disabled={disabled}>
      {disabled ? <Spinner size={"15px"} /> : children}
    </FormButton>
  );
};

export default index;
