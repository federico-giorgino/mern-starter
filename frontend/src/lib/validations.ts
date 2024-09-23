import { z } from "zod";

const requiredString = z.string().trim().min(1, "Required");

export const registerSchema = z.object({
  firstName: requiredString.min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: requiredString.min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: requiredString.email({
    message: "Please enter a valid email address.",
  }),
  password: requiredString.min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export const loginSchema = z.object({
  email: requiredString.email("Invalid email address"),
  password: requiredString,
});
