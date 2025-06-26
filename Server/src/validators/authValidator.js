import { z } from "zod";

const signupSchema = z.object({
  username: z
    .string({ required_error: "Username is required" })
    .trim()
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(20, { message: "Username cannot exceed 20 characters" }),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" }),

  phone: z
    .string({ required_error: "Phone number is required" })
    .trim()
    .regex(/^\d{10,15}$/, {
      message: "Phone number must be between 10 and 15 digits",
    }),

  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(20, { message: "Password cannot exceed 20 characters" }),
});

export default signupSchema;
