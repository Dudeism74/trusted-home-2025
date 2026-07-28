import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.trustedhomeessentials.com"),
  title: {
    default: "Trusted Home Essentials | Practical Product Buying Guides",
    template: "%s | Trusted Home Essentials",
  },
  description:
    "Practical home product buying guides that explain fit, benefits, limitations, and what to confirm before ordering.",
  openGraph: {
    type: "website",
    siteName: "Trusted Home Essentials",
    title: "Trusted Home Essentials | Practical Product Buying Guides",
    description:
      "Useful home product guidance with benefits, tradeoffs, and clearly sourced specifications.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trusted Home Essentials",
    description:
      "Useful home product guidance with benefits, tradeoffs, and clearly sourced specifications.",
  },
  other: {
    "codex-preview": "development",
    "msvalidate.01": "7F8CFB4C5FAE0A178EB5924E3B871CF3",
  },
  verification: {
    google: "FlYTM9Sap79Z8WW7NmGJ1S3UTSU3h8Z-Km5IcBDWcGw",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
