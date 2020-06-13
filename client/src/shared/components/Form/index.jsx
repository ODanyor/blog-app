import React, { useState, useEffect } from "react";
import { Form, FormLabel, FormInput, FormMessage, FormButton } from "./styles";

// Hooks
import { useForm } from "react-hook-form";

// Functions
import { credentialValidation } from "shared/functions";

// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { cleanErrors } from "store/actions/uiActions";

const index = (props) => {
  const { onSubmit, button, children } = props;
  const { ui } = props;
  const { cleanErrors } = props;

  const { register, setValue, handleSubmit } = useForm();
  const [errors, setErrors] = useState(null);

  const submit = (data) => {
    const { errors } = credentialValidation(data);
    if (Object.keys(errors).length > 0) return setErrors(errors);
    ui.error && cleanErrors();
    onSubmit(data);
  };

  useEffect(() => {
    ui.error && cleanErrors();
  }, []);

  return (
    <Form onSubmit={handleSubmit(submit)}>
      {children.map((child) => (
        <FormLabelComponent
          child={child}
          key={child.index}
          register={register}
          setValue={setValue}
          error={errors && errors[child.name]}
          uiError={ui.error}
        />
      ))}
      {ui.error && <FormMessage>{ui.error}</FormMessage>}
      <FormButton type="submit">{button}</FormButton>
    </Form>
  );
};

const FormLabelComponent = ({ child, register, setValue, error, uiError }) => {
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

index.propTypes = {
  // States
  ui: PropTypes.object.isRequired,

  // Actions
  cleanErrors: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  ui: state.ui,
});

const mapDispatchToProps = (dispatch) => ({
  cleanErrors: () => dispatch(cleanErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
