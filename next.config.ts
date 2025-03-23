import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["frank-seasnail-suited.ngrok-free.app"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.mux.com",
      },
      {
        protocol: "https",
        hostname: "utfs.io"
      }
    ],
  },
};

export default nextConfig;
