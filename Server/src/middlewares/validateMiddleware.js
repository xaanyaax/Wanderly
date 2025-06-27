import { ZodSchema } from "zod";

const validate = (schema) => async (req, res, next) => {
  try {
    const parsedBody = await schema.parseAsync(req.body);
    req.body = parsedBody;
    next();
  } catch (error) {
    error.status = 400; // optional: mark as client error
    error.extraDetails = "Zod schema validation failed";
    next(error); // pass to centralized error middleware
  }
};

export default validate;
