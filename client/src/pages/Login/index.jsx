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

const formContent = [
  {
    name: "email",
    placeholder: "",
    title: "Email",
    type: "text",
    index: "email",
  },
  {
    name: "password",
    placeholder: "",
    title: "Password",
    type: "password",
    index: "password",
  },
];

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
        {formContent}
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
