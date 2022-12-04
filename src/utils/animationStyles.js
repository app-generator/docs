import { bounce, fadeInLeft, merge, rollIn, wobble, pulse } from "react-animations";
import Radium, { StyleRoot } from "radium";

const fadeBounce = merge(fadeInLeft, bounce);
const animationStyles = {
	bounce: {
		animation: "x 1s",
		animationName: Radium.keyframes(fadeBounce, "fadeBounce"),
	},
	rollIn: {
		animation: "x 1s",
		animationName: Radium.keyframes(rollIn, "rollIn"),
	},
	wobble: {
		animation: "x 1s",
		animationName: Radium.keyframes(pulse, "pulse"),
	},
};

export default animationStyles;
