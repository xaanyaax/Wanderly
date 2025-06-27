
import { ZodSchema } from "zod";

const validate = (schema) => async (req, res, next) => {
  try {
    const parsedBody = await schema.parseAsync(req.body);
    req.body = parsedBody;
    next();
  } catch (error) {
    return res.status(400).json({
        
      message: "Validation failed",
      errors: error.errors, // more informative
    });
  }
};

export default validate;
