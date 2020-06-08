import React, { useState } from "react";
import { Input, InputIcon, InputField } from "./styles";

const index = ({ icon, placeholder }) => {
  const [focused, setFocused] = useState(false);
  const focusHandle = () => setFocused(!focused);

  return (
    <Input focused={focused}>
      <InputIcon>{icon}</InputIcon>
      <InputField
        placeholder={placeholder}
        onFocus={focusHandle}
        onBlur={focusHandle}
      />
    </Input>
  );
};

export default index;
