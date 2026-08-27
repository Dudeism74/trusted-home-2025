import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { OpenAIAdsTracking } from "./components/openai-ads-tracking";
import "./globals.css";

const OPENAI_ADS_PIXEL_ID = "CJt53jFYSRyQWMHHfozm12";

const openAIAdsPixelSetup = `
(function (w, d, s, u) {
  if (w.oaiq) return;
  var q = function () {
    q.q.push(arguments);
  };
  q.q = [];
  w.oaiq = q;
  var js = d.createElement(s);
  js.async = true;
  js.src = u;
  var f = d.getElementsByTagName(s)[0];
  f.parentNode.insertBefore(js, f);
})(window, document, "script", "https://bzrcdn.openai.com/sdk/oaiq.min.js");

oaiq("init", {
  pixelId: "${OPENAI_ADS_PIXEL_ID}",
});
`;

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
    default: "Trusted Home Essentials | Practical Home Troubleshooting",
    template: "%s | Trusted Home Essentials",
  },
  description:
    "Practical home troubleshooting, maintenance guidance, and source-backed product analysis. Diagnose the problem before replacing what may be repairable.",
  openGraph: {
    type: "website",
    siteName: "Trusted Home Essentials",
    title: "Trusted Home Essentials | Practical Home Troubleshooting",
    description:
      "Diagnose home problems, understand the equipment, and replace only what the evidence points to.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trusted Home Essentials",
    description:
      "Practical home troubleshooting and buying guidance built around diagnosing the problem first.",
  },
  other: {
    "codex-preview": "development",
    "msvalidate.01": "7F8CFB4C5FAE0A178EB5924E3B871CF3",
  },
  verification: {
    google: "FlYTM9Sap79Z8WW7NmGJ1S3UTSU3h8Z-Km5IcBDWcGw",
  },
  icons: {
    icon: "/favicon.svg?v=2",
    shortcut: "/favicon.svg?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          data-openai-ads-pixel={OPENAI_ADS_PIXEL_ID}
          dangerouslySetInnerHTML={{ __html: openAIAdsPixelSetup }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <OpenAIAdsTracking />
      </body>
    </html>
  );
}
