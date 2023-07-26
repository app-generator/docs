import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import SupportPricing from "@site/src/components/SupportPricing";
import Bg from "@site/static/assets/appSeed-home-bg.png"; // with import
import Rocket from "@site/static/assets/appseed_round_rocket.png"; // with import
import styles from "./index.module.css";
import Radium, { StyleRoot } from "radium";
import animationStyles from "@site/src/utils/animationStyles";
import { useColorMode } from "@docusaurus/theme-common";
import { useBaseUrlUtils } from "@docusaurus/useBaseUrl";

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<StyleRoot>
			<header className={clsx("hero hero--dark", styles.heroBanner)}>
				{/* <header className={clsx(styles.heroBanner)}> */}
				<div className="container">
					{/* <h1 className="hero__title">{siteConfig.title}</h1>
					<p className="hero__subtitle" style={animationStyles.wobble}>
						{siteConfig.tagline}
					</p> */}

					<img width={"100%"} src={Bg} style={animationStyles.bounce} />
					<div className={styles.buttons}>
						<Link className="button button--secondary button--lg" to="/support">
							GET STARTED
						</Link>
					</div>
				</div>
			</header>
		</StyleRoot>
	);
}
function HomeShowcase() {
	const { withBaseUrl } = useBaseUrlUtils();
	const showcaseProjects = [
		{ name: "flask", href: "", image: "https://appseed-srv1.com/appseed-v2/custom-v1/img/logo/flask-icon.svg" },
		{ name: "django", href: "", image: "https://appseed-srv1.com/appseed-v2/custom-v1/img/logo/django-icon.svg" },
		{ name: "laravel", href: "", image: "https://appseed-srv1.com/appseed-v2/custom-v1/img/logo/laravel-icon.svg" },
		{ name: "react", href: "", image: "https://appseed-srv1.com/appseed-v2/custom-v1/img/logo/reactjs-icon.svg" },
		{ name: "hml", href: "", image: "https://appseed-srv1.com/appseed-v2/custom-v1/img/logo/html5-icon.svg" },
		{ name: "saas", href: "", image: "https://appseed-srv1.com/appseed-v2/custom-v1/img/logo/sass-icon.svg" },
	];
	return (
		<StyleRoot>
			{/* Showcase */}
			<div className="overflow-hidden">
				<div className="relative max-w-xl mx-auto px-4 md:px-6 lg:px-8 lg:max-w-screen-xl">
					<div className="pb-8 md:pb-16 md:w-4/5 lg:w-full">
						<br />
					</div>

					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-base leading-9 font-extrabold md:text-4xl md:leading-10">TECHNOLOGIES</h2>
					</div>
					<div className="flex justify-center text-center p-2">
						{showcaseProjects.map(({ name, href, image }, idx) => (
							<div key={idx} className="p-2">
								<img className="inline-block w-16 md:h-16 m-2" src={withBaseUrl(image)} alt={`Discover DocSearch on the ${name} documentation`} />
							</div>
						))}
					</div>
				</div>
			</div>
		</StyleRoot>
	);
}
function HomepageHeaderW() {
	const { siteConfig } = useDocusaurusContext();
	const { colorMode } = useColorMode();

	React.useEffect(() => {
		if (colorMode === "dark") {
			document.querySelector("html").classList.add("dark");
		} else {
			document.querySelector("html").classList.remove("dark");
		}
	}, [colorMode]);
	return (
		<StyleRoot>
			{/* <header className={clsx("hero", styles.heroBanner)}> */}
			<header className="lg:mt-32  w-full h-auto lg:h-4/6 lg:mb-16 mb:ml-24 dark:bg-slate-900">
				<div className="grid lg:flex lg:w-4/5 lg:h-4/6  lg:ml-24">
					<div className="lg:relative  lg:flex w-full lg:w-4/5 lg:basis-1/2 order-last lg:order-first bg-transparent ">
						<div className="lg:absolute  lg:w-full lg:h-full xl:h-5/6 2xl:h-5/6 bg-white backdrop-filter ring-slate-900/5 shadow-2xl lg:m-6 z-10 lg:top-6 lg:ml-24  mb-0 lg:rounded-xl opacity-90">
							<div className=" lg:ml-2 p-6 lg:pt-6 lg:pb-6">
								<h6 className="text-left  text-slate-900">Used by 6k+ Developers</h6>
								<h1 className="text-pink-600 mt-6 mb-6 font-bold lg:text-2xl text-2xl text-left">AppSeed</h1>
								<p className="text-slate-900 dark:text-slate-400 mt-2 lg:pr-12 text-sm lg:text-left">
									Production-ready seed projects crafted on top of modern UI Kits.
									<br />
									Free Support for registered users (Email and Discord).
								</p>
								<div className="py-4 lg:mr-20 justify-center ">
									<Link className="bg-slate-900 no-underline hover:no-underline rounded-md text-white px-4 py-2" to="/">
										Get Started
									</Link>
								</div>
							</div>
						</div>
					</div>

					<div className="lg:flex lg:basis-1/2 bg-pink-600 lg:rounded-xl lg:mr-4  mt-0 lg:p-12  justify-center">
						{/* <img style={animationStyles.bounce} className="w-3/5 opacity-70 justify-center ml-12 p-4" src="https://appseed-srv1.com/appseed-v2/media/common/rocket.png" /> */}
						<img style={animationStyles.bounce} className="w-3/5 opacity-70 justify-center ml-12 p-4" src={Rocket} />
					</div>
				</div>
			</header>
		</StyleRoot>
	);
}

export default function Home() {
	const { siteConfig } = useDocusaurusContext();

	return (
		<StyleRoot>
			<Layout className="dark:bg-slate-900" title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
				<HomepageHeaderW />
				<main className=" bg-white dark:bg-slate-900 shadow-2xl pb-2">
					<HomeShowcase />
					<HomepageFeatures />
				</main>
			</Layout>
		</StyleRoot>
	);
}
