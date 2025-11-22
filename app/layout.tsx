import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

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
      {/* CHANGED: This line now sets the background to Off-White (#F9FAFB) and text to Dark Gray */}
      <body className={`${inter.className} antialiased bg-[#F9FAFB] text-slate-900`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}