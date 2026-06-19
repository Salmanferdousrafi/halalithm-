/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "world.openfoodfacts.org"]
  }
};

module.exports = nextConfig;
