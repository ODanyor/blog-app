import React, { useState } from "react";
import { RegisterPage } from "./styles";

// Components
import { Form } from "shared/components";

const formConent = [
  [
    {
      name: "full_name",
      placeholder: "",
      title: "Full name",
      type: "text",
      index: "full_name",
    },
    {
      name: "avatar",
      placeholder: "",
      title: "Profile image",
      type: "file",
      index: "avatar",
    },
  ],
  [
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
    {
      name: "confirmPassword",
      placeholder: "",
      title: "Confirm password",
      type: "password",
      index: "confirmPassword",
    },
  ],
];

const index = () => {
  const [credentials, setCredentials] = useState({});

  const [count, setCount] = useState(0);

  const increment = () =>
    count < formConent.length - 1 && setCount((prevState) => prevState + 1);

  const onSubmit = (data) => {
    setCredentials((prevState) => ({
      ...prevState,
      ...data,
    }));
    increment();
  };
  console.log("User: ", credentials);

  return (
    <RegisterPage>
      <h2>Register Page</h2>
      <Form onSubmit={onSubmit} button="Submit">
        {formConent[count]}
      </Form>
    </RegisterPage>
  );
};

export default index;
