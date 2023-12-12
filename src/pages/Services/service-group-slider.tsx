"use client";

import { useState } from "react";
import {Image} from "@packages/packages";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const ServiceGroupSlider = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return (
		<section className="slider-gallery-section">
			{/* <div className="container"> */}
			<div className="services-card-item-first-part">
				{/* ============= */}
				<div className="services-slide-card-items"></div>
				{/* ============== */}
				{/* Thumbnail */}
				<Swiper
					onSwiper={setThumbsSwiper}
					loop={true}
					spaceBetween={12}
					slidesPerView={3}
					freeMode={true}
					watchSlidesProgress={true}
					modules={[FreeMode, Navigation, Thumbs]}
					className="thumbs mt-3 h-32 w-full rounded-lg">
					<SwiperSlide>
						<div className="services-slide-card-items">
							<div className="slider-model-text">SEO</div>
							<h2 className="service-slide-title text-[32px] text-left text-neu-white font-primary font-normal tracking-[.64px] leading-none">SEO</h2>
							<p className="service-slide-desc">
								Particular SEO: a foreign language made easy. Making Search
								Engine Optimisation friendly, so it works for you too.
							</p>
							<h4 className="service-slide-subtitle">Discover more</h4>
							<div className="w-8 h-8 border border-[#fff] cursor-pointer block"></div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="services-slide-card-items">
							<div className="slider-model-text">SEO</div>
							<h2 className="service-slide-title">Web Design & Development.</h2>
							<p className="service-slide-desc">
								Particular SEO: a foreign language made easy. Making Search
								Engine Optimisation friendly, so it works for you too.
							</p>
							<h4 className="service-slide-subtitle">Discover more</h4>
							<div className="w-8 h-8 border border-[#fff] cursor-pointer block"></div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="services-slide-card-items">
							<div className="slider-model-text">SEO</div>
							<h2 className="service-slide-title">pPC.</h2>
							<p className="service-slide-desc">
								Particular SEO: a foreign language made easy. Making Search
								Engine Optimisation friendly, so it works for you too.
							</p>
							<h4 className="service-slide-subtitle">Discover more</h4>
							<div className="w-8 h-8 border border-[#fff] cursor-pointer block"></div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="services-slide-card-items">
							<div className="slider-model-text">SEO</div>
							<h2 className="service-slide-title">Branding</h2>
							<p className="service-slide-desc">
								Particular SEO: a foreign language made easy. Making Search
								Engine Optimisation friendly, so it works for you too.
							</p>
							<h4 className="service-slide-subtitle">Discover more</h4>
							<div className="w-8 h-8 border border-[#fff] cursor-pointer block"></div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="services-slide-card-items">
							<div className="slider-model-text">SEO</div>
							<h2 className="service-slide-title">Visual Media.</h2>
							<p className="service-slide-desc">
								Particular SEO: a foreign language made easy. Making Search
								Engine Optimisation friendly, so it works for you too.
							</p>
							<h4 className="service-slide-subtitle">Discover more</h4>
							<div className="w-8 h-8 border border-[#fff] cursor-pointer block"></div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="services-slide-card-items">
							<div className="slider-model-text">SEO</div>
							<h2 className="service-slide-title">Social Media</h2>
							<p className="service-slide-desc">
								Particular SEO: a foreign language made easy. Making Search
								Engine Optimisation friendly, so it works for you too.
							</p>
							<h4 className="service-slide-subtitle">Discover more</h4>
							<div className="w-8 h-8 border border-[#fff] cursor-pointer block"></div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
			<div className="services-card-item-second-part">
				<Swiper
					loop={true}
					spaceBetween={10}
					navigation={false}
					thumbs={{
						swiper:
							thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
					}}
					modules={[FreeMode, Navigation, Thumbs]}
					className="h-96 w-full rounded-lg">
					<SwiperSlide>
						<div className="gellary-slider-preview-item">
							<div className="gellary-slider-cont-text">
								<div className="gallery-slider-model-text">SEO</div>
								<h2 className="gallery-slider-title">SEO</h2>
							</div>
							<div className="gellary-slider-cont-Model">
								<Image
									src="/images/gif/Section03.gif"
									width={600}
									height={500}
									alt="particular modal image"
									className="particular-modal-image"
								/>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="gellary-slider-preview-item">
							<div className="gellary-slider-cont-text">
								<div className="gallery-slider-model-text">SEO</div>
								<h2 className="gallery-slider-title">SEO</h2>
							</div>
							<div className="gellary-slider-cont-Model">
								<Image
									src="/images/Section01-1.gif"
									alt="gallery slider model image"
									width={600}
									height={500}
								/>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="gellary-slider-preview-item">
							<div className="gellary-slider-cont-text">
								<div className="gallery-slider-model-text">SEO</div>
								<h2 className="gallery-slider-title">SEO</h2>
							</div>
							<div className="gellary-slider-cont-Model">
								<Image
									src="/images/Section01-1.gif"
									alt="gallery slider model image"
									width={600}
									height={500}
								/>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="gellary-slider-preview-item">
							<div className="gellary-slider-cont-text">
								<div className="gallery-slider-model-text">SEO</div>
								<h2 className="gallery-slider-title">SEO</h2>
							</div>
							<div className="gellary-slider-cont-Model">
								<Image
									src="/images/Section01-1.gif"
									alt="gallery slider model image"
									width={600}
									height={500}
								/>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="gellary-slider-preview-item">
							<div className="gellary-slider-cont-text">
								<div className="gallery-slider-model-text">SEO</div>
								<h2 className="gallery-slider-title">SEO</h2>
							</div>
							<div className="gellary-slider-cont-Model">
								<Image
									src="/images/Section01-1.gif"
									alt="gallery slider model image"
									width={600}
									height={500}
								/>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="gellary-slider-preview-item">
							<div className="gellary-slider-cont-text">
								<div className="gallery-slider-model-text">SEO</div>
								<h2 className="gallery-slider-title">SEO</h2>
							</div>
							<div className="gellary-slider-cont-Model">
								<Image
									src="/images/Section01-1.gif"
									alt="gallery slider model image"
									width={600}
									height={500}
								/>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
			{/* </div> */}
		</section>
	);
};

export default ServiceGroupSlider;
