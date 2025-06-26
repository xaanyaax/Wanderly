import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Not authorized" });

  try {
    const decoded = jwt.verify(token, "jwt_secret_key");
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Token failed", error: err.message });
  }
};
