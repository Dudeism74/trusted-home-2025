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
        pathname: "/images/**",
      },
    ],
  },
  async redirects() {
    return [
      // ---------------------------------------------------------
      // 1. EXISTING REDIRECTS (These were already correct)
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
      // 2. NEW REDIRECTS (From your Jan 8th Traffic Report)
      // These stop the "Article Not Found" errors for the emoji links
      // ---------------------------------------------------------
      
      // Catch-all for old Wordpress Tags & Categories
      {
        source: '/tag/:slug*',
        destination: '/', 
        permanent: true,
      },
      {
        source: '/category/:slug*',
        destination: '/', 
        permanent: true,
      },

      // Specific "Emoji" URL Fixes
      {
        source: '/🌿-eco-friendly-cleaning-swaps-that-actually-work',
        destination: '/',
        permanent: true,
      },
      {
        source: '/🧠-how-to-stay-on-top-of-housework-with-adhd-or-executive-dysfunction',
        destination: '/',
        permanent: true,
      },
      {
        source: '/🧰-home-repair-tools-that-make-life-easier',
        destination: '/',
        permanent: true,
      },
      {
        source: '/🧠-smart-home-essentials-that-actually-work',
        destination: '/',
        permanent: true,
      },
      {
        source: '/🧼-minimalist-cleaning-kits-that-actually-work-and-what-to-leave-out',
        destination: '/',
        permanent: true,
      },
      {
        source: '/🌬️-the-best-air-purifiers-of-2025-that-actually-work',
        destination: '/',
        permanent: true,
      },
      {
        source: '/🧼-how-to-clean-the-cleaning-machines-so-they-dont-break-down-on-you',
        destination: '/',
        permanent: true,
      },
      {
        source: '/🏡-how-do-some-people-always-have-a-clean-house-heres-the-real-secret',
        destination: '/',
        permanent: true,
      },
      {
        source: '/how-to-choose-cleaning-tools-that-save-your-back',
        destination: '/',
        permanent: true,
      },
      {
        source: '/top-5-cleaning-essentials-every-home-should-have',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
