"use client";
import { Image } from "@packages/packages";
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
interface ResultInfo {
	percent: string;
	description: string;
}

interface ProjectResultProps {
	data: {
		sectionModelTitle: string;
		sectionTitle: string;
		resultImage: string;
		results: ResultInfo[];
		resultSecBgClass?: string;
	};
}

gsap.registerPlugin(ScrollTrigger);
const ProjectResult: React.FC<ProjectResultProps> = ({ data }) => {
	const exploreThreeRef = useRef<HTMLDivElement | null>(null);

	useLayoutEffect(() => {
		if (exploreThreeRef.current) {
			const slidePrl = exploreThreeRef.current.querySelectorAll(
				".modal-text-itemThree",
			);

			if (slidePrl.length) {
				gsap.set(slidePrl, { x: 500 });

				ScrollTrigger.create({
					trigger: ".main-visual-sectionThree",
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
			ref={exploreThreeRef}
			className="study-project-result-section main-visual-sectionThree pb-[115px] sm:pb-20 overflow-hidden">
			<div className="custom-container">
				<div className="study-project-result-wrapper">
					<div className="section-modal-title-reals">
						<div className="section-model-title modal-text-itemThree laptop-x:text-[150px]  lg:text-[94px] md:text-[84px] sm:text-[64px] whitespace-nowrap empty:hidden scrolling-text uppercase text-[200px] font-primary font-medium leading-[.8] ">
							{data.sectionModelTitle}
						</div>
					</div>
					<div className="project-result-cont-wrap grid grid-cols-16 gap-8 relative z-50 sm:flex sm:flex-col sm:gap-16">
						<div
							className={`result-cont-bg-modal-img absolute top-0 left-0 h-full w-full -z-10 max-h-[800px] sm:h-[560px] ${data.resultSecBgClass}`}></div>
						{/* ==== */}
						<div className="project-result-cont-wrap-left col-span-10">
							<div className="section-title-box">
								<div className="section-titles">
									<h2 className="section-title empty:hidden text-[48px]  md:text-[36px] text-left text-neu-white font-primary font-medium leading-none uppercase tracking-[4px] sm:text-[20px] mb-12 sm:mb-9">
										{data.sectionTitle}
									</h2>
								</div>
							</div>
							<div className="project-result-modal-image-box flex gap-12 items-end sm:items-start sm:flex-col sm:gap-4 mx-auto">
								<Image
									src={data.resultImage}
									alt="project result modal image"
									width={620}
									height={917}
									className="project-result-modal-image"
								/>
								{/* <span className="hints-text text-[20px] whitespace-nowrap text-left text-neu-white font-primary font-medium leading-none sm:text-13px">
										(Turn to see results)
									</span> */}
							</div>
						</div>
						{/* ====== */}
						<div className="project-result-cont-wrap-right col-span-6">
							<div className="projects-result-info-cont">
								{data.results.map((result, index) => (
									<div
										key={index}
										className="result-info-card-item text-center mb-20 md:mb-12 sm:mb-16">
										<h4 className="result-percent mb-4 text-[48px] md:text-[34px] text-center text-neu-white font-bold font-primary leading-none sm:text-[42px]">
											{result.percent}
										</h4>
										<p className="result-desc max-w-[419px] md:text-[18px] sm:max-w-[240px] w-full mx-auto text-[23px] text-center text-neu-white font-primary font-medium leading-normal sm:text-[14px]">
											{result.description}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProjectResult;
