import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.rivaincorporadora.com.br",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
