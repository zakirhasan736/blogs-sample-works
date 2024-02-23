"use client";
import React from "react";
import { motion } from "framer-motion";
import { Image, Link } from "@packages/packages";
import GlowButton from "@/components/elements/button/glow-button";
import ClientSlider from "../cliend-slider/clientSlider";

const fadeInVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.2, ease: "easeOut" },
	},
};

const fadeInChildVariants = {
	hidden: { opacity: 0, y: 10 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const expandWidthVariants = {
	hidden: { width: "0%", opacity: 0 },
	visible: {
		width: "100%",
		opacity: 1,
		transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
	},
};

interface HomeBannerProps {}

const HomeBanner: React.FC<HomeBannerProps> = () => {
	return (
		<motion.section
			className="home-banner-section home-banner-section-v2 pt-[180px] md:pt-[156px]  pb-[73px] sm:pb-0"
			initial="hidden"
			animate="visible"
			variants={fadeInVariants}>
			<div className="custom-container sm:h-full">
				<div className="banner-content-main-wrapper main-visual-section max-w-[1118px] mx-auto pb-[30px] md:pb-14">
					<motion.div
						className="banner-content-text-box text-center"
						variants={fadeInVariants}>
						<motion.h1
							className="banner-subtitle capitalize text-neu-white text-center text-[20px] sm:text-[18px] font-tertery font-semibold leading-[24px] mb-4"
							variants={fadeInChildVariants}>
							Delivering Leads, Conversions and Success.
						</motion.h1>
						<motion.h2
							className="banner-title text-[46px] max-w-[993px] mx-auto sm:text-[32px]  capitalize text-center text-neu-white font-semibold font-primary leading-[1.1]"
							variants={fadeInChildVariants}>
							bringing High-quality to Your Buyer, because <br /> it Drives
							results.{" "}
							<span className="text-[#0396FF]">
								Your Trusted Marketing Agency.
							</span>
						</motion.h2>
						<motion.p
							className="banner-desc mt-[25px] text-[16px] text-center text-neu-white font-tertery font-semibold italic leading-[24px]"
							variants={fadeInChildVariants}>
							‘’To Be The Biggest Catalyst To{" "}
							<span className="underline">Web</span> and{" "}
							<span className="underline">App</span> Experiences To Everyone,
							Everywhere.’’
						</motion.p>
						<motion.span
							className="bannar-spacher max-w-[576px] mx-auto h-[1px] w-full block mt-[30px] mb-[26px]"
							variants={expandWidthVariants}></motion.span>
						<Link
							href="https://assessments.particularagency.co.uk/marketing-strength"
							className="inline-block">
							<motion.div variants={fadeInChildVariants}>
								<GlowButton glowBtnText="Get your free brand strength assessment" />
							</motion.div>
						</Link>
						
						<motion.p
							className="banner-desc  text-[16px] text-center text-neu-white font-tertery font-normal leading-[22px] mt-[18px]"
							variants={fadeInChildVariants}>
							Explore your business's digital potential with our bespoke
							scorecard.
						</motion.p>
						<div className="award-display-wrap text-center mt-10">
							<div className="award-item-box flex items-center gap-4 justify-center">
								<div className="award-items">
									<Image
										src="/images/top_clutch-award-1.svg"
										alt="awards cirtificate modal image"
										width={80}
										height={86.48}
									/>
								</div>
								<div className="award-items">
									<Image
										src="/images/top_clutch-award-2.svg"
										alt="awards cirtificate modal image"
										width={80}
										height={86.48}
									/>
								</div>
							</div>
							<p className="award-heading-text relative right-[2px] mt-3 text-neu-white text-[14px] text-center font-tertery font-extrabold leading-normal uppercase opacity-30">
								Awarded by Clutch
							</p>
						</div>
					</motion.div>
				</div>
				<ClientSlider />
			</div>
		</motion.section>
	);
};

export default HomeBanner;
