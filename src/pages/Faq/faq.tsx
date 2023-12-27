"use client";
import FaqBanner from "@/components/common/banner/faq-banner";
import FaqAccordion from "@/components/common/faq-accordion/faq-accordion";
import FaqPageAccodionData from "@/data/accordion-faq-data.json";
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Faq = () => {
   const howWorkRef = useRef<HTMLDivElement | null>(null);
    useLayoutEffect(() => {
			const howItWorkScroll2 = gsap.context(() => {
				let viewPort = gsap.matchMedia();
				viewPort.add("(min-width:768px)", () => {
					document.body.style.overflow = "auto";
					const howItWorkScrolled2 = gsap.utils.toArray(
						".faq-main-content-wrap-box",
					);
					howItWorkScrolled2.forEach((section: any, index) => {
						const wi = section.querySelector(".scroll-text-item");
						const [x, xEnd] =
							index % 2
								? ["1%", (wi.scrollWidth - section.offsetWidth) * -1]
								: [wi.scrollWidth * -1, 0];
						gsap.fromTo(
							wi,
							{ x, y: 0 },
							{
								x: xEnd,
								duration: 10,
								scrollTrigger: {
									trigger: section,
									scrub: .5,
									start: "top +=850",
									end: () => "+=" + (wi.scrollWidth - section.offsetWidth),
								},
								y: 0,
							},
						);
					});
				});
				viewPort.add("(max-width:767px)", () => {
					document.body.style.overflow = "auto";
					const howItWorkScrolled2 = gsap.utils.toArray(
						".faq-main-content-wrap-box",
					);
					howItWorkScrolled2.forEach((section: any, index) => {
						const wi = section.querySelector(".scroll-text-item");
						const [x, xEnd] =
							index % 2
								? ["1%", (wi.scrollWidth - section.offsetWidth) * -1]
								: [wi.scrollWidth * -1, 0];
						gsap.fromTo(
							wi,
							{ x, y: 0 },
							{
								x: xEnd,
								duration: 10,
								scrollTrigger: {
									trigger: section,
									scrub: .5,
									start: "top +=850",
									end: () => "+=" + (wi.scrollWidth - section.offsetWidth),
								},
								y: 0,
							},
						);
					});
				});
			}, howWorkRef);
			return () => {
				howItWorkScroll2.revert();
			};
		});
	return (
		<section ref={howWorkRef} className="faq-page-main-wrapper overflow-hidden">
			{/* faq banner section       */}
			<FaqBanner />
			{/* faq banner section       end*/}
			<div className="faq-main-content-wrap-boxs relative">
				{/* scrolling text */}
				<div className="section-titlebox faq-main-content-wrap-box lg:mb-15 sm:mb-5 relative top-4 sm:top-[0]">
					<div className="scrolable-text-box how-it-work-title">
						<div className="scroll-text-item">
							<h2 className="section-scrrolltext-title scrolling-text text-center text-modal-heading-4 laptop-x:text-[150px] lg:text-[120px] md:text-[94px] sm:text-[76px] whitespace-nowrap font-primary font-bold leading-[1.2] tracking-[3.6px] uppercase">
								• we are particular • we are particular • we are particular • we
								are particular
							</h2>
						</div>
					</div>
				</div>
				{/* scrolling text end */}
				<div className="custom-container">
					<div className="faq-accordion-card-wrapper grid grid-cols-16 gap-5 pt-[31px] pb-[120px] md:pb-[120px]">
						<div className="faq-card-items-cont-box  col-span-full flex flex-col gap-[17px]">
							{/* faq card item */}
							<FaqAccordion faqs={FaqPageAccodionData} />
							{/* faq card item */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Faq;
