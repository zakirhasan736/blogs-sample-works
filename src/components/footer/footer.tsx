"use client";
import {
	ArrowDownIcons,
	InstagrameIcons,
	TwitterIcons,
	YoutubeIcons,
} from "@/icons";
import { Image, Link, useState } from "@packages/packages";
import GlowButton from "../elements/button/glow-button";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");
	const [success, setSuccessMessage] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async () => {
		setLoading(true);
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		const isEmty = (input: any) => (input === "" ? true : false);
		if (isEmty(email)) {
			setError("Email is required");
			return;
		} else if (!emailRegex.test(email)) {
			setError("Email should be a valid email address");
			return;
		}
		setError("");
		try {
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_API_URL}/api/subscription`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						email,
					}),
				},
			);

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}

			const responseData = await response.json();

			if (responseData.status === 200) {
				setEmail("");
				setSuccessMessage("Thank You For Subscribing!");
				setTimeout(() => {
					setSuccessMessage("");
				}, 3000);
			} else {
				console.error("EmailJS error:", responseData);
			}
		} catch (error) {
			console.error("EmailJS error:", error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<footer className="footer-section pt-[68px] pb-[53px] bg-[#fff] w-full">
			<div className="custom-container max-w-[1220px] relative">
				<section className="footer-top-section text-center conclusion pb-[54px]">
					<p className="mb-[13px] text-center text-[22px] font-normal capitalize font-tertery text-[#000]">
						Anything In
					</p>
					<div className="flex items-center gap-[9px] justify-center mb-[14px]">
						<Image
							src="/images/logo-black.svg"
							width={330}
							height={77}
							className="sm:hidden"
							alt="footer brand logo"
						/>
						<Image
							src="/images/mobile-view-footer-logo.svg"
							width={215}
							height={48}
							className="hidden sm:block"
							alt="footer brand logo"
						/>
						<span className="text-[60px] sm:text-[42px] font-bold text-black font-tertery leading-normal">
							?
						</span>
					</div>
					<p className="promo-info mb-[38px] b-3">
						Interested in working with us? Fill in the form today, and our team
						will be in touch shortly.
					</p>
					<Link href="/contacts" className="inline-block">
						<GlowButton glowBtnText="Start a Project" />
					</Link>
				</section>

				<div className="sep max-w-[1000px] w-full mx-auto"></div>
				<section className="footer footer-container pt-[54px] flex md:grid  md:grid-cols-12 md:gap-[30px]">
					<div className="f-section md:col-span-4 sm:col-span-12">
						<div className="footer-title">
							<h5>Location</h5>
							<span></span>
						</div>
						<p>8 Cody Road, London, England, E16 4SR</p>
					</div>
					<div className="f-section md:col-span-4 sm:col-span-12">
						<div className="footer-title">
							<h5>Services</h5>
							<span></span>
						</div>
						<ul>
							<li>
								<Link href="/services/web-design-and-evelopment">
									Web Development
								</Link>
							</li>
							<li>
								<Link href="/services/app-development">App Development</Link>
							</li>
							<li>
								<Link href="/services/pay-per-click">PPC</Link>
							</li>
							<li>
								<Link href="/services/motion-design">Motion Design</Link>
							</li>
							{/* <li>
								<Link href="/services/social-media">Social Media</Link>
							</li> */}
							<li>
								<Link href="/services/seo-service">SEO</Link>
							</li>
							{/* <li>
								<Link href="#">Content Strategy</Link>
							</li> */}
							<li>
								<Link href="/services/branding">Branding</Link>
							</li>
							{/* <li>
								<Link href="#">App Development</Link>
							</li> */}
						</ul>
					</div>
					<div className="f-section md:col-span-4 sm:col-span-12">
						<div className="footer-title">
							<h5>Technologies</h5>
							<span></span>
						</div>
						<ul>
							<li>Shopify</li>
							<li>Magento</li>
							<li>Prestashop</li>
							<li>Wordpress</li>
							<li>Android</li>
							<li>IOS</li>
						</ul>
					</div>
					<div className="f-section md:col-span-4 sm:col-span-12">
						<div className="footer-title">
							<h5>Quick Links</h5>
							<span></span>
						</div>
						<ul>
							<li>
								<Link href="/aboutus">About Us</Link>
							</li>

							<li>
								<Link href="/services">Our Services</Link>
							</li>
							<li>
								<Link href="/case-studies">Case Studies</Link>
							</li>
							<li>
								<Link href="/our-approach">Our Approach</Link>
							</li>
							<li>
								<Link href="/articles">Blogs</Link>
							</li>

							<li>
								<Link href="/terms-and-condition">Terms and Conditions</Link>
							</li>
							<li>
								<Link href="/privacy-policy">Privacy Policy</Link>
							</li>
						</ul>
					</div>
					<div className="f-section md:col-span-4 sm:col-span-12">
						<div className="subs-widgets">
							<div className="footer-title">
								<h5>Get In Touch</h5>
								<span></span>
							</div>
							<div className="cta-subs-widgets relative">
								<input
									className="cta-input-fild"
									type="email"
									name="email"
									placeholder="johdoe@domain.com"
									value={email}
									onChange={e => setEmail(e.target.value)}
								/>
								{error && <p>{error}</p>}
								{success && !loading && <p>{success}</p>}

								<button
									className="glow-button text-neu-white mt-3"
									type="button"
									onClick={handleSubmit}>
									<span className="px-[19px] pt-[15px] pb-[17px] text-center text-[16px] font-tertery font-semibold capitalize">
										{loading ? "Loading..." : "Subscribe"}
									</span>
									<div className="gradient"></div>
								</button>
							</div>
						</div>
						<div className="socials-widgets-box">
							<div className="footer-title mt-[52px]">
								<h5>Social Links</h5>
								<span></span>
							</div>
							<ul className="social flex gap-[17px] items-center">
								<li className="socials-widgets-item">
									<Link href="https://www.linkedin.com/company/byparticularagency/">
										<Image
											src="/images/icon-insta.svg"
											alt="socials-widgets icons"
											width={27}
											height={35}
										/>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</section>

				<div className="footer-bottom-box pt-[59px] max-w-[1330px] mx-auto">
					<p className="copyright">
						Copyright 2010-{new Date().getFullYear()}, Particular Holdings
						(Registered in UK). All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
