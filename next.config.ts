import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: false,
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
      },
    ],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.glsl$/,
      type: "asset/source",
    });
    return config;
  },
};

export default nextConfig;
