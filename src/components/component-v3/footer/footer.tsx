"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
		<footer className="bg-[#1A1A1A] pt-[110px] pb-[91px]">
			<div className="custom-container">
				<div className="footer-container">
					<div>
						<Image src="/images/logo.png" alt="logo" width={216} height={87} />
						<p>
							Our gift is observation, it just so happens we’re a Marketing
							agency.
						</p>
						<button>Book a call</button>
					</div>
					<div className="flex gap-8">
						<div>
							<div className="footer-title">
								<h5>Location</h5>
							</div>
							<p>
								United Kingdom <br /> 8 Cody Road, London, <br /> England, E16
								4SR
							</p>
						</div>
						<div>
							<div className="footer-title">
								<h5>Services</h5>
							</div>
							<ul>
								<li>
									<Link href="/services/web-design-and-development">
										Web &amp; App Development
									</Link>
								</li>
								<li>
									<Link href="/services/pay-per-click">PPC</Link>
								</li>
								<li>
									<Link href="/services/app-development">UI/UX Design</Link>
								</li>
								<li>
									<Link href="/services/motion-design">Motion Design</Link>
								</li>
								<li>
									<Link href="/services/seo-service">SEO</Link>
								</li>
								<li>
									<Link href="#">Content Strategy</Link>
								</li>
								<li>
									<Link href="/services/branding">Brand Identity</Link>
								</li>
								{/* <li>
								<Link href="#">App Development</Link>
							</li> */}
							</ul>
						</div>
						<div>
							<div className="footer-title">
								<h5>Quick Links</h5>
							</div>
							<ul>
								<li>
									<Link href="/aboutus">About Us</Link>
								</li>

								<li>
									<Link href="/services">Portfolio</Link>
								</li>
								<li>
									<Link href="/case-studies">Colour Craft</Link>
								</li>
								<li>
									<Link href="/articles">Blogs</Link>
								</li>

								<li>
									<Link href="/careers">Careers</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="copy flex justify-between mt-10">
					<ul>
						<li>
							<Link href="/terms-and-condition">Terms and Conditions</Link>
						</li>
						<li>
							<Link href="/privacy-policy">Privacy Policy</Link>
						</li>
					</ul>
					<div className="text-right sm:text-left">
						<p>
							Copyright {new Date().getFullYear()} <br /> Particular Holdings
							(Registered in UK). All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
