import { is } from "shared/utils/validation";

export const credentialValidation = (object) => {
  // full_name, avatar, email, password, confirmPassword
  console.log("Object: ", object);
  let errors = {};
  for (let key in object) {
    if (key === "full_name") {
      if (!is.FullName(object[key])) {
        errors.full_name = "Must include firstname and lastname.";
      }
    }
    if (key === "email") {
      if (!is.Email(object[key])) {
        errors.email = "Must be a valid email address.";
      }
    }
    if (key === "password") {
      if (!is.Password(object[key])) {
        errors.password = "Password must be at least 8 characters.";
      }
    }
    if (key === "passwordConfirm") {
      if (object["password"] !== object["confirmPassword"]) {
        errors.confirmPassword = "Password does not match.";
      }
    }
  }
  return { errors };
};
