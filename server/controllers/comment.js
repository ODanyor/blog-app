const Comment = require("../models/Comment");
const { validateComment } = require("../utils/validation");

exports.getPostComments = async (res, post_id) => {
  await Comment.find({ post_id })
    .then((comments) => comments)
    .catch((err) => res.status(400).json({ error: err.code }));
};

exports.postComment = (res, comment) => {
  const new_comment = new Comment(comment);
  // Step - 1: Validation
  const { errors } = validateComment(new_comment);
  if (Object.keys(errors).length !== 0) {
    return res.status(400).json({ errors });
  }

  // Step - 2: Commenting
  new_comment
    .save()
    .then((result) => res.status(201).json({ data: result }))
    .catch((err) => res.status(400).json({ error: err.code }));
};

exports.updateCommentAuthor = async (res, credentials) => {
  await Comment.updateMany(
    { author: { user_id: credentials.user_id } },
    { $set: { author: { ...credentials } } }
  ).catch((err) => res.status(500).json({ error: err.code }));
};

exports.deleteComment = (res, comment_id) => {
  Comment.findByIdAndDelete(comment_id)
    .then(() =>
      res.status(200).json({ message: "Comment was successfuly deleted." })
    )
    .catch((err) => res.status(400).json({ error: err.code }));
};
