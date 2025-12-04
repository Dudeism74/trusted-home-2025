import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
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
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-white text-slate-900 flex flex-col min-h-screen`}>
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
      {/* Google Analytics */}
      <GoogleAnalytics gaId="G-C48XPCKD7E" />
    </html>
  );
}