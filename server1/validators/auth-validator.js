// validators/auth-validator.js
const { z } = require('zod');

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least 3 characters long" })
    .max(255, { message: "Email must not be more than 255 characters" }),

  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(7, { message: "Password must be at least 7 characters long" })
    .max(1024, { message: "Password must not be more than 1024 characters" }),
});

const signupSchema = loginSchema.extend({
  username: z
    .string({ required_error: "Username is required" })
    .trim()
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(255, { message: "Username must not be more than 255 characters" }),
});

module.exports = { signupSchema, loginSchema };
