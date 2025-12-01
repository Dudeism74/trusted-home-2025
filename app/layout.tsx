import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://trusted-home-2025.vercel.app'),
  title: {
    template: '%s | Trusted Home Essentials',
    default: 'Trusted Home Essentials',
  },
  description: 'The AI-First Home Maintenance Authority.',
  openGraph: {
    title: {
      template: '%s | Trusted Home Essentials',
      default: 'Trusted Home Essentials',
    },
    description: 'The AI-First Home Maintenance Authority.',
    url: 'https://trustedhomeessentials.com',
    siteName: 'Trusted Home Essentials',
    images: [
      {
        url: 'https://trustedhomeessentials.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Trusted Home Essentials',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      template: '%s | Trusted Home Essentials',
      default: 'Trusted Home Essentials',
    },
    description: 'The AI-First Home Maintenance Authority.',
    creator: '@trustedhomeessentials',
    images: ['https://trustedhomeessentials.com/twitter-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white text-slate-900 flex flex-col min-h-screen`}>
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}