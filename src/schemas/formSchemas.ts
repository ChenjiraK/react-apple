import { z } from "zod";
import { IRegister } from "../types/IAuth";

export const RegisterSchema: z.ZodType<IRegister> = z
  .object({
      firstname: z.string().min(1, "First name is required"),
      lastname: z.string().min(1, "Last name is required"),
      email: z.string().email("Invalid email format"),
      phoneNumber: z
         .string()
         .min(10, "Phone number must be at least 10 digits")
         .max(15, "Phone number is too long"),
      password: z.string().min(6, "Password must be at least 6 characters"),
      confirmPassword: z.string(),
      birthdate: z.date().nullable().refine((date) => date !== null, {
         message: "Birthdate is required",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// ใช้ z.infer เพื่อให้ TypeScript รู้ว่านี่คือ IRegister
export type RegisterFormType = z.infer<typeof RegisterSchema>;
