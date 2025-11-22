import type { Metadata } from "next";
import { Inter } from "next/font/google"; // We are switching to Google Fonts
import "./globals.css";
import Header from "./components/Header";

// Setup the Google Font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Trusted Home Essentials',
    default: 'Trusted Home Essentials',
  },
  description: 'The AI-First Home Maintenance Authority.',
  export const metadata: Metadata = {
  title: {
    template: '%s | Trusted Home Essentials',
    default: 'Trusted Home Essentials',
  },
  description: 'The AI-First Home Maintenance Authority.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* We apply the 'inter' font class here */}
      <body className={`${inter.className} antialiased bg-black text-white`}>
        <Header />
        {children}
      </body>
    </html>
  );
}