import React from "react";
// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";
import SubHeading from "@site/src/components/SubHeading";
import YoutubeEmbed from "@site/src/components/Embed/youtubeEmbed";

export default {
	// Re-use the default mapping
	...MDXComponents,
	// Map the "highlight" tag to our <Highlight /> component!
	// `Highlight` will receive all props that were passed to `highlight` in MDX
	SubHeading: SubHeading,
	YoutubeEmbed: YoutubeEmbed,
};
