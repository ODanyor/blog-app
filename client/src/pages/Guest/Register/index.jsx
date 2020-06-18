import React, { useState } from "react";
import { FormPage } from "pages/Guest/styles";
import { RegisterPageTitle } from "./styles";

// Components
import { Form } from "shared/components";

// Static
import { registerForm } from "static/forms";

// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "store/actions/userActions";

const index = ({ register }) => {
  const [credentials, setCredentials] = useState({});
  const [count, setCount] = useState(0);

  const lengthOfForm = registerForm.length - 1;
  const isNotLast = (length) => count !== length;

  const increment = () => {
    count < lengthOfForm && setCount((prevState) => prevState + 1);
  };

  const onSubmit = (data) => {
    if (isNotLast(lengthOfForm)) {
      setCredentials((prevState) => ({
        ...prevState,
        ...data,
      }));
      increment();
    } else register({ credentials: { ...credentials, ...data } });
  };

  return (
    <FormPage>
      <RegisterPageTitle>
        Registration: Step - {count + 1} / {registerForm.length}
      </RegisterPageTitle>
      <Form
        onSubmit={onSubmit}
        button={isNotLast(lengthOfForm) ? "Next" : "Register"}
      >
        {registerForm[count]}
      </Form>
    </FormPage>
  );
};

index.propTypes = {
  register: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  register: (credentials) => dispatch(register(credentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
