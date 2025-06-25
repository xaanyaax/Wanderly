import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  Creator: {
    type: String,
    required: true,
  },

  Title: {
    type: String,
    required: true,
  },

  Message: {
    type: String,
    required: true,
  },

  tags: {
    type: [String],
    default: [],
  },

  selectedFile: {
    type: String,
  },

  likeCount: {
    type: Number,
    default: 0,
  },

  createdAt: {
    type: Date,
    default: () => new Date(), // avoids Date being fixed at schema creation time
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
