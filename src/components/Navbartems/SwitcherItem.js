import React, { useContext, Context } from "react";
import clsx from "clsx";
import Radium, { StyleRoot } from "radium";
import styles from "./styles.module.css";
import animationStyles from "@site/src/utils/animationStyles";

export default function SwitcherItem({ children, color }) {
	// const Style = useContext(ActiveStyleContext);
	const buttons = [
		{ name: "original", props: "bg-indigo-500" },
		{ name: "custom1", props: "bg-yellow-500" },
	];
	return (
		<StyleRoot>
			<div className={styles.switcher}>
				{buttons.map((props, idx) => (
					// <Feature key={idx} {...props} />
					<button
						key={idx}
						data-theme="indigo"
						onClick={
							{
								/*Style = props.name*/
							}
						}
						className={`${props.props} w-5 h-5 border-none rounded-full ml-1 `}
					></button>
				))}
			</div>
		</StyleRoot>
	);
}
