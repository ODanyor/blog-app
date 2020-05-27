const Like = require("../models/Like");

exports.getPostLikes = async (res, post_id) => {
  await Like.find({ post_id })
    .then((likes) => likes)
    .catch((err) => res.status(400).json({ error: err.code }));
};

exports.makeLikeAndUnlike = (res, like) => {
  const new_like = new Like(like);
  Like.findOne({ post_id: new_like.post_id })
    .then((result) => {
      // Unlike
      if (result) {
        return Like.findByIdAndDelete(result._id)
          .then(() => res.status(200).json({ message: "Post is unliked." }))
          .catch((err) => res.status(400).json({ error: err.code }));
      }
      // Like
      new_like
        .save()
        .then(() => res.status(201).json({ message: "Post is liked." }))
        .catch((err) => res.status(400).json({ error: err.code }));
    })
    .catch((err) => res.status(400).json({ error: err.code }));
};

exports.updateLikeAuthor = async (res, credentials) => {
  await Like.updateMany(
    { author: { user_id: credentials.user_id } },
    { $set: { author: { ...credentials } } }
  ).catch((err) => res.status(500).json({ error: err.code }));
};
