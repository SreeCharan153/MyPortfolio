/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    domains: ['images.unsplash.com']
  },
  typescript: {
    ignoreBuildErrors: true
  }
};

module.exports = nextConfig;