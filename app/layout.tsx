import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'; // Removed GoogleAdSense
import Script from "next/script"; // Added this
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.trustedhomeessentials.com'),
  title: {
    template: '%s | Trusted Home Essentials',
    default: 'Trusted Home Essentials | Expert Guides & Reviews',
  },
  description:
    'No-nonsense home maintenance guides and tool reviews. Verified by professional mechanics for homeowners who want to fix it right the first time.',
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: 'Trusted Home Essentials',
    description: 'Expert home maintenance guides verified by professionals.',
    url: 'https://www.trustedhomeessentials.com',
    siteName: 'Trusted Home Essentials',
    locale: 'en_US',
    type: 'website',
  },
  verification: {
    google: 'PmOG1Gfuwa-NIkUkGzwN-pXa-wIzmczPuWMqLgv4XKY',
    other: {
      "impact-site-verification": "e510ce3d-e83d-49e9-b9b8-7165af87095c",
    },
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
      
      {/* Google Analytics - Kept from library */}
      <GoogleAnalytics gaId="G-C48XPCKD7E" />
      
      {/* Google AdSense - Manual Script Implementation */}
      <Script
        id="adsense-init"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2173466789348999"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
    </html>
  );
}
