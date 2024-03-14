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
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

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
      <div className="comon-title mb-10 sm:mb-5 custom-container max-w-[1220px]">
        <h2>Our Testimonials</h2>
        <span></span>
      </div>
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
        className="testimonials-slider-swiper max-w-[1440px] mx-auto"
      >
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
                {/* <div className="comon-title max-w-[547px] mb-20 sm:mb-10">
									<h2 className="mb-[6px]">Our Testimonials</h2>
									<span></span>
								</div> */}
                <div className="Testimonials-title-desc">
                  <p className="testimonials-desc-text sm:pl-4">
                    <span className="before-comma sm:pl-4">“</span>
                    {slide.testimonialsText}
                    <span className="after-comma">”</span>
                  </p>
                  <div className="auther-info-box mt-[13px]  sm:pl-4">
                    <h3 className="text-[20px] text-left text-neu-white capitalize font-normal font-tertery leading-[1.1]">
                      {slide.testimonialsAutherName}
                    </h3>
                    <h4 className="text-[18px] text-left text-neu-white capitalize font-tertery font-normal leading-normal mt-[5px]">
                      {slide.testimonialsAutherBio}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mid-services-section">
        <div className="section.1-left-cont">
          <div className="section-1-title-box">
            {/* <h3 className="section-1-info-title text-[22px] sm:text-[20px] text-neu-white text-left font-tertery font-normal leading-none">
                The Proof Is In The Pudding{" "}
              </h3> */}
            <h3 className="uppercase section-1-info-title text-[14px] text-neu-white font-tertery font-normal leading-none text-center">
              particular stats{" "}
            </h3>
            <div className="mid-services-wrapper flex justify-center gap-x-[58px] gap-y-1 md:gap-x-[30px]">
              <div className="mid-services text-center w-[385px] md:w-full">
                <h4 className="text-[56px] lg:text-[40px] md:text-[36px]  text-neu-white font-tertery font-normal leading-[1.1]">
                  50+
                </h4>
                <p className="text-[15px] text-neu-white font-tertery font-normal leading-normal">
                  Startups & SMEs we’ve worked with
                </p>
              </div>
              <div className="mid-services text-center w-[385px] md:w-[90%] sm:m-auto">
                <h4 className="text-[56px] lg:text-[40px] whitespace-nowrap md:text-[36px] text-neu-white font-tertery font-normal leading-[1.1]">
                  47%
                </h4>
                <p className="text-[15px] text-neu-white font-tertery font-normal leading-normal">
                  of Particular customers return for a second service within the
                  first 3 months
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsVersionTwo;