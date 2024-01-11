"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import React, { useRef, useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Slide {
	description: string;
	title: string;
}

interface TestimonialsSectionProps {
	slides: Slide[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
	slides,
}) => {
	const [prevSlideTitle, setPrevSlideTitle] = useState<string>("");
	const [nextSlideTitle, setNextSlideTitle] = useState<string>("");
	const [currentSlideTitle, setCurrentSlideTitle] = useState<string>("");

	const swiperRef = useRef<any>(null);

	useEffect(() => {
		if (slides.length > 0) {
			setPrevSlideTitle(slides[slides.length - 1]?.title || "");
			setNextSlideTitle(slides[1]?.title || "");
			setCurrentSlideTitle(slides[0]?.title || "");
		}
	}, [slides]);

	const handleNext = () => {
		if (swiperRef.current) {
			swiperRef.current.slideNext();
		}
	};

	const handlePrev = () => {
		if (swiperRef.current) {
			swiperRef.current.slidePrev();
		}
	};

	return (
		<section className="testimonials-section px-[71px] pt-[60px] pb-[100px] sm:pt-[50px] sm:pr-5 sm:pb-9 sm:pl-6 bg-black md:px-8">
			<div className="custom-container laptop-m:px-0">
				<div className="testimonials-sec-wrapper max-w-[1330px] mx-auto">
					<div className="testimonials-section-title-box mb-[59px] sm:mb-6">
						<div className="section-title-box flex items-center justify-between sm:flex-col sm:items-start sm:gap-4">
							<h2 className="section-title font-primary font-bold leading-none text-left text-gray-light-2 text-[48px] md:text-[42px] sm:text-[36px]">
								Testimonials
							</h2>
							<p className="testimonials-usersname text-gray-light-2 md:text-[23px] sm:text-[22px] text-text-medium-4 text-right font-semibold font-primary leading-none">
								<span className="client-name">{currentSlideTitle}</span> x
								Particular
							</p>
						</div>
						<Swiper
							navigation={{
								nextEl: ".pagination-next-widgete",
								prevEl: ".pagination-prev-widgete",
							}}
							pagination={{ type: "fraction" }}
							modules={[Navigation]}
							onSwiper={swiper => {
								swiperRef.current = swiper;
							}}
							className="services-slider-swiper case-study-slider"
							onSlideChange={swiper => {
								const activeIndex = swiper.activeIndex;
								setPrevSlideTitle(slides[activeIndex - 1]?.title || "");
								setNextSlideTitle(slides[activeIndex + 1]?.title || "");
								setCurrentSlideTitle(slides[activeIndex]?.title || "");
							}}>
							{slides.map((slide, index) => (
								<SwiperSlide key={index}>
									<div className="testimonials-slider-item">
										<p className="section-desc mt-[65px] md:text-[18px] sm:mt-[17px] sm:text-[18px] text-neu-white text-left text-text-medium-4 font-primary font-normal leading-normal max-w-[1301px]">
											{slide.description}
										</p>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
					<div className="widgets-pagination flex items-center justify-between">
						<button
							className="pagination-prev-widgete md:text-[20px] sm:text-[18px] font-primary font-medium text-gray-light-2 text-left text-[23px] leading-none"
							onClick={handlePrev}>
							Back
							<span className="topic-text block sm:hidden md:text-[18px]">
								{prevSlideTitle}
							</span>
						</button>
						<button
							className="pagination-next-widgete md:text-[20px] sm:text-[18px] font-primary font-medium text-gray-light-2 text-left text-[23px] leading-none"
							onClick={handleNext}>
							Next
							<span className="topic-text block sm:hidden md:text-[18px]">
								{nextSlideTitle}
							</span>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TestimonialsSection;
