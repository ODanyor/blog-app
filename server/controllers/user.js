const User = require("../models/User");
const {
  validateRegisterCredentials,
  validateLoginCredentials,
} = require("../utils/validation");
const { JWT_token_encrypted, JWT_token_decrypted } = require("../utils/token");
const { updatePostAuthor } = require("./post");
const { updateCommentAuthor } = require("./comment");
const { updateLikeAuthor } = require("./like");
const { sendMail } = require("../utils/mail");

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

exports.updateAccountCredentials = (res, credentials) => {
  User.findByIdAndUpdate(req.id, { $set: { ...credentials } })
    .then((result) => {
      const author = {
        user_id: credentials._id,
        full_name: credentials.full_name,
        email: credentials.email,
        avatar: credentials.avatar,
      };
      updatePostAuthor(res, author);
      updateCommentAuthor(res, author);
      updateLikeAuthor(res, author);
      return res.status(200).json({ data: result });
    })
    .catch((err) => res.status(400).json({ error: err.code }));
};

exports.deleteAccount = (req, res) => {
  User.findByIdAndDelete(req.id)
    .then(() =>
      res.status(200).json({ message: "Account was deleted successfuly." })
    )
    .catch((err) => res.status(400).json({ error: err.code }));
};

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

exports.signUp = (res, credentilas, email_verification) => {
  // Step - 1: Validation
  const { errors } = validateRegisterCredentials(credentilas);
  if (Object.keys(errors).length !== 0) {
    return res.status(400).json({ errors });
  }

  // Step - 2: Checking for email existance
  delete credentilas["confirmPassword"];
  const new_user = new User(credentilas);
  User.findOne({ email: new_user.email })
    .then((result) => {
      if (result) {
        return res
          .status(406)
          .json({ error: "The email address is already registered." });
      }

      if (email_verification) {
        const { error, decrypted } = JWT_token_decrypted(
          email_verification.secret_code_token
        );
        if (error) return res.status(403).json({ error });
        if (decrypted.secret_code !== email_verification.secret_code)
          return res.status(403).json({
            error: "The secret code is not valid. Please, try again.",
          });

        new_user
          .save()
          .then((result) =>
            res
              .status(201)
              .json({ token: JWT_token_encrypted({ _id: result._id }) })
          )
          .catch((err) => res.status(500).json({ error: err.code }));
      } else {
        const random_number = Math.floor(Math.random() * 1000000).toString();
        const secret_code_token = JWT_token_encrypted(
          { secret_code: random_number },
          "2m"
        );

        sendMail(
          new_user.email,
          "Email address verification",
          "Prove your email address via this secret code.",
          `This secret code expires after 2 minutes: ${random_number}`
        )
          .then(() => res.status(200).json({ secret_code_token }))
          .catch((err) => res.status(500).json({ error: err }));
      }
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
          .status(404)
          .json({ error: "Wrong credentials. Please, try again." });
      }
      res.status(200).json({ token: JWT_token_encrypted({ _id: result._id }) });
    })
    .catch((err) => res.status(400).json({ error: err.code }));
};
