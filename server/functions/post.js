const Post = require("../models/Post");
const { validatePost } = require("../utils/validation");
const { getPostLikes } = require("./like");
const { getPostComments } = require("./comment");

exports.getPosts = (res, subcsription_ids) => {
  let posts = new Array();
  subcsription_ids.map((users_id) => {
    Post.find({ author: users_id })
      .then((post) => {
        const { likes } = getPostLikes(res, post._id);
        const { comments } = getPostComments(res, post._id);
        post.likes.push(likes);
        post.comments.push(comments);
        posts.push(post);
      })
      .then((result) => res.status(200).json({ data: result }))
      .catch((err) => res.status(400).json({ error: err.code }));
  });
  return res.status(200).json({ data: posts });
};

exports.makePost = (res, post) => {
  // Step - 1: Validation
  const { errors } = validatePost(post);
  if (Object.keys(post).length !== 0) {
    return res.status(400).json({ errors });
  }

  // Step - 2: Posting
  const new_post = new Post(post);
  new_post
    .save()
    .then((result) => res.status(201).json({ data: result }))
    .catch((err) => res.status(400).json({ error: err.code }));
};

exports.updatePostAuthor = async (res, credentials) => {
  await Post.updateMany(
    { author: { user_id: credentials.user_id } },
    { $set: { author: { ...credentials } } }
  ).catch((err) => res.status(500).json({ error: err.code }));
};

exports.deletePost = (req, res, post_id) => {
  Post.findOneAndDelete({ author: { user_id: req.id }, _id: post_id })
    .then(() =>
      res.status(200).json({ message: "Post was successfuly deleted." })
    )
    .catch((err) => res.status(400).json({ error: err.code }));
};
