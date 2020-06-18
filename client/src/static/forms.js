export const loginForm = [
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

export const registerForm = [
  // Registration step - 1
  [
    {
      name: "full_name",
      placeholder: "",
      title: "Full name",
      type: "text",
      index: "full_name",
    },
    {
      name: "bio",
      placeholder: "Optional",
      title: "Bio",
      type: "text",
      index: "bio",
    },
    {
      name: "website",
      placeholder: "Optional",
      title: "Website",
      type: "text",
      index: "website",
    },
  ],
  // Registration step - 2
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

export const verificationForm = [
  {
    name: "secret_code",
    placeholder: "",
    title: "Email verification code",
    type: "text",
    index: "secret_code",
  },
];
