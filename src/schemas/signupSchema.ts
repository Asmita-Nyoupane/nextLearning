import { string, z } from "zod";

export const signupSchema = z.object({
  name: z
    .string()
    .min(3, "Name nust be atleast 3 character")
    .regex(/^[A-Za-z0-9_]+$/, "Name shouldn't contain special character"),

  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(6, "Password must be atleast 6 character"),
});
