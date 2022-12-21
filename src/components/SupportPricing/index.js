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
			<div className="container px-6 mx-auto">
				{/* Section: Design Block  */}
				<section className="text-gray-800 dark:text-white">
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Support</h2>

					<p className="text-center mb-12 text-gray-500 dark:text-white">⚙️ Two tiers Support.</p>

					<div className={home == "true" ? "grid   md:gap-2 md:grid-cols-2" : "grid   gap-4  md:grid-cols-2"}>
						<div className={home == "true" ? "mb-6  lg:mb-0 md:w-3/5 md:ml-28" : "mb-6  lg:mb-0 "}>
							<div className="block rounded-lg shadow-2xl bg-white dark:bg-slate-800 h-full">
								<div className="p-6 border-b border-gray-300 dark:border-white text-center">
									<p className="uppercase mb-4 text-sm">
										<strong>Free</strong>
									</p>
									<h3 className="text-2xl mb-6">
										<strong>$ 0</strong>
									</h3>

									<div className="py-4 px-12">
										<Link
											className="inline-block px-6 py-2.5  bg-slate-900 dark:bg-white  text-white  dark:text-slate-900 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-pink-700 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full no-underline hover:no-underline  "
											to="/introduction"
										>
											Buy
										</Link>
									</div>
								</div>
								<div className="p-6">
									<ol className="list-inside">
										<li className="mb-4 flex items-center">
											<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
												<path
													fill="currentColor"
													d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
												></path>
											</svg>
											monday-friday ,10-18 EET
										</li>
										<li className="mb-4 flex items-center">
											<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
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

						<div className="mb-6 lg:mb-0  md:w-3/5 md:ml-28">
							<div className="block rounded-lg shadow-2xl bg-white dark:bg-slate-800 h-full">
								<div className="p-6 border-b border-gray-300 text-center">
									<p className="uppercase mb-4 text-sm">
										<strong>PRO</strong>
									</p>
									<h3 className="text-2xl mb-6">
										<strong>$ 49</strong>
										<small className="text-gray-500 text-sm">/year</small>
									</h3>

									<div className="py-4 px-4 ">
										<Link
											className="inline-block px-6 py-2.5 bg-slate-900 dark:bg-white  text-white dark:text-slate-900  font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-pink-700 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full no-underline hover:no-underline  "
											to="/introduction"
										>
											Buy
										</Link>
									</div>
								</div>
								<div className="p-6">
									<ol className="list-inside">
										<li className="mb-4 flex items-center">
											<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
												<path
													fill="currentColor"
													d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
												></path>
											</svg>
											24/7 fast support 🚀
										</li>
										<li className="mb-4 flex items-center">
											<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
												<path
													fill="currentColor"
													d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
												></path>
											</svg>
											PRO accounts ONLY
										</li>
										<li className="mb-4 flex items-center">
											<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
												<path
													fill="currentColor"
													d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
												></path>
											</svg>
											40%OFF applicable to all products & licenses
										</li>
										<li className="mb-4 flex items-center">
											<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
												<path
													fill="currentColor"
													d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
												></path>
											</svg>
											40%OFF applicable to all products & licenses
										</li>
										<li className="mb-4 flex items-center">
											<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
												<path
													fill="currentColor"
													d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
												></path>
											</svg>
											24/7 fast support via Email and Discord
										</li>
										<li className="mb-4 flex items-center">
											<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" className="text-green-600 w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
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
