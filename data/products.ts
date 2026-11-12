export type Product = {
  id: string;
  slug: string;
  name: string;
  flavour: string;
  tagline: string;
  description: string;
  image: string;
  gallery: string[];
  packagingSizes: string[];
  tastingNotes: string[];
  ingredients: string[] | null;
  nutrition: Record<string, string> | null;
  availability: string;
  featured: boolean;
  badge?: string;
  palette: {
    background: string;
    accent: string;
    primary: string;
    deep: string;
    glow: string;
    cardBg: string;
  };
  details: {
    fssaiMark: boolean;
    isVegetarian: boolean;
    packagingType: string;
    shelfLifeNote: string;
    storageInstruction: string;
  };
};

export const products: Product[] = [
  {
    id: "stamina-mango",
    slug: "mango",
    name: "STAMINA Mango Fruit Drink",
    flavour: "Mango",
    tagline: "Rich, Sun-ripened Tropical Nectar",
    description:
      "Crafted with luscious mango pulp to deliver the authentic, mouth-filling sweetness of India's favourite fruit. Every chilled sip carries the deep golden warmth of summer orchards.",
    image: "/media/mango.jpg",
    gallery: ["/media/mango.jpg", "/media/mango-splash.jpg", "/media/stamina-lineup.jpg"],
    packagingSizes: ["250 ml PET Bottle (Confirmed)", "Additional SKUs available on enquiry"],
    tastingNotes: [
      "Luscious Mango Pulp",
      "Authentic Tropical Aroma",
      "Velvety Mouthfeel",
      "Satisfying Sweet Finish",
    ],
    ingredients: null, // Placeholder: awaiting client-verified FSSAI formulation
    nutrition: null, // Placeholder: awaiting laboratory-certified nutrition panel
    availability: "Ready for distribution across retail, wholesale, and institutional networks in India.",
    featured: true,
    badge: "Bestseller",
    palette: {
      background: "#FFF8E7",
      accent: "#FF7A1A",
      primary: "#FFC928",
      deep: "#173D2A",
      glow: "#FFA500",
      cardBg: "#FFFDF6",
    },
    details: {
      fssaiMark: true,
      isVegetarian: true,
      packagingType: "Recyclable Food-Grade PET Bottle with Tamper-Evident Cap",
      shelfLifeNote: "Manufactured with state-of-the-art sterile processing. See bottle shoulder for exact MFD & Best Before date.",
      storageInstruction: "Store in a cool, hygienic dry place away from direct sunlight. Chill before serving. Crush bottle after use.",
    },
  },
  {
    id: "stamina-litchi",
    slug: "litchi",
    name: "STAMINA Litchi Fruit Drink",
    flavour: "Litchi",
    tagline: "Delicate, Floral & Supremely Refreshing",
    description:
      "Infused with the translucent, fragrant essence of premium litchis. Light, sweet, and wonderfully crisp, STAMINA Litchi offers an instant cooling wave that revitalizes on warm afternoons.",
    image: "/media/litchi-studio.jpg",
    gallery: ["/media/litchi-studio.jpg", "/media/litchi.jpg", "/media/stamina-lineup.jpg"],
    packagingSizes: ["250 ml PET Bottle (Confirmed)", "Additional SKUs available on enquiry"],
    tastingNotes: [
      "Delicate Floral Scent",
      "Crisp Cooling Palate",
      "Balanced Fruit Sweetness",
      "Refreshing Clean Finish",
    ],
    ingredients: null,
    nutrition: null,
    availability: "Ready for distribution across retail, wholesale, and institutional networks in India.",
    featured: true,
    badge: "Popular",
    palette: {
      background: "#FFF0F3",
      accent: "#E63956",
      primary: "#FF6B8B",
      deep: "#173D2A",
      glow: "#FF4D6D",
      cardBg: "#FFF8F9",
    },
    details: {
      fssaiMark: true,
      isVegetarian: true,
      packagingType: "Recyclable Food-Grade PET Bottle with Tamper-Evident Cap",
      shelfLifeNote: "Manufactured with state-of-the-art sterile processing. See bottle shoulder for exact MFD & Best Before date.",
      storageInstruction: "Store in a cool, hygienic dry place away from direct sunlight. Chill before serving. Crush bottle after use.",
    },
  },
  {
    id: "stamina-guava",
    slug: "guava",
    name: "STAMINA Pink Guava Fruit Drink",
    flavour: "Pink Guava",
    tagline: "Lush, Tangy & Bursting with Character",
    description:
      "Made from select pink guavas celebrated for their vivid blush and rich pulp. Offering a delightful interplay of gentle tanginess and mellow sweetness, this drink is an unforgettable tropical treat.",
    image: "/media/guava.jpg",
    gallery: ["/media/guava.jpg", "/media/stamina-lineup.jpg"],
    packagingSizes: ["250 ml PET Bottle (Confirmed)", "Additional SKUs available on enquiry"],
    tastingNotes: [
      "Authentic Pink Pulp",
      "Pleasant Zesty Tartness",
      "Full-Bodied Body",
      "Rich Fruit Bouquet",
    ],
    ingredients: null,
    nutrition: null,
    availability: "Ready for distribution across retail, wholesale, and institutional networks in India.",
    featured: true,
    badge: "Staff Pick",
    palette: {
      background: "#FDF2F4",
      accent: "#E83D6F",
      primary: "#55B747",
      deep: "#173D2A",
      glow: "#E83D6F",
      cardBg: "#FFF9FA",
    },
    details: {
      fssaiMark: true,
      isVegetarian: true,
      packagingType: "Recyclable Food-Grade PET Bottle with Tamper-Evident Cap",
      shelfLifeNote: "Manufactured with state-of-the-art sterile processing. See bottle shoulder for exact MFD & Best Before date.",
      storageInstruction: "Store in a cool, hygienic dry place away from direct sunlight. Chill before serving. Crush bottle after use.",
    },
  },
  {
    id: "stamina-pomegranate",
    slug: "pomegranate",
    name: "STAMINA Pomegranate Fruit Drink",
    flavour: "Pomegranate",
    tagline: "Deep Ruby Boldness & Refreshing Tart Balance",
    description:
      "Bursting with the bold character of ruby-red pomegranate arils. Featuring a crisp, tart kick harmonized with gentle fruit sweetness, STAMINA Pomegranate brings sophistication to every sip.",
    image: "/media/pomegranate.jpg",
    gallery: ["/media/pomegranate.jpg", "/media/stamina-lineup.jpg"],
    packagingSizes: ["250 ml PET Bottle (Confirmed)", "Additional SKUs available on enquiry"],
    tastingNotes: [
      "Ruby Red Depth",
      "Tart-Sweet Equilibrium",
      "Invigorating Sharpness",
      "Rich Aromatic Finish",
    ],
    ingredients: null,
    nutrition: null,
    availability: "Ready for distribution across retail, wholesale, and institutional networks in India.",
    featured: true,
    badge: "Signature",
    palette: {
      background: "#FDF0F2",
      accent: "#B81835",
      primary: "#DC2626",
      deep: "#173D2A",
      glow: "#B81835",
      cardBg: "#FFF8F9",
    },
    details: {
      fssaiMark: true,
      isVegetarian: true,
      packagingType: "Recyclable Food-Grade PET Bottle with Tamper-Evident Cap",
      shelfLifeNote: "Manufactured with state-of-the-art sterile processing. See bottle shoulder for exact MFD & Best Before date.",
      storageInstruction: "Store in a cool, hygienic dry place away from direct sunlight. Chill before serving. Crush bottle after use.",
    },
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug || product.id === slug);
}

export function getAllProducts(): Product[] {
  return products;
}
