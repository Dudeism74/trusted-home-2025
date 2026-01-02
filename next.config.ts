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
      // 1. Redirect the high-traffic "Ghost" pages to your main articles feed
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
      // 2. Legal & Misc pages
      {
        source: '/affiliate-disclosure',
        destination: '/privacy-policy', // We just created this, so it's a good match
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/about',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
