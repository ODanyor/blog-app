import React from "react";
import { FormPage } from "pages/Guest/styles";
import {
  LoginPageIcon,
  LoginPageTitle,
  LoginPageLinks,
  LoginPageLink,
} from "./styles";

// Components
import { Form, LogoButton, Link } from "shared/components";

// Static
import { loginForm } from "static/forms";

// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "store/actions/userActions";

const index = ({ login }) => {
  const submitHandle = (data) => login(data);

  return (
    <FormPage>
      <LoginPageIcon>
        {"<"}
        <LogoButton icon="📣" />
        {"/>"}
      </LoginPageIcon>
      <LoginPageTitle>Welcome! Get login</LoginPageTitle>
      <Form onSubmit={submitHandle} button="Login">
        {loginForm}
      </Form>
      <LoginPageLinks>
        <Link to="/password_reset">
          <LoginPageLink>Forgot password?</LoginPageLink>
        </Link>
        <Link to="/register">
          <LoginPageLink>Don't have an account?</LoginPageLink>
        </Link>
      </LoginPageLinks>
    </FormPage>
  );
};

index.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  login: (credentials) => dispatch(login(credentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
