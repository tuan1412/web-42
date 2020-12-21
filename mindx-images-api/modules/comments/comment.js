const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema(
  {
    content: {
      required: true,
      type: String
    },
    createdBy: {
      ref: 'User',
      type: mongoose.Types.ObjectId
    },
    post: {
      ref: 'Post',
      type: mongoose.Types.ObjectId
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Comment', CommentSchema);