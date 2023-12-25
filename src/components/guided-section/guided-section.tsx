"use client";
import { Image } from "@packages/packages";
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const GuidedSection = () => {
const howWorkRef = useRef<HTMLDivElement | null>(null);

useLayoutEffect(() => {
	const howItWorkTextScroll = gsap.context(() => {
		document.body.style.overflow = "auto";
		// banner modal images
		const slidePrl = gsap.utils.toArray(".modal-img-item");
		const slidePrlTwo = gsap.utils.toArray(".modal-img-itemTwo");

		if (slidePrl.length) {
			gsap.fromTo(
				slidePrl,
				{ y: 100 },
				{
					y: -100,
					ease: "none",
					force3D: true, // Add force3D property for better performance
					scrollTrigger: {
						trigger: ".main-visual-section",
						start: "top +=850",
						end: "bottom top",
						scrub: true,
					},
				},
			);
		}

		if (slidePrlTwo.length) {
			gsap.fromTo(
				slidePrlTwo,
				{ y: -50 },
				{
					y: 100,
					ease: "none",
					force3D: true, // Add force3D property for better performance
					scrollTrigger: {
						trigger: ".main-visual-section",
						start: "top +=850",
						end: "bottom top",
						scrub: true,
					},
				},
			);
		}
	}, howWorkRef);

	return () => {
		howItWorkTextScroll.revert();
	};
});

	return (
		<section
			ref={howWorkRef}
			className="guided-section pb-[145px] md:pb-[94px] sm:pb-[73px]">
			<div className="custom-container">
				<div className="guided-sec-main-wrapper main-visual-section grid grid-cols-16 gap-5 px-[37px] sm:px-0 sm:block">
					<div className="guided-modal-image-one modal-img-itemTwo col-span-6 md:col-span-8 md:w-[280px] md:h-[260px]">
						<Image
							src="/images/giuded-sec-image-1.png"
							alt="duided modal image"
							width={447}
							height={416}
							className="modal-image-one sm:w-full sm:h-full"
						/>
					</div>
					<div className="guided-modal-text-item col-span-12 md:col-span-10 pb-[162px] md:pb-[150px] sm:pb-[250px] pt-[123px] md:pt-10 sm:pt-0 relative col-start-5">
						<div className="guided-content-text-box modal-img-item">
							<h2 className="guided-sec-title text-shadow-1 max-w-[570px] w-full text-[60px] text-left font-primary font-medium leading-[1.1] text-primary md:text-[45px] sm:text-[42px]">
								Guided by purpose, defined by{" "}
								<span className="color-text">philosophy.</span>
							</h2>
						</div>
						<div className="guided-modal-image-two  absolute bottom-0 left-[233px] z-[-1] md:w-[419px] md:h-{344px] sm:left-20">
							<Image
								width={795}
								height={652}
								src="/images/giuded-sec-image-2.png"
								alt="modal image two"
								className="modal-image-two md:w-full md:h-full"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default GuidedSection;
