import { z } from "zod";

export const enquirySchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name is too long"),
  businessName: z
    .string()
    .trim()
    .max(120, "Business name is too long")
    .default(""),
  mobile: z
    .string()
    .trim()
    .regex(/^[+0-9][0-9\s-]{8,15}$/, "Please enter a valid phone or mobile number (min 9 digits)"),
  email: z
    .string()
    .trim()
    .min(5, "Email is required")
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"),
  city: z
    .string()
    .trim()
    .min(2, "City is required")
    .max(80),
  state: z
    .string()
    .trim()
    .min(2, "State is required")
    .max(80),
  businessType: z
    .string()
    .trim()
    .min(2, "Please select your business type"),
  message: z
    .string()
    .trim()
    .min(10, "Please provide a short description or inquiry details (min 10 characters)")
    .max(2000, "Message cannot exceed 2000 characters"),
  enquiryType: z
    .enum(["contact", "distributor", "product", "general"])
    .default("distributor"),
  product: z
    .string()
    .trim()
    .max(100)
    .default(""),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export type EnquiryResponse = {
  received: boolean;
  reference: string;
  timestamp: string;
  message: string;
  data?: Partial<EnquiryInput>;
};
