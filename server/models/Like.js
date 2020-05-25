const mongoose = require("mongoose");

const LikeSchema = new mongoose.Schema({
  post_id: {
    type: String,
    required: true,
  },
  author: {
    type: Object,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Like", LikeSchema);
