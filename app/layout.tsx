/**
 * Layout: App Root Layout
 * Purpose: Sets global styles, metadata, and font for the entire application.
 * This layout wraps all routes in the app and applies the Toaster for global notifications.
 */

import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

// Load Mona Sans font with Latin subset
const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

// Define app-wide metadata
export const metadata: Metadata = {
  title: "PrepWise",
  description: "An AI-powered platform for preparing for mock interviews.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      {/* Apply font and global styles */}
      <body className={`${monaSans.className} antialiased pattern`}>
        {children}
        {/* Global notification toaster */}
        <Toaster />
      </body>
    </html>
  );
}
