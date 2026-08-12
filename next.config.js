/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.edgestore.dev",
      },
    ],
  },
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;
