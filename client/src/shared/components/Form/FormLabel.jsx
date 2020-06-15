import React, { useState, useEffect } from "react";
import { FormLabel, FormInput } from "./styles";

const index = ({ child, register, setValue, error, uiError }) => {
  const [focused, setFocused] = useState(false);
  const [isError, setIsError] = useState(false);
  const focusHandle = () => setFocused(!focused);

  useEffect(() => {
    if (error) {
      setIsError(true);
      setValue(child.name, "");
    } else setIsError(false);

    uiError && setValue(child.name, "");
  }, [error, uiError]);

  return (
    <FormLabel
      focused={focused}
      onFocus={focusHandle}
      onBlur={focusHandle}
      isError={isError}
    >
      {child.title}
      <FormInput
        type={child.type}
        name={child.name}
        placeholder={isError ? error : child.placeholder}
        isError={isError}
        ref={register}
      />
    </FormLabel>
  );
};

export default index;
