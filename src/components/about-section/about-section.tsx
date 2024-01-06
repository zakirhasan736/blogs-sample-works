"use client";
import  Button  from "@/components/elements/button/button";
import EffectCardSlider from "../effect-card-slider/EffectCardSlider";
import Character from "@/components/about-section/Character"
import Link from "next/link";

const AboutSection = () => {
	const paragraph =
		"PARTICULAR: THE LONDON DIGITAL AGENCY FOR PEOPLE-FIRST MARKETING.";

	return (
		<section className="about-section pb-[145px] pt-[139px] md:pt-20 md:pb-20 sm:pt-8 sm:pb-[70px]">
			<div className="custom-container">
				<div className="about-wrapper-main max-w-[1240px] mx-auto grid grid-cols-16 gap-5 px-[37px] lg:px-0 sm:flex sm:flex-col sm:px-0">
					<div className="about-wrapper-left-cont col-span-10 flex flex-col">
						<div className="about-modal-cont-box my-auto">
							<div className="about-modal-text">
								<Character paragraph={paragraph} />
							</div>
							<Link href="/services">
								<Button
									btnText="Our Services"
									btnVariant="primary-button banner-button p-2 max-w-[140px] mt-[36px] sm:mt-8"
								/>
							</Link>
						</div>
					</div>
					<div className="about-wrapper-right-cont col-span-6 sm:mt-20">
						<div className="about-our-service-modal">
							<EffectCardSlider />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
