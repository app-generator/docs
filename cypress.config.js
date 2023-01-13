const { defineConfig } = require("cypress");

module.exports = defineConfig({
	pageLoadTimeout: 640000,
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
	},

	component: {
		devServer: {
			framework: "react",
			bundler: "webpack",
		},
	},
});
