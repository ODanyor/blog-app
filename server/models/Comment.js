const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  post_id: {
    type: String,
    required: true,
  },
  author: {
    type: Object,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Comment", CommentSchema);
