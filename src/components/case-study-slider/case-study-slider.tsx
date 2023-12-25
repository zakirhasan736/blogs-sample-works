"use client";
import React from "react";
import { Image } from "@packages/packages";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination } from "swiper/modules";

interface Slide {
	sliderModalImage: string;
	sliderSubTitle: string;
	sliderTitle: string;
	sliderTagsCategory: string;
}

interface CaseStudySliderProps {
	slides: Slide[];
}

const CaseStudySlider: React.FC<CaseStudySliderProps> = ({ slides }) => {
	return (
		<section className="case-study-slide-section ">
			<div className="custom-container-fluid px-0">
				<div className="case-study-slide-wrapper">
					<Swiper
						speed={1700}
						parallax={true}
						loop={true}
						pagination={{
							clickable: true,
						}}
						modules={[Parallax, Pagination]}
						className="services-slider-swiper case-study-slider">
						{slides.map((slide, index) => (
							<SwiperSlide key={index}>
								<div className="case-study-slide-item sm:flex sm:flex-col sm:h-[486px] pt-[193px] pb-[163px] md:pt-14 md:pb-10 sm:pt-[14px] sm:pb-[41px] relative z-50 pl-20 sm:pl-4">
									<Image
										src={slide.sliderModalImage}
										width={1676}
										height={722}
										alt="case study slider modal image"
										className="slider-modal-image w-full h-full absolute top-0 left-0 z-[-2] sm:object-cover"
									/>
									<div className="case-study-content-box max-w-[1240px] mx-auto h-full flex flex-col sm:ml-0">
										<h6
											data-swiper-parallax="-500"
											className="slides-subtitle flex items-center gap-8 mb-[91px] md:text-[22px] sm:text-[16px] sm:mb-2 text-primary text-left font-primary font-medium leading-[200%] tracking-[.92px] text-[23px]">
											{slide.sliderSubTitle}{" "}
											<span className="shape sm:hidden w-[140px] h-[2px] bg-neu-white block"></span>
										</h6>
										<h2
											data-swiper-parallax="-300"
											className="slides-title max-w-[642px] text-primary md:text-[45px] sm:text-[32px] text-left text-[60px] font-primary font-bold leading-none tracking-[3.8px]">
											{slide.sliderTitle}
										</h2>
										<p
											data-swiper-parallax="-200"
											className="slides-desc  sm:mt-auto font-primary md:text-[28px] sm:text-[22px] font-medium leading-[165%] tracking-[1.16px] text-left text-primary text-text-medium mt-[91px]">
											{slide.sliderTagsCategory}
										</p>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default CaseStudySlider;
