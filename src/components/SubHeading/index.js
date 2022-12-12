import React from "react";
import clsx from "clsx";
import Radium, { StyleRoot } from "radium";
import styles from "./styles.module.css";
import animationStyles from "@site/src/utils/animationStyles";

export default function SubHeading({ children, color }) {
	return (
		<StyleRoot>
			<h1
				style={[
					// animationStyles.bounce,
					{
						// color: color,
						color: "rgba(136,153,168,1.00)",
						fontWeight: "400",
						fontSize: "18px",
						lineHeight: "30px",
						marginTop: "-30px",
						padding: "0.2rem",
					},
				]}
			>
				{children}
			</h1>
		</StyleRoot>
	);
}
