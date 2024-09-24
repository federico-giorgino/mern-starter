import { registerSchema, loginSchema } from "@/lib/validations";
import { z } from "zod";

export type RegisterValues = z.infer<typeof registerSchema>;

export type LoginValues = z.infer<typeof loginSchema>;
