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
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "raccaimoveis.com.br",
          },
        ],
        destination: "https://www.raccaimoveis.com.br/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
