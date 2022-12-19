/** @type {import('tailwindcss').Config} */
module.exports = {
	// content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [],
	purge: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.tsx"],
	corePlugins: { preflight: false, container: false },
	// important: "#tailwind",
};
