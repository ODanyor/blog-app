const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  author: {
    type: Object,
    required: true,
  },
  content: {
    type: Object,
    required: true,
  },
  comments: {
    type: Array,
    default: [],
  },
  likes: {
    type: Array,
    default: [],
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Post", PostSchema);
