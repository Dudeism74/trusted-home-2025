import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/images/**/*",
      },
    ],
  },
  async redirects() {
    return [
      // ---------------------------------------------------------
      // 1. CRITICAL FIXES (Soft 404s & Broken Pages)
      // ---------------------------------------------------------
      {
        source: '/garage-storage-essentials-clutter-free',
        destination: '/garage-storage-essentials-that-actually-keep-the-clutter-away',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/our-blog',
        destination: '/articles',
        permanent: true,
      },

      // ---------------------------------------------------------
      // 2. RSS FEED CLEANUP
      // ---------------------------------------------------------
      {
        source: '/feed',
        destination: '/articles',
        permanent: true,
      },
      {
        source: '/:path*/feed',
        destination: '/articles',
        permanent: true,
      },

      // ---------------------------------------------------------
      // 3. SPECIFIC BROKEN ARTICLES (Soft 404 Fixes)
      // ---------------------------------------------------------
      {
        source: '/best-vacuums-that-actually-work',
        destination: '/',
        permanent: true,
      },
      // ... inside next.config.ts ...

      {
        source: '/dryer-not-heating-fix-easy',
        destination: '/articles', // <--- CHANGED from '/appliances'
        permanent: true,
      },
      {
        source: '/diagnosing-a-bad-refrigerator-compressor',
        destination: '/articles', // <--- CHANGED from '/appliances'
        permanent: true,
      },
      {
        source: '/how-do-some-people-always-have-a-clean-house-heres-the-real-secret',
        destination: '/',
        permanent: true,
      },

      // ---------------------------------------------------------
      // 4. RESTORED REDIRECTS (Old Articles & Pages)
      // ---------------------------------------------------------
      {
        source: '/roborock-s8-maxv-ultra-review-worth-it',
        destination: '/articles',
        permanent: true,
      },
      {
        source: '/cirkul-water-bottle-review',
        destination: '/articles',
        permanent: true,
      },
      {
        source: '/college-dorm-essentials-checklist',
        destination: '/articles',
        permanent: true,
      },
      {
        source: '/best-robot-vacuums-worth-it',
        destination: '/articles',
        permanent: true,
      },
      {
        source: '/best-cleaning-essentials',
        destination: '/articles',
        permanent: true,
      },
      {
        source: '/home-repair-tools',
        destination: '/articles',
        permanent: true,
      },
      {
        source: '/weekly-deals-trusted-picks',
        destination: '/articles',
        permanent: true,
      },
      {
        source: '/affiliate-disclosure',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/about',
        permanent: true,
      },

      // ---------------------------------------------------------
      // 5. TAG & CATEGORY FIXES
      // ---------------------------------------------------------
      {
        source: '/tag/:slug*',
        destination: '/articles',
        permanent: true,
      },
      {
        source: '/category/:slug*',
        destination: '/articles',
        permanent: true,
      },

      // ---------------------------------------------------------
      // 6. EMOJI URL FIXES (Percent-Encoded for Googlebot)
      // ---------------------------------------------------------
      // 🌿 Eco Friendly
      {
        source: '/%F0%9F%8C%BF-eco-friendly-cleaning-swaps-that-actually-work',
        destination: '/',
        permanent: true,
      },
      // 🧠 ADHD / Executive Dysfunction
      {
        source: '/%F0%9F%A7%A0-how-to-stay-on-top-of-housework-with-adhd-or-executive-dysfunction',
        destination: '/',
        permanent: true,
      },
      // 🧰 Home Repair Tools
      {
        source: '/%F0%9F%A7%B0-home-repair-tools-that-make-life-easier',
        destination: '/',
        permanent: true,
      },
      // 🧠 Smart Home Essentials
      {
        source: '/%F0%9F%A7%A0-smart-home-essentials-that-actually-work',
        destination: '/',
        permanent: true,
      },
      // 🧼 Minimalist Cleaning Kits
      {
        source: '/%F0%9F%A7%BC-minimalist-cleaning-kits-that-actually-work-and-what-to-leave-out',
        destination: '/',
        permanent: true,
      },
      // 🌬️ Air Purifiers
      {
        source: '/%F0%9F%8C%AC%EF%B8%8F-the-best-air-purifiers-of-2025-that-actually-work',
        destination: '/',
        permanent: true,
      },
      // 🧼 Cleaning the Machines
      {
        source: '/%F0%9F%A7%BC-how-to-clean-the-cleaning-machines-so-they-dont-break-down-on-you',
        destination: '/',
        permanent: true,
      },
      // 🏡 Clean House Secret (Emoji Version)
      {
        source: '/%F0%9F%8F%A1-how-do-some-people-always-have-a-clean-house-heres-the-real-secret',
        destination: '/',
        permanent: true,
      },
      // Standard Text Fixes
      {
        source: '/how-to-choose-cleaning-tools-that-save-your-back',
        destination: '/',
        permanent: true,
      },
      {
        source: '/top-5-cleaning-essentials-every-home-should-have',
        destination: '/',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
