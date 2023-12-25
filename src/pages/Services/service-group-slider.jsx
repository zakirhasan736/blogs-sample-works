"use client";

import React, { useState } from "react";
import {Image} from "@packages/packages";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


const ServiceGroupSlider = ({ slides, GalleryPrevSlides }) => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	if (!slides || !GalleryPrevSlides) {
		return <div>No article content available</div>;
	}
	return (
		<section className="slider-gallery-section">
			{/* <div className="container"> */}
			<div className="services-card-item-first-part  max-w-[1430px] mx-auto">
				{/* Thumbnail */}
				<Swiper
					onSwiper={setThumbsSwiper}
					loop={true}
					spaceBetween={12}
					slidesPerView={1}
					freeMode={true}
					watchSlidesProgress={true}
					modules={[FreeMode, Navigation, Thumbs]}
					breakpoints={{
						640: {
							slidesPerView: 1,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 40,
						},
						1024: {
							slidesPerView: 3,
							spaceBetween: 50,
						},
					}}
					className="thumbs w-full rounded-lg">
					{slides?.map((slide, index) => (
						<SwiperSlide key={index}>
							<div className="services-slide-card-items">
								<div className="title-box relative">
									<div className="slider-model-text whitespace-nowrap uppercase absolute opacity-0 md:text-[120px] sm:text-[90px]">
										{slide.modalTitle}
									</div>
									<h2 className="service-slide-title text-[32px]  text-left text-neu-white font-primary font-normal tracking-[.64px] mb-2 leading-none ">
										{slide.title}
									</h2>
								</div>
								<p className="service-slide-desc mb-8 text-[#CBCBCB] text-[16px] text-left font-primary font-normal tracking-[.32px] capitalize leading-normal">
									{slide.description}
								</p>
								<h4 className="service-slide-btn text-[24px] text-neu-white text-left font-primary font-normal tracking-[.9px] leading-none mb-14">
									{slide.btnText}
								</h4>
								<span className="w-8 h-8 sm:w-5 sm:h-5 border border-[#fff] cursor-pointer block"></span>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className="services-card-item-second-part mt-[100px] md:mt-[60px] sm:mt-0  max-w-[1430px] mx-auto">
				<Swiper
					loop={true}
					spaceBetween={10}
					navigation={false}
					thumbs={{
						swiper:
							thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
					}}
					modules={[FreeMode, Navigation, Thumbs]}
					className="w-full rounded-lg">
					{GalleryPrevSlides.map((GallerySlide, index) => (
						<SwiperSlide key={index}>
							<div className="gellary-slider-preview-item  flex justify-between items-center ">
								<div className="gellary-slider-cont-text relative">
									<div className="gallery-slider-model-text whitespace-nowrap uppercase absolute top-8 sm:top-0 scrolling-text text-[120px] text-left font-primary font-normal leading-none">
										{GallerySlide.ModalTitle}
									</div>
									<h2 className="gallery-slider-title sm:hidden text-[65px] text-left text-neu-white font-primary font-normal leading-none">
										{GallerySlide.Title}
									</h2>
								</div>
								<div className="gellary-slider-cont-Model">
									<Image
										src={GallerySlide.ModalImage}
										width={450}
										height={300}
										alt="particular modal image"
										className="particular-modal-image"
									/>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			{/* </div> */}
		</section>
	);
};

export default ServiceGroupSlider;

