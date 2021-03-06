const express = require("express");
const router = express.Router();
const { authenticated } = require("../../utils/auth");
const { upload } = require("../../utils/storage");

// Functions
const {
  getAccountCredentials,
  updateAccountCredentials,
  deleteAccount,
  getUserCredentials,
  singIn,
  signUp,
} = require("../../controllers/user");

// ROUTE: /api/user
// DESC: Get account credentials
router.get("/", authenticated, (req, res) => {
  return getAccountCredentials(req, res);
});

// ROUTE: /api/user
// DESC: Update account credentials
router.post("/", authenticated, (req, res) => {
  const credentials = req.body.credentials;
  return updateAccountCredentials(res, credentials);
});

// ROUTE: /api/user/delete
// DESC: Delete account
router.delete("/", authenticated, (req, res) => {
  return deleteAccount(req, res);
});

// ROUTE: /api/user/user_id
// DESC: Get a specific user as a user
router.get("/:user_id", authenticated, (req, res) => {
  return getUserCredentials(res, req.params.user_id);
});

// ROUTE: /api/user/sign_in
// DESC: Login a user
router.post("/sign_in", (req, res) => {
  const credentials = req.body.credentials;
  return singIn(res, credentials);
});

// ROUTE: /api/user/sign_up
// DESC: Register a new user
router.post("/sign_up", (req, res) => {
  const credentials = req.body.credentials;
  const email_verification = req.body.email_verification;
  return signUp(res, credentials, email_verification);
});

module.exports = router;
