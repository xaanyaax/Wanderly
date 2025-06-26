import User from "../../models/userModel.js";
import bcrypt from "bcryptjs";

export const registerUser = async (req, res) => {
  const { username, email, phone, password } = req.body; //req.body is a property in Express.js (a Node.js web application framework) that contains the data sent by the client in the body of an HTTP request—typically in POST or PUT requests.

  try {
    const existingUser = await User.findOne({ email: email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    //create new user
    const newUser = await User.create({
      username,
      email,
      phone,
      password: hashedPassword,
    });

    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });

      
  } catch (err) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: err.message });
  }
};
