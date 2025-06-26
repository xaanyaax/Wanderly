import express from "express";
import { registerUser, loginUser } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/", (req, res) => {
    res.send("User API is working");
  });
  

export default router;
