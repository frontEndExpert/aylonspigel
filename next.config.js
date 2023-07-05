/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	trailingSlash: true,
	experimental: {
		appDir: false,
		typedRoutes: true,
	},
	images: {
		unoptimized: true,
	},
};

module.exports = nextConfig;
