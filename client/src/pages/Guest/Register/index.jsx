import React, { useState } from "react";
import { RegisterPage, RegisterPageTitle } from "./styles";

// Components
import { Form } from "shared/components";

// Static
import { registerForm } from "static/forms";

const index = () => {
  const [credentials, setCredentials] = useState({});
  const [count, setCount] = useState(0);

  const increment = () =>
    count < registerForm.length - 1 && setCount((prevState) => prevState + 1);

  const onSubmit = (data, errors) => {
    setCredentials((prevState) => ({
      ...prevState,
      ...data,
    }));
    increment();
  };

  return (
    <RegisterPage>
      <RegisterPageTitle>
        Registration: Step - {count + 1} / {registerForm.length}
      </RegisterPageTitle>
      <Form
        onSubmit={onSubmit}
        button={count !== registerForm.length - 1 ? "Next" : "Register"}
      >
        {registerForm[count]}
      </Form>
    </RegisterPage>
  );
};

export default index;