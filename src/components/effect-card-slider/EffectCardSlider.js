import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Pagination } from "swiper/modules";
import { Image } from "@packages/packages";

const slidesData = [
	{
		image: "/images/effect-card-slider-1.png",
		alt: "Effect card slider 1",
		width: 322,
		height: 411,
		topic: "SEO",
	},
	{
		image: "/images/effect-card-slider-2.png",
		alt: "Effect card slider 2",
		width: 322,
		height: 411,
		topic: "Web Design & Visual Identity",
	},
	{
		image: "/images/effect-card-slider-3.png",
		alt: "Effect card slider 3",
		width: 322,
		height: 411,
		topic: "PPC",
	},
	{
		image: "/images/effect-card-slider-4.png",
		alt: "Effect card slider 4",
		width: 322,
		height: 411,
		topic: "Branding",
	},
	{
		image: "/images/effect-card-slider-5.png",
		alt: "Effect card slider 5",
		width: 322,
		height: 411,
		topic: "Social media",
	},
];

const EffectCardSlider = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	const handleSlideChange = (swiper) => {
		setActiveIndex(swiper.activeIndex);
	};

	return (
		<>
			<Swiper
				effect={"cards"}
				grabCursor={true}
				pagination={false}
			
				modules={[EffectCards, Pagination]}
				className="EffectsCardSlider-mySwiper"
				onSwiper={swiper => {
					swiper.on("slideChange", () => {
						setActiveIndex(swiper.activeIndex);
					});
				}}>
				{slidesData.map((slide, index) => (
					<SwiperSlide key={index}>
						<div className="effect-card-items">
							<Image
                            className="w-[322px] h-[411px] sm:w-[205px] sm:h-[261px]"
								src={slide.image}
								alt={slide.alt}
								width={slide.width}
								height={slide.height}
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<div className="custom-pagination">
				{slidesData.map((slide, index) => (
					<div
						key={index}
						className={`pagination-item ${
							activeIndex === index ? "active" : ""
						}`}
						onClick={() => setActiveIndex(index)}>
						{slide.topic}
                        {'  '}<span>/</span>
					</div>
				))}
			</div>
		</>
	);
};

export default EffectCardSlider;
