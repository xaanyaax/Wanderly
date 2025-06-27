import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    const error = new Error("Not authorized, token missing");
    error.status = 401;
    return next(error); 
  }

  try {
    const decoded = jwt.verify(token, "jwt_secret_key");
    req.user = decoded;
    next();
  } catch (err) {
    const error = new Error("Token verification failed");
    error.status = 401;
    error.extraDetails = err.message;
    next(error); 
  }
};
