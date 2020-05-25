const User = require("../models/User");
const {
  validateRegisterCredentials,
  validateLoginCredentials,
} = require("../utils/validation");
const { JWT_token } = require("../utils/token");

exports.getAccountCredentials = (req, res) => {
  User.findById(req.id)
    .then((result) => {
      if (!result) {
        return res.status(403).json({ error: "Ups, something went wrong ..." });
      }
      res.status(200).json({ data: result });
    })
    .catch((err) => res.status(400).json({ error: err.code }));
};

exports.updateAccountCredentials = () => {};

exports.deleteAccount = () => {};

exports.getUserCredentials = (res, user_id) => {
  User.findById(user_id)
    .then((result) => {
      if (!result) {
        return res.status(404).json({ error: "User not found." });
      }
      const { password, ...filtered_data } = result._doc;
      res.status(200).json({ data: filtered_data });
    })
    .catch((err) => res.status(400).json({ error: err.code }));
};

exports.signUp = (res, credentilas) => {
  // Step - 1: Validation
  const { errors } = validateRegisterCredentials(credentilas);
  if (Object.keys(errors).length !== 0) {
    return res.status(400).json({ errors });
  }

  // Step - 2: Registration
  delete credentilas["confirmPassword"];
  const new_user = new User(credentilas);
  User.findOne({ email: new_user.email })
    .then((result) => {
      if (result) {
        return res
          .status(406)
          .json({ error: "The email address is already registered." });
      }
      new_user
        .save()
        .then((result) => res.status(201).json({ token: JWT_token(result) }))
        .catch((err) => res.status(500).json({ error: err.code }));
    })
    .catch((err) => res.status(400).json({ error: err.code }));
};

exports.singIn = (res, credentilas) => {
  // Step - 1: Validation
  const { errors } = validateLoginCredentials(credentilas);
  if (Object.keys(errors).length !== 0) {
    return res.status(400).json({ errors });
  }

  // Step - 2: Login
  User.findOne({ email: credentilas.email, password: credentilas.password })
    .then((result) => {
      if (!result) {
        return res
          .status(400)
          .json({ error: "Wrong credentials. Please, try again." });
      }
      res.status(200).json({ token: JWT_token(result) });
    })
    .catch((err) => res.status(400).json({ error: err.code }));
};
