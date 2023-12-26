"use client";
import { Image } from "@packages/packages";
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Button from "../elements/button/button";

gsap.registerPlugin(ScrollTrigger);
interface ProjectMethodProps {
	data: {
		sectionModelTitle: string;
		sectionTitle: string;
		methodDescriptions: string[];
		buttonText: string;
		callImage: string;
	};
}

const ProjectMethode: React.FC<ProjectMethodProps> = ({ data }) => {
	 const exploreTwoRef = useRef<HTMLDivElement | null>(null);

		useLayoutEffect(() => {
			if (exploreTwoRef.current) {
				const slidePrl =
					exploreTwoRef.current.querySelectorAll(".modal-text-itemTwo");

				if (slidePrl.length) {
					gsap.set(slidePrl, { x: 500 });

					ScrollTrigger.create({
						trigger: ".main-visual-sectionTwo",
						start: "top 80%",
						end: "bottom 20%",
						
						onToggle: self => {
							if (self.isActive) {
								gsap.to(slidePrl, {
									x: 0,
									duration: 1,
									ease: "power2.out",
								});
							} else {
								gsap.to(slidePrl, {
									x: 500,
									duration: 1,
									ease: "power2.in",
								});
							}
						},
					});
				}
			}
		}, []);

	return (
		<div
			ref={exploreTwoRef}
			className="case-study-project-methode-section main-visual-sectionTwo pb-[200px] sm:pb-[70px] overflow-hidden">
			<div className="custom-container">
				<div className="case-study-project-methode-wrap max-w-[1430px] mx-auto">
					<div className="section-title-box">
						<div className="section-titles">
							<div className="section-model-title modal-text-itemTwo laptop-x:text-[150px] lg:text-[94px] md:text-[84px] sm:text-[64px] whitespace-nowrap empty:hidden scrolling-text uppercase text-[200px] font-primary font-medium leading-[.8] ">
								{data.sectionModelTitle}
							</div>
							<h2 className="section-title empty:hidden text-[48px]  md:text-[36px] text-left text-neu-white font-primary font-medium uppercase tracking-[4px] sm:text-[20px]">
								{data.sectionTitle}
							</h2>
						</div>
					</div>
					<div className="case-study-project-methodes-cont-wrap grid grid-cols-16 gap-9 mt-16 sm:mt-6 sm:flex sm:flex-col sm:gap-0">
						<div className="sm:col-span-full col-span-12 project-methodes-left-cont max-w-[814px]">
							{data.methodDescriptions.map((desc, index) => (
								<p
									key={index}
									className="project-methodes-desc text-[26px]  md:text-[20px] sm:text-[13px] text-left text-neu-white font-primary font-semibold leading-normal mb-6">
									{desc}
								</p>
							))}
							<Button
								btnText={data.buttonText}
								btnVariant="primary-button study-banner-button mt-[70px] sm:mt-8"
							/>
						</div>
						<div className="sm:col-span-full col-span-4 project-methodes-right-cont text-left sm:text-right">
							<Image
								src={data.callImage}
								alt="schedule call icon image"
								width={278}
								height={278}
								className="schedule-call-modal-icon-img w-[250px] sm:w-[105px] sm:ml-auto block"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectMethode;
