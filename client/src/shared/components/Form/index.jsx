import React, { useState, useEffect } from "react";
import { Form, FormLabel, FormInput, FormButton } from "./styles";

// Hooks
import { useForm } from "react-hook-form";

// Functions
import { credentialValidation } from "shared/functions/validateFunctions";

const index = ({ onSubmit, button, children }) => {
  const { register, setValue, handleSubmit } = useForm();
  const [errors, setErrors] = useState(null);
  const submit = (data) => {
    const { errors } = credentialValidation(data);
    if (Object.keys(errors).length > 0) setErrors(errors);
    onSubmit(data);
  };

  return (
    <Form onSubmit={handleSubmit(submit)}>
      {children.map((child, index) => (
        <FormLabelComponent
          child={child}
          key={child.index}
          register={register}
          setValue={setValue}
          error={errors && errors[child.name]}
        />
      ))}
      <FormButton type="submit">{button}</FormButton>
    </Form>
  );
};

const FormLabelComponent = ({ child, register, setValue, error }) => {
  const [focused, setFocused] = useState(false);
  const [isError, setIsError] = useState(false);
  const focusHandle = () => setFocused(!focused);

  useEffect(() => {
    if (error) {
      setIsError(true);
      setValue(child.name, "");
    } else setIsError(false);
  }, [error]);

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
