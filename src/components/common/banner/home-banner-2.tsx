"use client";
import React from "react";
import { motion } from "framer-motion";
import {  Link } from "@packages/packages";
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
			className="home-banner-section pt-[128px] md:pt-20"
			initial="hidden"
			animate="visible"
			variants={fadeInVariants}>
			<div className="custom-container sm:h-full">
				<div className="banner-content-main-wrapper main-visual-section max-w-[733px] mx-auto pb-[120px] md:pb-16">
					<motion.div
						className="banner-content-text-box text-center"
						variants={fadeInVariants}>
						<motion.h3
							className="banner-subtitle capitalize text-neu-white text-center text-[20px] sm:text-[18px] font-tertery font-semibold leading-[24px] mb-4"
							variants={fadeInChildVariants}>
							We Drive Leads, Conversions, and success.
						</motion.h3>
						<motion.h1
							className="banner-title text-[46px] sm:text-[32px]  capitalize text-center text-neu-white font-semibold font-primary leading-[55.2px]"
							variants={fadeInChildVariants}>
							Your brand’s digital growth partner.
						</motion.h1>
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
						<Link href="/contacts">
							<motion.div variants={fadeInChildVariants}>
								<GlowButton />
							</motion.div>
						</Link>
						<motion.p
							className="banner-desc  text-[16px] text-center text-neu-white font-tertery font-normal leading-[22px] mt-[18px]"
							variants={fadeInChildVariants}>
							Explore your business's digital potential with our bespoke
							scorecard.
						</motion.p>
					</motion.div>
				</div>
				<ClientSlider />
			</div>
		</motion.section>
	);
};

export default HomeBanner;
