const express = require("express");
const router = express.Router();
const { authenticated } = require("../../utils/auth");

// Functions
const { makeLikeAndUnlike } = require("../../controllers/like");

// ROUTE: POST api/like
// DESC: Make a like
router.post("/", authenticated, (req, res) => {
  const like = req.body.like;
  return makeLikeAndUnlike(res, like);
});

module.exports = router;
