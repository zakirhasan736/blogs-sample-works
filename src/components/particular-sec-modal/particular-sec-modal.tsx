"use client";
import { Image } from "@packages/packages";
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const ParticularSecModal = () => {
   const howWorkRef = useRef<HTMLDivElement | null>(null);
		useLayoutEffect(() => {
			const howItWorkScroll2 = gsap.context(() => {
				let viewPort = gsap.matchMedia();
				viewPort.add("(min-width:768px)", () => {
					// document.body.style.overflow = "auto";
					const howItWorkScrolled2 = gsap.utils.toArray(
						".scrolling-main-content-wrap-box",
					);
					howItWorkScrolled2.forEach((section: any, index) => {
						const wi = section.querySelector(".scroll-text-item");
						const [x, xEnd] =
							index % 2
								? ["10%", (wi.scrollWidth - section.offsetWidth) * -1]
								: [wi.scrollWidth * -1, 0];
						gsap.fromTo(
							wi,
							{ x, y: 0 },
							{
								x: xEnd,
								duration: 10,
								scrollTrigger: {
									trigger: section,
									scrub: 0.5,
									// markers: true,
									start: "top +=1250",
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
						".scrolling-main-content-wrap-box",
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
									scrub: 0.5,
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
		<section
			ref={howWorkRef}
			className="particular-modal-section pb-[80px] relative">
			<div className="scrolling-main-content-wrap-boxs  relative">
				<div className="scrolling-text-box relative bottom-0 left-0 sm:top-0">
					<div className="section-titlebox scrolling-main-content-wrap-box lg:mb-15 sm:mb-2 relative top-4 sm:top-[0]">
						<div className="scrolable-text-box how-it-work-title">
							<div className="scroll-text-item">
								<h2 className="section-scrrolltext-title scrolling-text text-center text-modal-heading-4 laptop-x:text-[150px] lg:text-[120px] md:text-[94px] sm:text-[76px] whitespace-nowrap font-primary font-bold leading-[1.2] sm:leading-[1] tracking-[3.6px] uppercase">
									• we are particular • we are particular • we are particular •
									we are particular
								</h2>
							</div>
						</div>
					</div>
					<div className="section-titlebox scrolling-main-content-wrap-box lg:mb-15 sm:mb-2 relative top-4 sm:top-[0]">
						<div className="scrolable-text-box how-it-work-title">
							<div className="scroll-text-item">
								<h2 className="section-scrrolltext-title scrolling-text text-center text-modal-heading-4 laptop-x:text-[150px] lg:text-[120px] md:text-[94px] sm:text-[76px] whitespace-nowrap font-primary font-bold leading-[1.2]  sm:leading-[1] sm:mb-1 tracking-[3.6px] uppercase">
									• we are particular • we are particular • we are particular •
									we are particular
								</h2>
							</div>
						</div>
					</div>
					<div className="section-titlebox scrolling-main-content-wrap-box lg:mb-15 sm:mb-2 relative top-4 sm:top-[0]">
						<div className="scrolable-text-box how-it-work-title">
							<div className="scroll-text-item">
								<h2 className="section-scrrolltext-title scrolling-text text-center text-modal-heading-4 laptop-x:text-[150px] lg:text-[120px] md:text-[94px] sm:text-[76px] whitespace-nowrap font-primary font-bold leading-[1.2]  sm:leading-[1] sm:mb-1 tracking-[3.6px] uppercase">
									• we are particular • we are particular • we are particular •
									we are particular
								</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="custom-container">
					<div className="particular-modal-main-wrapper px-6  absolute sm:static right-0 left-0 w-full top-0 max-w-[1204px] mx-auto flex items-center justify-between sm:block">
						<div className="particular-modal-left-cont sm:pt-20 sm:absolute sm:top-0 sm:left-8">
							<h2 className="particular-modal-title max-w-[570px] md:text-[38px] sm:text-[28px] text-[60px] text-left text-primary font-primary font-medium leading-none tracking-[3.76px]">
								Anything in{" "}
								<span className="color-text  text-secondary text-[90px] md:text-[60px] sm:text-[55px] tracking-[4.92px] font-bold">
									Particular?
								</span>
							</h2>
						</div>
						<div className="particular-modal-right-cont -z-[1]">
							<Image
								src="/images/gif/Section03.gif"
								width={600}
								height={500}
								alt="particular modal image"
								className="particular-modal-image"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ParticularSecModal;
