/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
          "vidatel.net",
        ],
        formats: ['image/avif', 'image/webp']
      }
}

module.exports = nextConfig
