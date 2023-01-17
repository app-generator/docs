module.exports = {
	presets: [require.resolve("@docusaurus/core/lib/babel/preset")],
	env: {
		production: {
			plugins: [
				[
					"inline-dotenv",
					{
						path: ".env.production",
					},
				],
			],
		},
		development: {
			plugins: [
				[
					"inline-dotenv",
					{
						path: ".env.development",
					},
				],
			],
		},
	},
};
