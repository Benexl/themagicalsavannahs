import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Import the Navbar
import Footer from "@/components/Footer"; // Import the Footer

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
    <html lang="en" className="flex flex-col min-h-screen">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-custom-white flex flex-col flex-1`}
      >
        <Navbar />
        <main className="pt-16 flex-grow"> {/* Add padding-top and flex-grow */}
          {children}
        </main>
        <Footer /> {/* Add the Footer component here */}
      </body>
    </html>
  );
}
