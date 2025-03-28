/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      }
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: false,
  },
  eslint: {
    // Optionally: Also ignore ESLint errors during the build if needed
    ignoreDuringBuilds: false,
  },
  // Configure webpack to ignore markdown files
  webpack: (config) => {
    // Exclude markdown files from being processed as modules
    config.module.rules.push({
      test: /\.md$/,
      type: 'javascript/auto',
      use: [],
    });
    
    return config;
  },
}

module.exports = nextConfig

