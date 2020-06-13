import React from "react";
import {
  LoginPage,
  LoginPageIcon,
  LoginPageTitle,
  LoginPageLinks,
  LoginPageLink,
} from "./styles";

// Components
import { Form, BackButton, Link } from "shared/components";

// Static
import { loginForm } from "static/forms";

// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "store/actions/userActions";

const index = ({ login, history }) => {
  const submitHandle = (data) =>
    login(data).then(() => history.push("/authenticate"));

  return (
    <LoginPage>
      <LoginPageIcon>
        {"<"}
        <BackButton icon="📣" />
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
    </LoginPage>
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
