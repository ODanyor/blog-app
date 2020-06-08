import React, { useState } from "react";
import { Form, FormLabel, FormInput, FormButton } from "./styles";

// Hooks
import { useForm } from "react-hook-form";

const index = ({ onSubmit, children }) => {
  const { register, handleSubmit } = useForm();
  const submit = (data) => onSubmit(data);

  return (
    <Form onSubmit={handleSubmit(submit)}>
      {children.map((child, index) => (
        <FormLabelComponent child={child} key={index} register={register} />
      ))}
      <FormButton type="submit">Submit</FormButton>
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
