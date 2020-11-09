import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
  _id: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
  text: {
    type: String,
    require: true,
  },
  timestamp: {
    type: Date,
    require: true,
  },
});

const Comment = mongoose.model('Comment', CommentSchema);

export default Comment;
