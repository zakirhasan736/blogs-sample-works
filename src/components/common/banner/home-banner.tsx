import Button from "@/components/elements/button/button";
import { ArrowDownModalIcons } from "@/icons"
import {Image} from "@packages/packages"
import React from "react";
import CustomCursor from "../CustomCursor";
interface HomeBannerProps {}

const HomeBanner: React.FC<HomeBannerProps> = () => {
  return (
		<>
			<div className="cursor-cover relative">
				<CustomCursor />
				<section className="home-banner-section pt-[113px] lg:pt-[80px] md:pt-[60px] pb-[100px] sm:pb-0 sm:pt-0 sm:h-[434px] sm:relative">
					<div className="custom-container sm:h-full">
						<div className="banner-content-main-wrapper relative grid grid-cols-16 gap-5 w-full sm:flex sm:flex-col sm:justify-end sm:h-full">
							<div className="banner-content-text-box pb-12 col-span-full">
								<h1 className="banner-title font-primary font-medium relative z-50 text-primary-heading laptop-x:text-[120px] laptop-m:text-[100px] md:text-[75px] flex flex-col text-left text-primary leading-[80.55%] laptop-m:leading-[1.1] laptop-m:tracking-[-7px] uppercase tracking-[-11.38px] sm:text-[53px] sm:font-normal sm:leading-none sm:tracking-[-.38px]">
									<span className="color-text relative left-[71px] lg:left-[45px] sm:left-[5px]">
										PARTICULAR
									</span>
									<span className="block relative left-[300px] lg:left-[170px] sm:left-[43px]">
										marketing
									</span>
									<span className="block relative left-[181px] lg:left-[100px] sm:left-[11px]">
										Agency
									</span>
								</h1>
								<div className="banner-text-bottom-cont relative left-[175px] lg:left-[120px]  sm:left-[11px] z-50">
									<h3 className="banner-subtitle sm:hidden mt-[202px] text-[36px] text-left text-primary font-normal font-primary leading-none">
										welcome to <span className="color-text">particular</span>
									</h3>
									<Button
										btnText="Our Services"
										btnVariant="primary-button banner-button sm:hidden mt-12 cursor-scale grow-small"
									/>
								</div>
								<div className="banner-modal-video-box absolute bottom-0 right-[70px] sm:right-0 z-20 sm:h-full sm:object-cover">
									<Image
										src="/images/banner-video-poster.jpg"
										width={801}
										height={714}
										alt="banner modal video image"
										className="banner-video-modal-poster-img sm:h-[434px] w-full h-full"
									/>
								</div>
							</div>
							<div className="page-identity-text sm:hidden text-primary text-[12px] text-right font-primary font-normal leading-none tracking-[-.02px] uppercase absolute bottom-[75px] right-[-26px] rotate-90">
								hOME PAGE
							</div>
							<button className="cursor-scale small page-scroll-expand-btn sm:hidden text-primary text-[12px] text-right font-primary font-normal leading-none tracking-[-.02px] uppercase absolute bottom-[-63px] right-[470px]">
								click to explore
							</button>
							<button className="cursor-scale grow-small click-to-explore-btn sm:hidden absolute bottom-[-110px] left-0 right-0 mx-auto block max-w-[79px] md:max-w-[55px]">
								<ArrowDownModalIcons />
							</button>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
export default HomeBanner;