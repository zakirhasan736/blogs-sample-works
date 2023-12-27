"use client";
import React, {  useRef,  useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Button from "@/components/elements/button/button";
import { ArrowDownModalIcons } from "@/icons";
import { Image } from "@packages/packages";
import CustomCursor from "../CustomCursor";
interface HomeBannerProps {}

const HomeBanner: React.FC<HomeBannerProps> = () => {
	const bannerRef = useRef<HTMLDivElement | null>(null);
	gsap.registerPlugin(ScrollTrigger);

	useLayoutEffect(() => {
		const homeBannerAnim = gsap.context(() => {
			// banner scroll scale bg
			const imgSclTest = gsap.utils.toArray(".main-test-modal-bg");
			let viewPort = gsap.matchMedia();
			if (imgSclTest.length) {
					// animated title
					const textAnim = gsap.utils.toArray(
						".banner_title_animation > span > span",
					);
					gsap.fromTo(
						textAnim,
						{
							translateY: "0%",
							opacity: 1,
						},
						{
							translateY: "200%",
							ease: "power2",
							force3D: true,
							duration: 3,
							scrollTrigger: {
								trigger: ".main-visual-section",
								start: "top +=10px",
								end: "bottom top-=200px",
								scrub: 0.9,
								markers: true,
							},
						},
					);
			}
		}, bannerRef);
		return () => {
			homeBannerAnim.revert();
		};
	}, []);
	return (
		<>
			<div className="cursor-cover relative">
				<CustomCursor />
				<section
					ref={bannerRef}
					className="home-banner-section   pt-[60px] lg:pt-[80px] md:pt-[60px] pb-0 sm:pb-0 sm:pt-0 sm:h-[434px] sm:relative h-[787px] lg:h-[685px] md:h-[586px]">
					<div className="custom-container sm:h-full">
						<div className="banner-content-main-wrapper main-visual-section max-w-[1230px] mx-auto  relative grid grid-cols-16 gap-5 w-full sm:flex sm:flex-col sm:justify-end sm:h-full">
							<div className="banner-content-text-box pb-12 col-span-full pt-[23px] md:pt-0">
								<h1 className="banner-title banner_title_animation font-primary font-medium relative z-50 text-[140px] laptop-x:text-[70px] laptop-m:text-[70px] md:text-[57px] flex flex-col text-left text-primary leading-[.9] laptop-m:leading-[1]  uppercase tracking-[-2.38px] sm:text-[53px] sm:font-normal sm:leading-none sm:tracking-[-.38px]">
									<span className="overflow-hidden w-full h-full block">
										<span className="block color-text relative left-0 sm:left-[5px]">
											Particular
										</span>
									</span>
									<span className="overflow-hidden w-full h-full block">
										<span className="block relative left-[220px] lg:left-[130px] sm:left-[43px]">
											marketing
										</span>
									</span>
									<span className="overflow-hidden w-full h-full block">
										<span className="block relative left-[110px] lg:left-[100px] md:left-[80px] sm:left-[11px]">
											Agency
										</span>
									</span>
								</h1>
								<div className="banner-text-bottom-cont relative left-0 mt-20  sm:left-[11px] z-50">
									<h3 className="banner-subtitle sm:hidden mt-[46px] text-[24px] text-left text-primary font-normal font-primary leading-none">
										welcome to <span className="color-text">particular</span>
									</h3>
									<Button
										btnText="Our Services"
										btnVariant="primary-button banner-button sm:hidden mt-10 cursor-scale grow-small"
									/>
								</div>
								<div className="banner-modal-video-box main-test-modal-bg absolute top-0 right-[60px] sm:left-0  sm:right-0 z-20 sm:h-full sm:object-cover">
									<Image
										src="/images/banner-video-poster.jpg"
										width={735}
										height={655}
										alt="banner modal video image"
										className="banner-video-modal-poster-img sm:hidden sm:h-[434px] w-full h-[655px] lg:h-[456px]"
									/>
									<Image
										src="/images/banner-video-image-mobo.png"
										width={735}
										height={655}
										alt="banner modal video image"
										className="banner-video-modal-poster-img hidden sm:block sm:mx-auto sm:h-[434px] w-full h-[655px] lg:h-[456px]"
									/>
								</div>
							</div>
							<div className="page-identity-text hidden text-primary text-[12px] text-right font-primary font-normal leading-none tracking-[-.02px] uppercase absolute bottom-[75px] right-[-26px] rotate-90">
								hOME PAGE
							</div>
							<button className="cursor-scale small page-scroll-expand-btn hidden text-primary text-[12px] text-right font-primary font-normal leading-none tracking-[-.02px] uppercase absolute bottom-[-63px] right-[470px]">
								click to explore
							</button>
							<button className="cursor-scale grow-small click-to-explore-btn hidden absolute bottom-[-110px] left-0 right-0 mx-auto  max-w-[79px] md:max-w-[55px]">
								<ArrowDownModalIcons />
							</button>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};
export default HomeBanner;
