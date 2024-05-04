"use client";

import React, { useState } from "react";
import { Image, Link } from "@packages/packages";

import { Swiper, SwiperSlide } from "swiper/react";
import {
	Autoplay,
	EffectFade,
	FreeMode,
	Navigation,
	Thumbs,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const PortfolioSec = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return (
		<section className="portfolio pt-[64px] pb-[106px] bg-[#E1E4E8]">
			<div className="custom-container">
				<div className="flex items-center justify-between mb-[47px] sm:mb-[35px]">
					<div className="section-title-box">
						<h2 className="text-[#181725]">Particular Portfolio</h2>
						<p className="text-[#000]">
							We pioneer what's next, combining creativity, tech innovation and
							data.
						</p>
					</div>
					<Link href="">View all</Link>
				</div>
			</div>
			<div className="portfolio-card-item-box">
				<div className="custom-container-full max-w-[1440px] w-full pl-[170px] pr-0 mx-auto laptop-x:pl-[30px] laptop-m:pl-[30px] lg:pl-[25px] md:pl-[20px] sm:pl-4 xxs:pl-4">
					<div className="portfolio-card-item-wrapper">
						{/* =========== */}
						<div className="portfolio-card-item max-w-[344px] w-full relative">
							<div className="portfolio-card-img rounded-[4px] max-w-[344px] w-full max-h-[424px] h-ful">
								<Image
									src="/images/portfolio/soulful-health-thumbnail-image.png"
									alt="portfolio thumbnail image"
									className="card-image rounded-[4px] w-full h-full"
									width={344}
									height={424}
								/>
							</div>
							<div className="portfolio-card-cont absolute top-0 left-0 w-full h-full flex flex-col">
								<div className="card-logo py-6 px-[6px] bg-white max-w-[75px] w-full h-[66px] rounded-tl-[4px]">
									<Image
										src="/images/portfolio/soulful-brand-logo.svg"
										alt="portfolio project brand logo"
										width={62}
										height={17}
									/>
								</div>
								<div className="portfolio-info mt-auto w-full px-4 py-[24px]">
									<h4 className="card-subtitle uppercase font-secondary text-[14px] font-normal tracking-[2.1px] mb-[5px] leading-[16px]">
										soulfull health
									</h4>
									<h5 className="card-title text-[24px] text-left text-white font-primary font-bold tracking-[2.1px] uppercase leading-[120%]">
										Enlightenment for woman
									</h5>
								</div>
							</div>
						</div>
						{/* ============== */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default PortfolioSec;
