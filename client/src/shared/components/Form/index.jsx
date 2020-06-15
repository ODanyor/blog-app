import React, { useState, useEffect } from "react";
import { Form, FormMessage } from "./styles";

// Modules
import FormLabelComponent from "./FormLabel";
import FormButtonComponent from "./FormButton";

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
    else setErrors(null);

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
      <FormButtonComponent type="submit" disabled={ui.isRequested}>
        {button}
      </FormButtonComponent>
    </Form>
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
