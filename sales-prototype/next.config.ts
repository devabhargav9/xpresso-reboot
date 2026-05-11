import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/explore/attendance",
        destination: "/explore/ims/attendance",
        permanent: true,
      },
      {
        source: "/explore/placement",
        destination: "/explore/ims/placement",
        permanent: true,
      },
      {
        source: "/explore/odp",
        destination: "/explore/als/odp",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
