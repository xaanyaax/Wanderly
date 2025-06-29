import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find(); // fetches all posts from database

    res.status(200).json(postMessages); //array of all messages
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
  // res.json();
};

export const createPosts = async (req, res) => {
  const body = req.body;
  const newPost = new PostMessage(body);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

