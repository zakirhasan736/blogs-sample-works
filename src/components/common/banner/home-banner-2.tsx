"use client";
import React from "react";

import Button from "@/components/elements/button/button";
import { ArrowDownModalIcons } from "@/icons";
import { Image, Link } from "@packages/packages";
import GlowButton from "@/components/elements/button/glow-button";
import ClientSlider from "../cliend-slider/clientSlider";
interface HomeBannerProps {}

const HomeBanner: React.FC<HomeBannerProps> = () => {
	return (
		<>
			<section className="home-banner-section pt-[128px] md:pt-20">
				<div className="custom-container sm:h-full">
					<div className="banner-content-main-wrapper main-visual-section max-w-[733px] mx-auto pb-[120px] md:pb-16">
						<div className="banner-content-text-box text-center">
							<h3 className="banner-subtitle capitalize text-neu-white text-center text-[20px] sm:text-[18px] font-tertery font-semibold leading-[24px] mb-4">
								We Drive Leads, Conversions, and success.{" "}
							</h3>
							<h1 className="banner-title text-[46px] sm:text-[32px]  capitalize text-center text-neu-white font-semibold font-primary leading-[55.2px]">
								Your brand’s digital growth partner.
							</h1>
							<p className="banner-desc mt-[25px] text-[16px] text-center text-neu-white font-tertery font-semibold italic leading-[24px]">
								‘’To Be The Biggest Catalyst To{" "}
								<span className="underline">Web</span> and{" "}
								<span className="underline">App</span>    Experiences To Everyone,
								Everywhere.’’
							</p>
							<span className="bannar-spacher max-w-[576px] mx-auto h-[1px] w-full block mt-[30px] mb-[26px]"></span>
							<Link href="/services">
								<GlowButton />
							</Link>
							<p className="banner-desc  text-[16px] text-center text-neu-white font-tertery font-normal leading-[22px] mt-[18px]">
								Explore your business's digital potential with our bespoke
								scorecard.
							</p>
						</div>
					</div>
					<ClientSlider />
				</div>
			</section>
		</>
	);
};
export default HomeBanner;
