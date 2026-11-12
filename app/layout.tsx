import type { Metadata } from "next";
import "./globals.css";
import { CreativeCursor } from "@/components/creative-cursor";

export const metadata: Metadata = {
  title: { default: "STAMINA Fruit Juices & Drinks | STAR AGRO FOODS", template: "%s | STAMINA – STAR AGRO FOODS" },
  description: "Official website of STAMINA Fruit Juices by STAR AGRO FOODS. Discover refreshing Mango, Litchi, Pink Guava, and Pomegranate drinks crafted for everyday moments.",
  icons: {
    icon: "/media/stamina-logo.png",
    shortcut: "/media/stamina-logo.png",
    apple: "/media/stamina-logo.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <CreativeCursor />
        {children}
      </body>
    </html>
  );
}
