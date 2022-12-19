import React from "react";
import clsx from "clsx";
import Radium, { StyleRoot } from "radium";
import styles from "./styles.module.css";
import animationStyles from "@site/src/utils/animationStyles";
import Link from "@docusaurus/Link";
export default function SupportPricing({ home }) {
	return (
		<StyleRoot>
			{/* Container for demo purpose */}
			<div class="container my-24 px-6 mx-auto">
				{/* Section: Design Block  */}
				<section class="mb-32 text-gray-800">
					<h2 class="text-3xl font-bold text-center mb-6">Support</h2>

					<p class="text-center mb-12 text-gray-500">⚙️ Two tiers Support.</p>

					<div className={home == "true" ? "grid   gap-4  grid-cols-4" : "grid   gap-4  grid-cols-2"}>
						<div className={home == "true" ? "mb-6  lg:mb-0 col-start-2" : "mb-6  lg:mb-0 "}>
							<div class="block rounded-lg shadow-lg bg-white h-full">
								<div class="p-6 border-b border-gray-300 text-center">
									<p class="uppercase mb-4 text-sm">
										<strong>Free</strong>
									</p>
									<h3 class="text-2xl mb-6">
										<strong>$ 0</strong>
									</h3>

									<div className="py-4 px-12">
										<Link
											className="inline-block px-6 py-2.5  bg-slate-900  text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-pink-700 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full no-underline hover:no-underline  "
											to="/introduction"
										>
											Buy
										</Link>
									</div>
								</div>
								<div class="p-6">
									<ol class="list-inside">
										<li class="mb-4 flex items-center">
											<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
												<path
													fill="currentColor"
													d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
												></path>
											</svg>
											monday-friday ,10-18 EET
										</li>
										<li class="mb-4 flex items-center">
											<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
												<path
													fill="currentColor"
													d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
												></path>
											</svg>
											Email & Discord
										</li>
									</ol>
								</div>
							</div>
						</div>

						<div class="mb-6 lg:mb-0">
							<div class="block rounded-lg shadow-lg bg-white h-full">
								<div class="p-6 border-b border-gray-300 text-center">
									<p class="uppercase mb-4 text-sm">
										<strong>PRO</strong>
									</p>
									<h3 class="text-2xl mb-6">
										<strong>$ 49</strong>
										<small class="text-gray-500 text-sm">/year</small>
									</h3>

									<div className="py-4 px-4 ">
										<Link
											className="inline-block px-6 py-2.5 bg-slate-900  text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-pink-700 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full no-underline hover:no-underline  "
											to="/introduction"
										>
											Buy
										</Link>
									</div>
								</div>
								<div class="p-6">
									<ol class="list-inside">
										<li class="mb-4 flex items-center">
											<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
												<path
													fill="currentColor"
													d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
												></path>
											</svg>
											24/7 fast support 🚀
										</li>
										<li class="mb-4 flex items-center">
											<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
												<path
													fill="currentColor"
													d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
												></path>
											</svg>
											PRO accounts ONLY
										</li>
										<li class="mb-4 flex items-center">
											<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
												<path
													fill="currentColor"
													d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
												></path>
											</svg>
											40%OFF applicable to all products & licenses
										</li>
										<li class="mb-4 flex items-center">
											<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
												<path
													fill="currentColor"
													d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
												></path>
											</svg>
											40%OFF applicable to all products & licenses
										</li>
										<li class="mb-4 flex items-center">
											<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
												<path
													fill="currentColor"
													d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
												></path>
											</svg>
											24/7 fast support via Email and Discord
										</li>
										<li class="mb-4 flex items-center">
											<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
												<path
													fill="currentColor"
													d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
												></path>
											</svg>
											Private Access to all internal tools: OpenAPI Editor, parsers and generators.
										</li>
									</ol>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* Section: Design Block  */}
			</div>
			{/* Container for demo purpose */}
		</StyleRoot>
	);
}
