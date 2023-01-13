import React, { useRef, useEffect } from "react";
import Translate, { translate } from "@docusaurus/Translate";
import { PageMetadata } from "@docusaurus/theme-common";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";
import emailjs from "@emailjs/browser";

export default function NotFound() {
	const location = useLocation();

	useEffect(async () => {
		emailjs.send("service_sedddrb", "template_2w42djr", { url: "https://docs.appseed.us" + location.pathname }, "6_tNcp-iBTQ09T2Ql").then(
			function (response) {
				console.log("SUCCESS!", response.status, response.text);
			},
			function (error) {
				console.log("FAILED...", error);
			}
		);
	}, []);
	return (
		<>
			<PageMetadata
				title={translate({
					id: "theme.NotFound.title",
					message: "Page Not Found",
				})}
			/>
			<Layout>
				<main className="container margin-vert--xl">
					<div className="row">
						<div className="col col--6 col--offset-3">
							<h1 className="hero__title">
								<Translate id="theme.NotFound.title" description="The title of the 404 page">
									Page Not Found
								</Translate>
							</h1>
							<p>
								<Translate id="theme.NotFound.p1" description="The first paragraph of the 404 page">
									Sorry but the page you were looking for could not be found.
								</Translate>
							</p>
							<p>
								<div className="py-4 md:mr-20 justify-center ">
									<Link className="bg-white  no-underline hover:no-underline rounded-md text-black px-4 py-2   " to="/">
										Back to Home Page
									</Link>
								</div>
							</p>
						</div>
					</div>
				</main>
			</Layout>
		</>
	);
}
