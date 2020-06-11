import React, { useState, useEffect } from "react";
import { Form, FormLabel, FormInput, FormButton } from "./styles";

// Hooks
import { useForm } from "react-hook-form";

// Functions
import { credentialValidation } from "shared/functions/validateFunctions";

const index = ({ onSubmit, button, children }) => {
  const { register, handleSubmit } = useForm();
  const submit = (data) => {
    // Data validation goes here ...
    const { errors } = credentialValidation(data);
    console.log("Errors: ", errors);
    onSubmit(data);
  };

  return (
    <Form onSubmit={handleSubmit(submit)}>
      {children.map((child, index) => (
        <FormLabelComponent
          child={child}
          key={child.index}
          register={register}
        />
      ))}
      <FormButton type="submit">{button}</FormButton>
    </Form>
  );
};

const FormLabelComponent = ({ child, register }) => {
  const [focused, setFocused] = useState(false);
  const focusHandle = () => setFocused(!focused);

  return (
    <FormLabel focused={focused} onFocus={focusHandle} onBlur={focusHandle}>
      {child.title}
      <FormInput
        type={child.type}
        name={child.name}
        placeholder={child.placeholder}
        ref={register}
      />
    </FormLabel>
  );
};

export default index;
