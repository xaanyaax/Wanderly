import express from "express";
import { registerUser } from "../controllers/authentication/registerUser.js";
import { loginUser } from "../controllers/authentication/loginUser.js";
import validate from "../middlewares/validateMiddleware.js";
import signupSchema from "../validators/authValidator.js";

const router = express.Router();  //creates a Router instance

router.post("/register", validate(signupSchema), registerUser);
router.post("/login", loginUser);

router.get("/", (req, res) => {
    res.send("User API is working");
  });
  

export default router;
