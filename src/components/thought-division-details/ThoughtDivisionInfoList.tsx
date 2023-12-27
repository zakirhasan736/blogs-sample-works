"use client";
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
interface ThoughtDivisionItem {
	detailsinfo_title?: string;
	detailsinfo_description?: string;
	infoList?: string[];
}

interface ThoughtDivisionInfoListProps {
	items: ThoughtDivisionItem[];
	division: {
		modalScrollText?: string;
		thoughtDivisionTitle?: string;
		thoughtDivisionSubtitle?: string;
	};
}

gsap.registerPlugin(ScrollTrigger);
const ThoughtDivisionInfoList: React.FC<ThoughtDivisionInfoListProps> = ({
	items,
	division,
}) => {
		const exploreFourRef = useRef<HTMLDivElement | null>(null);

		useLayoutEffect(() => {
			if (exploreFourRef.current) {
				const slidePrl = exploreFourRef.current.querySelectorAll(
					".modal-text-itemFour",
				);

				if (slidePrl.length) {
					gsap.set(slidePrl, { x: 500 });

					ScrollTrigger.create({
						trigger: ".main-visual-sectionFour",
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
			ref={exploreFourRef}
			className="thought-division-details-cont-box main-visual-sectionFour col-span-14 col-start-3 w-full relative">
			<div className="modal-text-box absolute z-[-10]">
				<div className="modal-scroll-text scrolling-text modal-text-itemFour whitespace-nowrap text-transparent text-[400px] laptop-x:text-[250px] laptop-m:text-[190px] md:text-[150px] font-primary font-normal leading-[170%]">
					{division.modalScrollText || ""}
				</div>
			</div>
			<div className="thought-division-title-box relative z-10">
				<h2 className="thought-division-title whitespace-nowrap text-left text-text--large sm:text-[29px] font-primary font-normal tracking-[.8px] uppercase leading-normal">
					{division.thoughtDivisionTitle || ""}
				</h2>
				<span className="divider-shape h-[1px] w-[61px] bg-neu-white block"></span>
			</div>
			<div className="thought-division-info-text-box max-w-[940px] w-full ml-auto mt-[17px] relative z-10">
				<h4 className="thought-division-subtitle mb-5 thought-division-title text-neu-white text-left text-[34px] sm:text-[23px] sm:leading-none font-primary font-medium tracking-[.8px] leading-[190%]">
					{division.thoughtDivisionSubtitle ||
						"Free-thought at Particular involves pursuing new and often non-conventional ideas"}
				</h4>
				<div className="thought-division-details-box">
					{items?.map((item, index) => (
						<div
							key={index}
							className="thought-division-details-info-item mb-5">
							<p className="details-info-text text-text-medium-4 sm:text-[18px] text-left text-neu-white font-primary font-normal leading-normal mb-3">
								{item.detailsinfo_title || ""}
							</p>
							<p className="info-desc text-text-medium-4 sm:text-[17px] text-left text-neu-white font-primary font-normal leading-normal">
								{item.detailsinfo_description || ""}
							</p>
							{item.infoList && (
								<ul className="thought-division-info-list pl-5">
									{item.infoList.map((info, idx) => (
										<li
											key={idx}
											className="thought-division-info-text sm:text-[16px] text-text-medium-4 text-left text-neu-white font-primary font-normal leading-normal mb-3 list-disc">
											{info || ""}
										</li>
									))}
								</ul>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ThoughtDivisionInfoList;
