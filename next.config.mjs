/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["images.pexels.com", "static.wixstatic.com"],
  },
  output: "export",
};

export default nextConfig;
