import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Bg from "@site/static/assets/appSeed-home-bg.png"; // with import
import styles from "./index.module.css";
import Radium, { StyleRoot } from "radium";
import animationStyles from "@site/src/utils/animationStyles";

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
function HomepageHeaderW() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<StyleRoot>
			<header className={clsx("hero ", styles.heroBanner)}>
				<div class="flex  flex-row w-4/5 h-4/6 m-4">
					<div class=" relative basis-1/2  bg-transparent ">
						<div class="absolute w-full h-5/6 bg-white backdrop-filter ring-slate-900/5 shadow-2xl m-6 z-10 top-6 ml-24 rounded-xl opacity-90">
							<div class="ml-24 pt-6 pb-6">
								<h6 class="text-left text-slate-900">Used by 5904 developers</h6>
								<h1 class="text-pink-700 mt-6 mb-6 font-bold text-6xl text-left">AppSeed</h1>
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
					<div class="basis-1/2 bg-[url('https://appseed-srv1.com/appseed-v2/media/common/bkg-rocket-min.png')] rounded-xl mr-8 justify-center">
						<img style={animationStyles.bounce} class="w-3/5 opacity-90 justify-center mt-12" src="https://appseed-srv1.com/appseed-v2/media/common/rocket.png" />
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
					<HomepageFeatures />
				</main>
			</Layout>
		</StyleRoot>
	);
}
