import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Pagination } from "swiper/modules";
import { Image } from "@packages/packages";
import slidesData from "@/data/home-page-data/home-effect-card-slider.json"


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
                            className="w-[322px] h-[411px] md:w-[205px] md:h-[261px]"
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
