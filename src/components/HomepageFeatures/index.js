import React from "react";
import clsx from "clsx";
import Radium, { StyleRoot } from "radium";
import styles from "./styles.module.css";
import animationStyles from "@site/src/utils/animationStyles";
import Link from "@docusaurus/Link";

const FeatureList = [
	{
		title: "Seed Projects",
		Svg: require("@site/static/assets/seed-project.svg").default,
		description: <>Seed Free and paid Dashboards, SSG Starters, Flask and Django web apps.</>,
	},
	{
		title: "Community Oriented",
		Svg: require("@site/static/assets/support.svg").default,
		description: <>Free Support and discounts for registered users - Read More.</>,
	},
	{
		title: "Documentation",
		Svg: require("@site/static/assets/doc.svg").default,
		description: <>Open-source & commercial products are fully documented and explained.</>,
	},
	{
		title: "Blog Posts",
		Svg: require("@site/static/assets/blog.svg").default,
		description: <>We provide useful articles and content consumed by programmers and designers.</>,
	},
];

function Feature({ Svg, title, description }) {
	return (
		<StyleRoot className={clsx("col col--3")}>
			<div>
				<div className="text--center">
					<Svg className={styles.featureSvg} role="img" style={animationStyles.bounce} />
				</div>
				<div className="text--center padding-horiz--md">
					<h3 className="text-base">{title}</h3>
					<p>{description}</p>
				</div>
			</div>
		</StyleRoot>
	);
}

export default function HomepageFeatures() {
	return (
		<StyleRoot>
			<section className={styles.features}>
				<div className="container">
					<div className="max-w-4xl Md:mx-60 lg:mx-64 text-center mb-12">
						<h2 className="text-3xl leading-9 font-extrabold md:text-4xl md:leading-10">Built for Developers</h2>
						<div className="flex justify-center text-center">
							<p className="leading-6">We provide tested seed projects coded in different patterns and technologies by our team of experts on top of modern UI Kits.</p>
						</div>
					</div>
					<div className="row flex justify-center text-center">
						<Link className="bg-slate-900 no-underline hover:no-underline rounded-md text-white px-6 py-4" to="/introduction">
							Get Started
						</Link>
					</div>
				</div>
			</section>
		</StyleRoot>
	);
}
