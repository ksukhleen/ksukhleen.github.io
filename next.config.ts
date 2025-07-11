/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // tells Next.js to do a static export
  // Optional: set base path if deploying to a subfolder (like GitHub Pages)
  basePath: '/ksukhleen.github.io',
  assetPrefix: '/ksukhleen.github.io',
};

module.exports = nextConfig;
