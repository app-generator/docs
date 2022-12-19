import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import SupportPricing from "@site/src/components/SupportPricing";
import Bg from "@site/static/assets/appSeed-home-bg.png"; // with import
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
		{ name: "reac", href: "", image: "https://appseed-srv1.com/appseed-v2/custom-v1/img/logo/reactjs-icon.svg" },
		{ name: "hml", href: "", image: "https://appseed-srv1.com/appseed-v2/custom-v1/img/logo/html5-icon.svg" },
		{ name: "saas", href: "", image: "https://appseed-srv1.com/appseed-v2/custom-v1/img/logo/sass-icon.svg" },
	];
	return (
		<StyleRoot>
			{/* Showcase */}
			<div className="py-16 overflow-hidden">
				<div className="relative max-w-xl mx-auto px-4 md:px-6 lg:px-8 lg:max-w-screen-xl">
					<div className=" pb-12 md:pb-16">
						<div className="relative">
							<div className="relative max-w-screen-xl mx-auto px-4 lg:px-6">
								<div className="max-w-4xl mx-auto">
									<dl className="rounded-lg shadow-xl lg:grid lg:grid-cols-3 showcase">
										<div className="flex flex-col border-b p-6 text-center lg:border-0 showcase-border">
											<dt className="order-2 pl-6 mt-2 text-lg leading-6 font-medium text-description" id="item-1">
												DEVELOPERS
											</dt>
											<dd className="order-1 text-5xl leading-none font-extrabold text-indigo-600" aria-describedby="item-1">
												5906
											</dd>
										</div>
										<div className="flex flex-col border-t border-b p-6 text-center lg:border-0 lg:border-l showcase-border">
											<dt className="order-2 mt-2 pl-12 text-lg leading-6 font-medium text-description">GENERATED APPS</dt>
											<dd className="order-1 text-5xl leading-none font-extrabold text-indigo-600">8833</dd>
										</div>
										<div className="flex flex-col border-t p-6 text-center lg:border-0 lg:border-l showcase-border">
											<dt className="order-2 mt-2 pl-12 text-lg leading-6 font-medium text-description">CODED PRODUCTS</dt>
											<dd className="order-1 text-5xl leading-none font-extrabold text-indigo-600">100+</dd>
										</div>
									</dl>
								</div>
							</div>
						</div>
					</div>
					<div className="max-w-4xl mx-auto text-center p-12">
						<h2 className="text-3xl leading-9 font-extrabold md:text-4xl md:leading-10">USEFUL TECHNOLOGIES</h2>
					</div>
					<div className="flex justify-center text-center">
						{showcaseProjects.map(({ name, href, image }, i) => (
							<div>
								<img className="inline-block w-16 h-16 m-2" src={withBaseUrl(image)} alt={`Discover DocSearch on the ${name} documentation`} />
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
			<header class="mt-32">
				<div class="flex  flex-row w-4/5 h-4/6 ml-24">
					<div class=" relative basis-1/2  bg-transparent ">
						<div class="absolute w-full h-5/6 bg-white backdrop-filter ring-slate-900/5 shadow-2xl m-6 z-10 top-6 ml-24 rounded-xl opacity-90">
							<div class="ml-24 pt-6 pb-6">
								<h6 class="text-left text-slate-900">Used by 5904 developers</h6>
								<h1 class="text-pink-600 mt-6 mb-6 font-bold text-6xl text-left">AppSeed</h1>
								<p class="text-slate-900 dark:text-slate-400 mt-2  pr-12 text-sm text-left">
									{" "}
									Production-ready seed projects crafted on top of modern UI Kits. Free{" "}
									<a class="no-underline hover:no-underline after:content-['_↗'] " href="https://appseed.us/support" target="_blank">
										Support
									</a>
									for registered users.{" "}
								</p>
								<div className="py-4 mr-20 ">
									<Link className="bg-slate-900  no-underline hover:no-underline rounded-md text-white px-4 py-2   " to="/introduction">
										Get Started
									</Link>
								</div>
							</div>
						</div>
					</div>
					{/* <div class="basis-1/2 bg-[url('https://appseed-srv1.com/appseed-v2/media/common/bkg-rocket-min.png')] rounded-xl mr-8 justify-center"> */}
					<div class="basis-1/2 bg-pink-600 rounded-xl mr-4 p-12 justify-center">
						<img style={animationStyles.bounce} class="w-3/5 opacity-70 justify-center ml-12 p-4" src="https://appseed-srv1.com/appseed-v2/media/common/rocket.png" />
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
			<Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
				<HomepageHeaderW />
				<main>
					<HomeShowcase />
					<HomepageFeatures />
					<SupportPricing home="true" />
				</main>
			</Layout>
		</StyleRoot>
	);
}
