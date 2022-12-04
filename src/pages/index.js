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
			{/* <header className={clsx("hero hero--primary", styles.heroBanner)}> */}
			<header className={clsx(styles.heroBanner)}>
				<div className="container">
					<h1 className="hero__title">{siteConfig.title}</h1>
					<p className="hero__subtitle" style={animationStyles.wobble}>
						{siteConfig.tagline}
					</p>

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

export default function Home() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<StyleRoot>
			<Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
				<HomepageHeader />
				<main>
					<HomepageFeatures />
				</main>
			</Layout>
		</StyleRoot>
	);
}
