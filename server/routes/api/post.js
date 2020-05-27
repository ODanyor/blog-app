const express = require("express");
const router = express.Router();
const { authenticated } = require("../../utils/auth");

// Functions
const { getPosts, makePost, deletePost } = require("../../functions/post");

// ROUTE: GET /api/post
// DESC: Get all following posts
router.get("/", authenticated, (req, res) => {
  const subscription_ids = req.body.subcsription_ids;
  return getPosts(res, subscription_ids);
});

// ROUTE: POST /api/post
// DESC: Post a new post
router.post("/", authenticated, (req, res) => {
  const post = req.body.post;
  return makePost(res, post);
});

// ROUTE: DELETE /api/post/post_id
// DESC: Delete post
router.delete("/:post_id", authenticated, (req, res) => {
  return deletePost(req, res, req.params.post_id);
});

module.exports = router;
