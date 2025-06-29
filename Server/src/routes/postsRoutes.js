import express from "express";
import { getPosts, createPost } from "../controllers/posts.js";
import upload from "../middleware/multer.js"; // ✅ Import your multer middleware

const router = express.Router();

// Route to fetch all posts
router.get("/", getPosts);

// Route to fetch posts for "explore" section (same controller for now)
router.post("/explore", getPosts); // you can change this later if needed

// ✅ Route to create a new post with image upload
router.post("/create", upload.single("selectedFile"), createPost);

export default router;


