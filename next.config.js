/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx"],
  output: "export",
  distDir: "_static",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.txt$/,
      type: "asset/source"
    })
    return config
  }
}
module.exports = nextConfig
