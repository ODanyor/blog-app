export const is = {
  FullName: (full_name) => {
    const regExp = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
    return full_name.match(regExp);
  },
  Password: (pass) => {
    const regExp = /^.{8,}$/;
    return pass.match(regExp);
  },
  Email: (email) => {
    const regExp = /^.+@\w*[.]+[a-z]+$/;
    return email.match(regExp);
  },
  NullOrEmpty: (value) => {
    return value === "" || value === null;
  },
};
