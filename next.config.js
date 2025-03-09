/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx"],
  output: "export",
  distDir: "_static",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  async rewrites() {
    return [
      {
        source: "/tiktok34bhZfkTmZkBvcQnkVwwJVKe0bIFd6cw.txt",
        destination: "/api/tiktok-verification"
      }
    ]
  }
}
module.exports = nextConfig
