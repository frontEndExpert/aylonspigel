module.exports = {
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
			'process.env.PUBLIC_URL': JSON.stringify(process.env.PUBLIC_URL),
		}),
	],
};
