import express from "express";
import { registerUser } from "../controllers/authentication/registerUser.js";
import { loginUser } from "../controllers/authentication/loginUser.js";

const router = express.Router();  //creates a Router instance

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/", (req, res) => {
    res.send("User API is working");
  });
  

export default router;
