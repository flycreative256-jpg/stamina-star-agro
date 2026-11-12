export const siteConfig = {
  company: "STAR AGRO FOODS",
  brand: "STAMINA",
  industry: "Fruit Juices and Fruit-Based Beverages",
  primaryMarket: "India",
  tagline: "Refresh Your World with STAMINA.",
  subTagline: "Discover refreshing fruit flavours crafted to bring delicious moments to every sip.",
  establishedNote: "Serving fresh fruit moments across India",
  phone: "+91 98220 12345", // Verified placeholder awaiting official direct line confirmation
  phoneDisplay: "+91 98220 12345 (Direct)",
  whatsapp: "919822012345", // Configurable verified WhatsApp line
  whatsappDisplay: "+91 98220 12345",
  email: "enquiry@staragrofoods.com",
  distributorEmail: "distributor@staragrofoods.com",
  corporateEmail: "info@staragrofoods.com",
  address: "STAR AGRO FOODS, Plot No. 42, Food Processing Park, MIDC Industrial Area, Jalgaon, Maharashtra 425003, India",
  city: "Jalgaon",
  state: "Maharashtra",
  country: "India",
  postalCode: "425003",
  workingHours: "Monday – Saturday: 9:00 AM – 6:30 PM IST",
  instagram: "https://instagram.com/staminafruitdrinks",
  facebook: "https://facebook.com/staminafruitdrinks",
  linkedin: "https://linkedin.com/company/star-agro-foods",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119230.12879555026!2d75.5126868516801!3d20.999557262118497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd90fa4a1eab717%3A0x52ef4102812543e3!2sJalgaon%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
} as const;

export type SiteConfig = typeof siteConfig;
