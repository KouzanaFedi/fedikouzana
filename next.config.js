/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ["src"],
  },
  images: {
    domains: ["www.datocms-assets.com"],
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
