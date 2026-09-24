import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { GoogleAnalyticsTracking } from "./components/google-analytics-tracking";
import { OpenAIAdsTracking } from "./components/openai-ads-tracking";
import "./globals.css";

const GA4_MEASUREMENT_ID = "G-C48XPCKD7E";
const OPENAI_ADS_PIXEL_ID = "CJt53jFYSRyQWMHHfozm12";
const ADSENSE_PUBLISHER_ID = "ca-pub-2173466789348999";

const ga4Setup = `
(function () {
  var qaKey = "the-qa-session-v1";
  var qaSession = false;

  try {
    var params = new URLSearchParams(window.location.search);
    if (params.get("qa") === "1") {
      window.sessionStorage.setItem(qaKey, "1");
    }
    qaSession = window.sessionStorage.getItem(qaKey) === "1";
  } catch (_) {}

  window.__trustedEssentialsQa = qaSession;
  if (qaSession) return;

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", "${GA4_MEASUREMENT_ID}", {
    send_page_view: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false
  });

  var script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}";
  script.dataset.theAnalytics = "google-analytics";
  document.head.appendChild(script);
})();
`;

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
    "google-adsense-account": ADSENSE_PUBLISHER_ID,
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
        <Script
          id="adsense-bootstrap"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUBLISHER_ID}`}
          strategy="beforeInteractive"
          crossOrigin="anonymous"
        />
        <Script
          id="ga4-bootstrap"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: ga4Setup }}
        />
        <script
          data-openai-ads-pixel={OPENAI_ADS_PIXEL_ID}
          dangerouslySetInnerHTML={{ __html: openAIAdsPixelSetup }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <GoogleAnalyticsTracking />
        <OpenAIAdsTracking />
      </body>
    </html>
  );
}
