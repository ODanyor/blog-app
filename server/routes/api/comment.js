const express = require("express");
const router = express.Router();
const { authenticated } = require("../../utils/auth");
// Functions
const { postComment, deleteComment } = require("../../functions/comment");

// ROUTE: POST api/comment
// DESC: Post a comment
router.post("/", authenticated, (req, res) => {
  const comment = req.body.comment;
  return postComment(res, comment);
});

// ROUTE: DELETE api/comment/comment_id
// DESC: Delete comment
router.delete("/:comment_id", authenticated, (req, res) => {
  return deleteComment(res, req.params.comment_id);
});

module.exports = router;
