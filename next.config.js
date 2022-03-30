/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img.pokemondb.net'],
  },
  experimental: {
    concurrentFeatures: true,
  },
};

module.exports = nextConfig;
