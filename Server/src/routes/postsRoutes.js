import express from "express";
import { getPosts, createPosts } from "../controllers/posts.js";
import upload from "../middlewares/multerMiddleware.js"; // ✅ Import your multer middleware
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Route to fetch all posts
router.get("/fetch", getPosts);

// Route to fetch posts for "explore" section (same controller for now)
router.post("/explore", getPosts); // you can change this later if needed

// ✅ Route to create a new post with image upload
router.post("/create", protect, upload.single("selectedFile"), createPosts);

export default router;


