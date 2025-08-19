import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "rrdevs.net",
        port: '',
        pathname: '/**',
      },
    ]
  }
};

export default nextConfig;
