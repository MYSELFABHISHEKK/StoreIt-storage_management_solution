import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "100MB",
    },
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
      {
        protocol: "https",
        hostname: "nyc.cloud.appwrite.io",
      },
    ],
  },

  reactStrictMode: true,
  // Remove experimental.turbopack if unused
};

export default nextConfig;
