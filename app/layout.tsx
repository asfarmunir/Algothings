import type { Metadata } from "next";
import {
  DM_Sans,
  Lexend,
  Open_Sans,
  Space_Grotesk,
  Outfit,
} from "next/font/google";
import "./globals.css"; // For applying the global styles
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import AuthSessionProvider from "@/lib/AuthProvider";
// Initialize DM Sans font
const dmSans = DM_Sans({
  variable: "--font-dm-sans", // Global CSS variable for DM Sans
  subsets: ["latin"],
});

// Initialize Lexend font
const lexend = Lexend({
  variable: "--font-lexend", // Global CSS variable for Lexend
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Define the required weights
});

// Initialize Open Sans font
const openSans = Open_Sans({
  variable: "--font-open-sans", // Global CSS variable for Open Sans
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Define the required weights
});

// Initialize Space Grotesk font
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk", // Global CSS variable for Space Grotesk
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Define the required weights
});

// Initialize Outfit font
const outfit = Outfit({
  variable: "--font-outfit", // Global CSS variable for Outfit
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Define the required weights
});

export const metadata: Metadata = {
  title: "Algos Field",
  description: "Welcome to Algos Fields",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Optional: Include fallback link in the head for fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Lexend:wght@400;500;600;700&family=Open+Sans:wght@400;600;700&family=Space+Grotesk:wght@400;500;600;700&family=Outfit:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${dmSans.variable} ${lexend.variable} ${openSans.variable} ${spaceGrotesk.variable} ${outfit.variable}  antialiased`}
      >
        <AuthSessionProvider>
          <NextTopLoader
            color="green"
            initialPosition={0.08}
            crawlSpeed={200}
            height={2}
            crawl={true}
            showSpinner={false}
            easing=" ease-in-out"
            speed={200}
            shadow="0 0 5px #2299DD,0 0 5px #2299DD"
          />
          {children}
          <Toaster position="bottom-center" />
        </AuthSessionProvider>
      </body>
    </html>
  );
}
