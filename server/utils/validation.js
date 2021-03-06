exports.is = {
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
  Empty: (value) => {
    return value === "";
  },
};

exports.validateRegisterCredentials = (credentials) => {
  let errors = new Object();

  if (this.is.Empty(credentials.full_name)) {
    errors.full_name = "Full name is required.";
  } else if (!this.is.FullName(credentials.full_name)) {
    errors.full_name = "Must be a valid full name.";
  }
  if (this.is.Empty(credentials.email)) {
    errors.email = "Email is required.";
  } else if (!this.is.Email(credentials.email)) {
    errors.email = "Must be a valid email address.";
  }
  if (!this.is.Password(credentials.password)) {
    errors.password = "Must be a valid password.";
  } else if (credentials.password !== credentials.confirmPassword) {
    errors.password = "Password does not match.";
  }

  return { errors };
};

exports.validateLoginCredentials = (credentials) => {
  let errors = new Object();

  if (this.is.Empty(credentials.email)) {
    errors.email = "Email is required.";
  } else if (!this.is.Email(credentials.email)) {
    errors.email = "Must be a valid email address.";
  }
  if (!this.is.Password(credentials.password)) {
    errors.password = "Must be a valid password.";
  }

  return { errors };
};

exports.validatePost = (post) => {
  let errors = new Object();

  if (this.is.Empty(post.content.title)) {
    errors.title = "Must not be empty.";
  }
  if (this.is.Empty(post.content.text)) {
    errors.text = "Must not be empty.";
  }

  return { errors };
};

exports.validateComment = (comment) => {
  let errors = new Object();

  if (this.is.Empty(comment.comment)) {
    errors.comment = "Must not be empty.";
  }

  return { errors };
};
