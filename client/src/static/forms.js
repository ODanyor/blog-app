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
      name: "avatar",
      placeholder: "",
      title: "Profile image",
      type: "file",
      index: "avatar",
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
