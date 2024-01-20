"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, EffectFade, Navigation  } from "swiper/modules";

interface Slide {
	testisliderModalImag: string;
	testimonialsAutherBio: string;
	testimonialsAutherName: string;
	testimonialsText: string;
}

interface CaseStudySliderProps {
	TestiSlides: Slide[];
}

const TestimonialsVersionTwo: React.FC<CaseStudySliderProps> = ({
	TestiSlides,
}) => {
	return (
		<section className="testimonials-section-v2">
			<Swiper
				spaceBetween={80}
				effect={"fade"}
				navigation={true}
				loop={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				modules={[EffectFade, Navigation, Autoplay]}
				className="testimonials-slider-swiper max-w-[1440px] mx-auto">
				{TestiSlides.map((slide, index) => (
					<SwiperSlide key={index}>
						<div className="Testimonials-left-cont testimonials-slide-items z-50 relative pb-[60px] h-[736px] pt-[76px] sm:pt-[55px]">
							<div className="testimonials-slides-modal-img">
								<Image
									src={slide.testisliderModalImag}
									alt="testimonials modal image"
									width={1400}
									height={736}
									className="w-full absolute h-full object-cover rounded-[10px] top-0 max-w-[1440px] mx-auto right-0 -z-10 left-0"
								/>
							</div>
							<div className="custom-container  max-w-[1220px]">
								<div className="comon-title max-w-[547px] mb-20 sm:mb-10">
									<h2 className="mb-[6px]">Our Testimonials</h2>
									<span></span>
								</div>
								<div className="Testimonials-title-desc">
									<p className="testimonials-desc-text sm:pl-4">
										<span className="before-comma sm:pl-4">“</span>
										{slide.testimonialsText}
										<span className="after-comma">”</span>
									</p>
									<div className="auther-info-box mt-[13px]  sm:pl-4">
										<h3 className="text-[20px] text-left text-neu-white font-normal font-tertery leading-[1.1]">
											{slide.testimonialsAutherName}
										</h3>
										<h4 className="text-[18px] text-left text-neu-white font-tertery font-normal leading-normal mt-[5px]">
											{slide.testimonialsAutherBio}
										</h4>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default TestimonialsVersionTwo;
