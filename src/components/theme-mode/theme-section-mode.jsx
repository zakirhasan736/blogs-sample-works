import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import OurWorkSec from "../component-v2/our-work-section/our-work-sec";
import OurApproachSection from "../our-approach-particular-sec/our-approach-section";
import OurStorySection from "../component-v2/our-story-section/our-story-section";

gsap.registerPlugin(ScrollTrigger);
const ThemeSectionMode = () => {
	useEffect(() => {
		const section = document.querySelector(
			".transparent-color-bg-anim-section",
		);

		gsap.timeline({
			scrollTrigger: {
				trigger: section,
				start: "top top+=0%",
				end: "bottom top",
				
				onEnterBack: () => {
					// Animation when user enters back into the section
					// gsap.to(section, { backgroundColor: '#ffffff', });
					section.classList.remove("light-mode");
					section.classList.add("dark-mode");
				},
				onEnter: () => {
					// Animation when user enters the section
					// gsap.to(section, { opacity: 1, duration: 0.5 });
					section.classList.remove("light-mode");
					section.classList.add("dark-mode");
				},
				onLeave: () => {
					// Animation when user leaves the section
					gsap.to(section, { backgroundColor: "#ffffff", duration: 0.2 });
					section.classList.add("light-mode");
					section.classList.remove("dark-mode");
				},
				onLeaveBack: () => {
					// Animation when user leaves back from the section
					gsap.to(section, { backgroundColor: "#ffffff", duration: 0.2 });
					section.classList.add("light-mode");
					section.classList.remove("dark-mode");
				},
			},
		});
	}, []);
	return (
		<div className="transparent-color-bg-anim-section light-mode pt-[97px]">
			{/* home our work section */}
			<OurWorkSec />
			{/* home our work section end*/}

			{/* home our approach section */}
			<OurApproachSection />
			{/* home our approach section end*/}

			{/* our story section */}
			<OurStorySection />
			{/* our story section end*/}
		</div>
	);
};

export default ThemeSectionMode;
