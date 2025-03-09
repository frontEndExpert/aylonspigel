/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx"],
  output: "export",
  distDir: "_static",
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
