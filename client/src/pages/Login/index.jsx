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

const index = () => {
  const submitHandle = (data) => console.log("Submited data:", data);

  return (
    <LoginPage>
      <LoginPageIcon>
        {"<"}
        <BackButton icon="📣" />
        {"/>"}
      </LoginPageIcon>
      <LoginPageTitle>Login to blog</LoginPageTitle>
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

export default index;
