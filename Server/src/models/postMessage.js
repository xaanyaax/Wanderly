import mongoose from "mongoose";

const postSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true,
  },

  message: {
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
