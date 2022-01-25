/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_UNSPLASHED_URL: process.env.NEXT_PUBLIC_UNSPLASHED_URL,
  },
};

module.exports = nextConfig;
