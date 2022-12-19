// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
// const CurrentStyle = require("./src/utils/CurrentStyle");
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
	supportUrl: "https://appseed.us/support",
	blogUrl: "https://blog.appseed.us",
	homeUrl: "https://appseed.us",
};

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "AppSeed",
	tagline: "Docusaurus version of AppSeed Docs - Migration from GitBook",
	url: "https://docs.appseed.us/",
	baseUrl: "/",
	onBrokenLinks: "throw",
	// onBrokenLinks: "ignore",
	onBrokenMarkdownLinks: "warn",
	// onBrokenMarkdownLinks: "ignore",
	// favicon: "https://appseed-srv1.com/appseed-v2/media/common/favicon.png",
	favicon: "/assets/favicon1.png",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "app-generator", // Usually your GitHub org/user name.
	projectName: "docs", // Usually your repo name.

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
					editUrl: "https://github.com/app-generator/docs-v2/tree/main/",
				},
				blog: false,
				// blog: {
				// 	showReadingTime: true,
				// 	// Please change this to your repo.
				// 	// Remove this to remove the "edit this page" links.
				// 	editUrl: "https://github.com/app-generator/docs-v2",
				// },
				theme: {
					customCss: require.resolve("./src/css/custom-1.css"),
				},
			}),
		],
	],
	customFields: { ...customFields },
	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			colorMode: {
				defaultMode: "dark",
				disableSwitch: false,
				// respectPrefersColorScheme: false,
				respectPrefersColorScheme: true,
			},
			announcementBar: {
				id: "welcome",
				content: '🎉 Welcome to our new Documentation with Docusaurus <a target="_blank" rel="noopener noreferrer" href="https://docs.appseed.us/">Back to previous version</a>',
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
					// src: "/assets/logo2-light.svg",
					// src: "/assets/logo3-light.svg",
					// src: "/assets/logo4-light.svg",
					// src: "/assets/logo5-light.svg",
					// srcDark: "/assets/logo-dark.svg",
					// srcDark: "/assets/logo1-dark.svg",
					// srcDark: "/assets/logo2-dark.svg",
					// srcDark: "/assets/logo3-dark.svg",
					// srcDark: "/assets/logo4-dark.svg",
					// srcDark: "/assets/logo2-dark.svg",
					// target: "/assets/logo5-dark.svg",
					src: "/assets/logo2-dark.svg",
					// width: 142,
					// height: 142,
				},
				hideOnScroll: true,
				items: [
					// {
					// 	type: "doc",
					// 	docId: "app-seed",
					// 	position: "left",
					// 	label: "Tutorial ",
					// },
					{
						label: "Get Started",
						position: "left",
						items: [
							{
								// type: "doc",
								// docId: "app-generator",
								to: "introduction",
								label: "Introduction",
							},
							{
								// type: "doc",
								// docId: "app-generator",
								to: "app-generator",
								label: "App Generator",
							},
							{
								// type: "doc",
								// docId: "support",
								to: "support",
								label: "Support",
							},
							// {
							// 	// type: "doc",
							// 	docId: "boilerplate-code",
							// 	to: "boilerplate-code",
							// 	label: "Boilerplate Code",
							// },
							{
								// type: "doc",
								// docId: "boilerplate-code/api-server",
								to: "/boilerplate-code",
								label: "Boilerplate-Code",
							},
						],
					},

					// {
					// 	type: "docsVersionDropdown",
					// 	position: "left",
					// },
					{
						label: "Tutorials",
						to: "/content/tutorials",
						position: "left",
					},
					{
						label: "Community",
						position: "left",
						items: [
							{
								label: "GitHub",
								href: customFields.githubUrl,
							},
							{
								label: "Discord",
								href: customFields.discordUrl,
							},
							{
								label: "Support",
								href: customFields.supportUrl,
							},
							{
								label: "Blog",
								href: customFields.blogUrl,
							},
							{
								label: "AppSeed",
								href: customFields.homeUrl,
							},
						],
					},
					{ to: customFields.blogUrl, label: "Blog ", position: "left" },
					{
						label: "Partners",
						to: "/content/partners",
						position: "left",
					},
					// {
					// 	label: "themes",
					// 	position: "left",
					// 	items: [
					// 		{
					// 			type: "custom-Switcher",
					// 		},
					// 	],
					// },

					// {
					// 	href: "https://appseed.us/",
					// 	label: "AppSeed ",
					// 	position: "right",
					// },
					// {
					// 	href: "https://appseed.us/support/",
					// 	label: "Support ",
					// 	position: "right",
					// },
					// {
					// 	href: "https://blog.appseed.us/",
					// 	label: "Blog ",
					// 	position: "right",
					// },

					{
						href: "https://github.com/app-generator",
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
					// {
					// 	type: "localeDropdown",
					// 	position: "right",
					// },
				],
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Docs",
						items: [
							{
								label: "Tutorial",
								to: "/",
							},
						],
					},
					{
						title: "Community",
						items: [
							{
								label: "GitHub",
								href: customFields.githubUrl,
							},
							{
								label: "Discord",
								href: customFields.discordUrl,
							},
							{
								label: "Support",
								href: customFields.supportUrl,
							},
							{
								label: "Blog",
								href: customFields.blogUrl,
							},
							{
								label: "AppSeed",
								href: customFields.homeUrl,
							},
						],
					},
					{
						title: "More",
						items: [
							{
								label: "Blog",
								href: customFields.blogUrl,
							},
							{
								label: "GitHub",
								href: customFields.githubUrl,
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} AppSeed, Inc. All rights reserved..`,
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
