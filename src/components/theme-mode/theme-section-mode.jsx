import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import OurWorkSec from "../component-v2/our-work-section/our-work-sec";
import OurApproachSection from "../our-approach-particular-sec/our-approach-section";

gsap.registerPlugin(ScrollTrigger);
const ThemeSectionMode = () => {
useEffect(() => {
	const section = document.querySelector(".transparent-color-bg-anim-section");

	gsap.timeline({
		scrollTrigger: {
			trigger: section,
			start: "top top+=50px",
			end: "bottom top",
			onEnterBack: () => {
				gsap.fromTo(
					section,
					{
						backgroundColor: "transparent",
						duration: 0.1,
						ease: "power2.inOut",
					},
					{
						backgroundColor: "#f8f9f7",
						duration: 0.1,
						ease: "power2.inOut",
						onComplete: () => {
							section.classList.add("light-mode");
							section.classList.remove("dark-mode");
						},
					},
				);
			},
			onEnter: () => {
				gsap.fromTo(
					section,
					{
						backgroundColor: "transparent",
						duration: 0.1,
						ease: "power2.inOut",
					},
					{
						backgroundColor: "#f8f9f7",
						duration: 0.1,
						ease: "power2.inOut",
						onComplete: () => {
							section.classList.add("light-mode");
							section.classList.remove("dark-mode");
						},
					},
				);
			},
			onLeave: () => {
				gsap.fromTo(
					section,
					{ backgroundColor: "#f8f9f7", duration: 0.1, ease: "power2.inOut" },
					{
						backgroundColor: "transparent",
						duration: 0.1,
						ease: "power2.inOut",
						onComplete: () => {
							gsap.fromTo(
								section,
								{
									backgroundColor: "transparent",
									duration: 0.1,
									ease: "power2.inOut",
								},
								{
									backgroundColor: "#000000", // Dark mode color
									duration: 0.1,
									ease: "power2.inOut",
									onComplete: () => {
										section.classList.remove("light-mode");
										section.classList.add("dark-mode");
									},
								},
							);
						},
					},
				);
			},
			onLeaveBack: () => {
				gsap.fromTo(
					section,
					{ backgroundColor: "#f8f9f7", duration: 0.1, ease: "power2.inOut" },
					{
						backgroundColor: "transparent",
						duration: 0.1,
						ease: "power2.inOut",
						onComplete: () => {
							gsap.fromTo(
								section,
								{
									backgroundColor: "transparent",
									duration: 0.1,
									ease: "power2.inOut",
								},
								{
									backgroundColor: "#000000", // Dark mode color
									duration: 0.1,
									ease: "power2.inOut",
									onComplete: () => {
										section.classList.remove("light-mode");
										section.classList.add("dark-mode");
									},
								},
							);
						},
					},
				);
			},
		},
	});
}, []);


	return (
		<div className="transparent-color-bg-anim-section dark-mode pt-[97px] sm:pt-14">
			{/* home our work section */}
			<OurWorkSec />
			{/* home our work section end*/}

			{/* home our approach section */}
			<OurApproachSection />
			{/* home our approach section end*/}

			
		</div>
	);
};

export default ThemeSectionMode;
