import React from "react";
import clsx from "clsx";
import Radium, { StyleRoot } from "radium";
import styles from "./styles.module.css";
import animationStyles from "@site/src/utils/animationStyles";

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
					<h3>{title}</h3>
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
					<div className="row">
						{FeatureList.map((props, idx) => (
							<Feature key={idx} {...props} />
						))}
					</div>
				</div>
			</section>
		</StyleRoot>
	);
}
