import React from "react";

export default function YoutubeEmbed({ url, title }) {
	return (
		<div>
			<iframe width="100%" height="315" src={url} title={title} frameborder="0" allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			<p className="text-center font-light text-gray-500 text-sm">{title} </p>
		</div>
	);
}
