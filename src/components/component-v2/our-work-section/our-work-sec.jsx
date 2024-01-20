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

const OurWorkSec = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return (
		<section className="our-work-section pb-[141px] md:pb-20">
			<div className="custom-container max-w-[1220px]">
				<div className="comon-title mb-6">
					<h2>Our Work</h2>
					<span></span>
				</div>
				<div className="carousel work-slider-main-box pb-6 grid grid-cols-12 gap-[37px] sm:block">
					<div className="work-slide-main-view col-span-7">
						<Swiper
							spaceBetween={10}
							effect={"fade"}
							loop={true}
							autoplay={{
								delay: 3000,
								disableOnInteraction: false,
							}}
							navigation={false}
							thumbs={{
								swiper:
									thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
							}}
							modules={[EffectFade, FreeMode, Navigation, Thumbs, Autoplay]}
							breakpoints={{
								640: {
									slidesPerView: 1,
									spaceBetween: 20,
								},
								768: {
									slidesPerView: 1,
									spaceBetween: 40,
								},
								1024: {
									slidesPerView: 1,
									spaceBetween: 50,
								},
							}}
							fade={true} // Add fade effect
							className="thumbs w-full rounded-lg">
							{/* Slides for the main Swiper */}
							<SwiperSlide>
								<div className="work-slide-items work-slide-item-one">
									<div className="client-project-img">
										<Image
											src="/images/our-works-img-item-1.jpg"
											width={657}
											height={451}
											className="h-[451px] md:h-auto"
											alt="our work carousel image"
										/>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="work-slide-items work-slide-item-two">
									<div className="client-project-img">
										<Image
											src="/images/our-works-img-item-1.jpg" // Replace with the correct image path
											width={657}
											height={451}
											className="h-[451px] md:h-auto"
											alt="our work carousel image"
										/>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="work-slide-items work-slide-item-three">
									<div className="client-project-img">
										<Image
											src="/images/our-works-img-item-1.jpg" // Replace with the correct image path
											width={657}
											height={451}
											className="h-[451px] md:h-auto"
											alt="our work carousel image"
										/>
									</div>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>

					{/* Pagination Box */}
					<div className="clients pagination-box col-span-5">
						<Swiper
							onSwiper={setThumbsSwiper}
							loop={false}
							spaceBetween={12}
							slidesPerView={3}
							freeMode={true}
							autoplay={{
								delay: 3000,
								disableOnInteraction: false,
							}}
							watchSlidesProgress={true}
							modules={[FreeMode, Navigation, Thumbs, Autoplay]}
							breakpoints={{
								640: {
									slidesPerView: 3,
									spaceBetween: 0,
								},
								738: {
									slidesPerView: 3,
									spaceBetween: 0,
								},
								1024: {
									slidesPerView: 3,
									spaceBetween: 0,
								},
							}}
							className="w-full rounded-lg">
							{/* Slides for the pagination Swiper */}
							<SwiperSlide>
								<div className="client-naeo project-info paginetion-item relative pagination-active">
									<p className="name mb-[6px]">Naeo</p>
									<div className="active-slide-cont-box">
										<p className="description mb-4">
											Transforming Naeo's digital presence through a
											user-focused web design and holistic brand identity,
											enhancing engagement, credibility, and sustainability
										</p>
										<Link href="#">Full Case Study</Link>
										<div className="progress-loader"></div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="project-info paginetion-item relative">
									<p className="name  mb-[6px]">Knights Academy</p>
									<div className="active-slide-cont-box">
										<p className="description mb-4">
											Elevating opportunities in American Football and beyond,
											Knight's Academy transforms talent connections with
											precision web design and digital marketing prowess.
										</p>
										<Link href="/case-studies/knights-academy">
											Full Case Study
										</Link>
										<div className="progress-loader"></div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="project-info paginetion-item relative">
									<p className="name  mb-[6px]">Zenbase</p>
									<div className="active-slide-cont-box">
										<p className="description mb-4">
											Elevating Zenbase's financial health solutions, our UX/UI
											design enhances user empowerment and brand resonance,
											cultivating an inclusive digital experience.
										</p>
										<Link href="/case-studies/naeo">Full Case Study</Link>
										<div className="progress-loader"></div>
									</div>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurWorkSec;
