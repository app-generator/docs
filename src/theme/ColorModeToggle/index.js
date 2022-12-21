import React from "react";
import ColorModeToggle from "@theme-original/ColorModeToggle";
export default function ColorModeToggleWrapper(props) {
	// let theme = window.localStorage.getItem("theme");
	console.log("props", props);
	// theme = theme ? theme : props.value;
	// let prop2 = { value: theme, ...props };
	return (
		<>
			<ColorModeToggle
				{...props}
				onClick={(value) => {
					if (value === "dark") {
						// document.querySelector("html").classList.add("dark");
						document.documentElement.classList.add("dark");
					} else {
						// document.querySelector("html").classList.remove("dark");
						document.documentElement.classList.remove("dark");
					}

					window.localStorage.setItem("theme", value);
				}}
			/>
		</>
	);
}
