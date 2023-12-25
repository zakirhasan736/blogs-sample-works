"use client";
import { Image } from "@packages/packages";
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
interface ProjectChallengeProps {
	data: {
		projectChallengeModalTitle: string;
		projectChallengeTitle: string;
		projectChallengeQuoteText: string;
		projectChallengeQuoteDesc: string;
		projectChallengeAssetsTitle1: string;
		projectChallengeAssetsImage1: string;
		projectChallengeAssetsTitle2: string;
		projectChallengeAssetsImage2: string;
	};
}

const ProjectChallenge: React.FC<ProjectChallengeProps> = ({ data }) => {
	 const exploreRef = useRef<HTMLDivElement | null>(null);

		useLayoutEffect(() => {
			if (exploreRef.current) {
				const slidePrl =
					exploreRef.current.querySelectorAll(".modal-text-item");

				if (slidePrl.length) {
					gsap.set(slidePrl, { x: 500 });

					ScrollTrigger.create({
						trigger: ".main-visual-section",
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
		<section
			ref={exploreRef}
			className="case-study-challenge-section main-visual-section pb-[119px] sm:pb-10 overflow-hidden">
			<div className="custom-container">
				<div className="case-study-challenge-wrapper-box">
					<div className="section-title-box">
						<div className="section-titles">
							<div className="section-model-title modal-text-item laptop-x:text-[150px] lg:text-[94px] md:text-[84px] sm:text-[64px] whitespace-nowrap empty:hidden scrolling-text uppercase text-[200px] font-primary font-medium leading-[.8] ">
								{data.projectChallengeModalTitle}
							</div>
							<h2 className="section-title empty:hidden text-[48px] md:text-[36px] text-left text-neu-white font-primary font-medium uppercase tracking-[4px] sm:text-[20px]">
								{data.projectChallengeTitle}
							</h2>
						</div>
						<div className="quote-box mt-14">
							<p className="quote-desc-text  sm:mt-6 relative max-w-[1048px] w-full pl-[124px] laptop-x:pl-[120px] laptop-m:pl-[100px] lg:pl-[80px] md:pl-[55px] sm:pl-5 empty:hiddem text-[27px] text-left text-neu-white font-primary font-semibold leading-normal sm:text-[13px]">
								{data.projectChallengeQuoteText}
							</p>
							<p className="quote-desc-text pl-[124px] laptop-x:pl-[120px] laptop-m:pl-[100px] lg:pl-[80px] md:pl-[55px] sm:pl-5 mt-7 max-w-[1048px] w-full sm:mt-4 empty:hiddem text-[20px] text-left text-neu-white font-primary font-medium leading-normal sm:text-[12px]">
								{data.projectChallengeQuoteDesc}
							</p>
						</div>
					</div>
					<div className="portfolio-challenge-brand-assets pt-[156px] sm:pt-[126px] grid grid-cols-16 gap-12 sm:gap-8">
						<div className="project-challenge-card-item col-span-9 flex flex-col-reverse items-start">
							<h3 className="project-challenge-brand-title text-[48px]  md:text-[36px] sm:text-[23px] text-left text-neu-white font-primary font-medium leading-none capitalize mt-10 sm:mt-6">
								{data.projectChallengeAssetsTitle1}
							</h3>
							<Image
								src={data.projectChallengeAssetsImage1}
								alt="project portfolio overview image"
								width={778}
								height={868}
								className="portfolio-overview-modal-image w-full h-full"
							/>
						</div>
						{/* ======= */}
						<div className="project-challenge-card-item col-span-7 items-start flex-col">
							<h3 className="project-challenge-brand-title text-[48px]  md:text-[36px] sm:text-[23px] text-left text-neu-white font-primary font-medium leading-none capitalize mb-10 sm:mb-6">
								{data.projectChallengeAssetsTitle2}
							</h3>
							<Image
								src={data.projectChallengeAssetsImage2}
								alt="project portfolio overview image"
								width={605}
								height={921}
								className="portfolio-overview-modal-image w-full"
							/>
						</div>
						{/* ======= */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProjectChallenge;
