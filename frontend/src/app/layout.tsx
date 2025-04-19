import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Import the Navbar

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Magical Savannahs", // Updated title
  description: "Unforgettable Kenyan Adventures", // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-custom-white`} // Added bg-custom-white
      >
        <Navbar /> {/* Add the Navbar here */}
        <main className="pt-16"> {/* Add padding-top to offset fixed navbar */}
          {children}
        </main>
        {/* Add Footer component here later */}
      </body>
    </html>
  );
}
