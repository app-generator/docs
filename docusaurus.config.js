// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion
// const CurrentStyle = require("./src/utils/CurrentStyle");
const { webpackPlugin } = require("./plugins/webpack-plugin.cjs");
const lightCodeTheme = require("prism-react-renderer/themes/github");
// const darkCodeTheme = require("prism-react-renderer/themes/dracula");
// const Embed = require("./plugins/remark/embed");
const darkCodeTheme = require("prism-react-renderer/themes/shadesOfPurple");
const customFields = {
	meta: {
		title: "An atom based state manager for JavaScript apps.",
		image: "/img/meta.png",
		description:
			"An atom based global State and Logic Library implemented in Typescript, " +
			"offering a reimagined API that focuses on developer experience. " +
			"AgileTs is a more straightforward alternative to Redux " +
			"and allows you to easily manage your application States in React, Vue and plain Javascript.",
		color: "#6c69a0",
		keywords: [],
	},
	githubUrl: "https://github.com/app-generator",
	githubDocsUrl: "https://github.com/app-generator/docs",
	discordUrl: `https://discord.com/invite/fZC6hup`,
	supportUrl: "https://appseed.us/support/",
	blogUrl: "https://blog.appseed.us",
	homeUrl: "https://appseed.us",
	EMAILJS_SERVER_ID: process.env.EMAILJS_SERVER_ID,
	EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
	EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
};

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "AppSeed",
	tagline: "App Generator - The official Documentation",
	url: "https://docs.appseed.us/",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "/assets/favicon1.png",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "app-generator", // Usually your GitHub org/user name.
	projectName: "docs", // Usually your repo name.
	trailingSlash: true,

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},
	// themes: ["@docusaurus/theme-live-codeblock"],
	plugins: [
		// "docusaurus-plugin-sass",
		// @docusaurus/plugin-google-analytics (Not necessary because it automatically gets added),
		async function myPlugin(context, options) {
			return {
				name: "docusaurus-tailwindcss",
				configurePostCss(postcssOptions) {
					// Appends TailwindCSS and AutoPrefixer.
					postcssOptions.plugins.push(require("tailwindcss"));
					postcssOptions.plugins.push(require("autoprefixer"));
					return postcssOptions;
				},
			};
		},
		webpackPlugin,
	],
	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					// path: 'docs/home',
					// remarkPlugins: [require("./plugins/remark/embed")],
					routeBasePath: "/",
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: "https://github.com/app-generator/docs/tree/main/",
				},
				blog: false,
				// blog: {
				// 	showReadingTime: true,
				// 	// Please change this to your repo.
				// 	// Remove this to remove the "edit this page" links.
				// 	editUrl: "https://github.com/app-generator/docs-v2",
				// },
				theme: {
					// customCss: require.resolve("./src/css/custom-1.css"),
					// customCss: require.resolve("./src/css/custom_original.css"),
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],
	customFields: { ...customFields },

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			colorMode: {
				defaultMode: "light",
				disableSwitch: false,
				respectPrefersColorScheme: false,
				// respectPrefersColorScheme: true,
			},
			announcementBar: {
				id: "welcome",
				content: '🎁 PROMO <strong><a target="_blank" href="https://appseed.us/discounts/">Boost 2023 - 75%OFF</a></strong> (all products).',
				backgroundColor: "#ec407a",
				// textColor: "#091E42",
				textColor: "#000000",
				isCloseable: true,
			},
			docs: {
				sidebar: {
					hideable: false,
					autoCollapseCategories: true,
				},
			},
			navbar: {
				// style: "dark",
				// title: "AppSeed Docs",
				logo: {
					href: "/",
					alt: "AppSeed Logo",

					// src: "https://appseed-srv1.com/appseed-v2/media/common/logo.png",
					// src: "https://appseed-srv1.com/appseed-v2/media/common/logo-text.png",
					// src: "https://docs.dyte.io/logo/light.svg",
					// src: "/assets/logo-light.svg",
					// src: "/assets/logo1-light.svg",
					src: "/assets/logo2-light.svg",
					// src: "/assets/logo3-light.svg",
					// src: "/assets/logo4-light.svg",
					// src: "/assets/logo5-light.svg",
					// srcDark: "/assets/logo-dark.svg",
					// srcDark: "/assets/logo1-dark.svg",
					srcDark: "/assets/logo2-dark.svg",
					// srcDark: "/assets/logo3-dark.svg",
					// srcDark: "/assets/logo4-dark.svg",
					// srcDark: "/assets/logo2-dark.svg",
					// target: "/assets/logo5-dark.svg",
					// src: "/assets/logo2-dark.svg",
					width: 142,
					height: 142,
				},
				hideOnScroll: true,
				items: [
					{
						label: "Links",
						position: "left",
						items: [
							{
								to: "introduction/",
								label: "Introduction",
							},
							{
								to: "app-generator/",
								label: "App Generator",
							},
							{
								to: "support",
								label: "Support",
							},
						],
					},

					{
						href: "https://github.com/app-generator/app-generator/",
						// label: "GitHub ",
						className: "pseudo-icon github-icon",
						position: "right",
					},
					{
						href: "https://discord.com/invite/fZC6hup",
						// label: "Discord ",
						className: "pseudo-icon discord-icon",
						position: "right",
					},
					{
						type: "search",
						position: "right",
					},
				],
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Docs",
						items: [
							{
								label: "Get Started",
								to: "introduction",
							},
							{
								label: "Dashboards",
								to: "products/django-dashboards",
							},
							{
								label: "API Servers",
								to: "boilerplate-code/api-server",
							},
						],
					},
					{
						title: "Community",
						items: [
							{
								label: "Support",
								href: customFields.supportUrl,
							},
							{
								label: "Discord",
								href: customFields.discordUrl,
							},

							{
								label: "Blog",
								href: customFields.blogUrl,
							},
						],
					},
					{
						title: "Partners",
						items: [
							{
								label: "Creative-Tim",
								href: "https://appseed.us/agency/creative-tim/",
							},
							{
								label: "CodedThemes",
								href: "https://appseed.us/agency/codedthemes/",
							},
							{
								label: "UPDIVISION",
								href: "https://appseed.us/agency/updivision/",
							},
						],
					},
				],
				copyright: `&copy; ${new Date().getFullYear()} <a target="_blank" rel="noopener noreferrer" href="https://appseed.us/">AppSeed</a> - All Rights Reserved.`,
			},
			prism: {
				theme: lightCodeTheme,
				// theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
			algolia: {
				appId: "R2IYF7ETH7",
				apiKey: "599cec31baffa4868cae4e79f180729b",
				indexName: "docsearch",
				contextualSearch: true,
				searchParameters: {},
			},
		}),
};

module.exports = config;
