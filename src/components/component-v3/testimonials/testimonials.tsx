"use client";
import React, { useState, useEffect, useRef } from "react";
import { Image, Link } from "@packages/packages";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion, useInView } from "framer-motion";
import "swiper/css";
import TestimonialsData from "@data/testimonialsLiderData/TestimonialsSlideData.json";

interface Testimonial {
  ProjectTitle: string;
  isVideo?: boolean;
  projectModalVideo?: string;
  projectModalImage?: string;
  clientName: string;
  rating?: number;
  rettingProvider: string;
  clientWord?: string;
  audioFile?: string;
  categoryItems: string[];
}

interface TestimonialsData {
  TestimonialsSlideData: Testimonial[];
}

const TestimonialSec: React.FC = () => {
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(
    null
  );
  const [isPlaying, setIsPlaying] = useState<string | null>(null);
  const [autoplay, setAutoplay] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<any>(null);

  const testimonials = TestimonialsData.TestimonialsSlideData;

  const isInView = useInView(sectionRef, {
    // triggerOnce: true,
    // threshold: 0.1,
  });

  useEffect(() => {
    if (isInView) {
      setAutoplay(true);
    } else {
      setAutoplay(false);
    }
  }, [isInView]);

  //   useEffect(() => {
  //     if (swiperRef.current && swiperRef.current.autoplay) {
  //       if (autoplay) {
  //         swiperRef.current.autoplay.start();
  //       } else {
  //         swiperRef.current.autoplay.stop();
  //       }
  //     }
  //   }, [autoplay]);

  const renderRatingStars = (rating: number) => {
    const filledStars = Math.floor(rating);
    const remainder = rating - filledStars;
    const stars = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push(
        <li key={i} className="rettings">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M7.27995 1.91172C7.60141 1.35983 8.39875 1.35983 8.72015 1.91172L10.5835 5.11087L14.2019 5.89442C14.8261 6.02958 15.0725 6.78785 14.6469 7.26412L12.1801 10.0249L12.5531 13.7083C12.6174 14.3437 11.9724 14.8123 11.3879 14.5548L8.00008 13.0619L4.61219 14.5548C4.02774 14.8123 3.38271 14.3437 3.44705 13.7083L3.81999 10.0249L1.35323 7.26412C0.92768 6.78785 1.17406 6.02958 1.79827 5.89442L5.41664 5.11087L7.27995 1.91172Z"
              fill="#E3F0FF"
            />
          </svg>
        </li>
      );
    }

    if (remainder > 0) {
      stars.push(
        <li key="partial" className="rettings">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M7.27995 1.91172C7.60141 1.35983 8.39875 1.35983 8.72015 1.91172L10.5835 5.11087L14.2019 5.89442C14.8261 6.02958 15.0725 6.78785 14.6469 7.26412L12.1801 10.0249L12.5531 13.7083C12.6174 14.3437 11.9724 14.8123 11.3879 14.5548L8.00008 13.0619L4.61219 14.5548C4.02774 14.8123 3.38271 14.3437 3.44705 13.7083L3.81999 10.0249L1.35323 7.26412C0.92768 6.78785 1.17406 6.02958 1.79827 5.89442L5.41664 5.11087L7.27995 1.91172Z"
              fill="#E3F0FF"
            />
          </svg>
        </li>
      );
    }

    const emptyStars = 5 - filledStars - (remainder > 0 ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <li key={`empty-${i}`} className="rettings">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M7.27995 1.91172C7.60141 1.35983 8.39875 1.35983 8.72015 1.91172L10.5835 5.11087L14.2019 5.89442C14.8261 6.02958 15.0725 6.78785 14.6469 7.26412L12.1801 10.0249L12.5531 13.7083C12.6174 14.3437 11.9724 14.8123 11.3879 14.5548L8.00008 13.0619L4.61219 14.5548C4.02774 14.8123 3.38271 14.3437 3.44705 13.7083L3.81999 10.0249L1.35323 7.26412C0.92768 6.78785 1.17406 6.02958 1.79827 5.89442L5.41664 5.11087L7.27995 1.91172Z"
              fill="#1A1A1A"
            />
          </svg>
        </li>
      );
    }

    return stars;
  };

  const handleAudioPlay = (audioFile: string) => {
    if (currentAudio && isPlaying === audioFile) {
      currentAudio.pause();
      setCurrentAudio(null);
      setIsPlaying(null);
    } else {
      if (currentAudio) {
        currentAudio.pause();
      }
      const audio = new Audio(`/images/testimonials/${audioFile}`);
      audio.play();
      audio.addEventListener("ended", () => {
        setCurrentAudio(null);
        setIsPlaying(null);
      });
      setCurrentAudio(audio);
      setIsPlaying(audioFile);
    }
  };

  const handleAudioPause = () => {
    if (currentAudio) {
      currentAudio.pause();
      setCurrentAudio(null);
      setIsPlaying(null);
    }
  };

  return (
    <section
      className="testimonials bg-[#fff] text-[#181725] pt-[101px] pb-[48px] sm:pt-[35px] sm:pb-[80px]"
      ref={sectionRef}
    >
      <div className="custom-container">
        <motion.div
          className="section-title-box sm:flex sm:flex-col sm:gap-[15px]"
        >
          <div className="flex gap-20 lg:gap-[30px] sm:flex-col sm:gap-5">
            <h3 className="text-[#181725]">Testimonials</h3>
            <p className="mdp">
              Our clients have amazing things to say about Particular. Read what{" "}
              <br />
              they have to say.
            </p>
          </div>
          <Link href="/portfolio">
            <button className="btn btn-dark">Portfolio</button>
          </Link>
        </motion.div>
      </div>
      <div className="testimonials-wrapper-box mt-[10px] sm:mt-10">
        <div className="custom-container-full max-w-[1440px] w-full relative pl-[428px] laptop-m:pl-[318px] pr-0 mx-auto lg:pl-[25px] md:pl-[20px] sm:pl-4 xxs:pl-4">
          <div className="testimonials-card-slide-container mb-4 !overflow-hidden">
            <div className="testimonilas-card-items max-w-[766px] md:max-w-[650px] sm:max-w-[280px] w-full ml-0">
              <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                spaceBetween={10}
                autoplay={
                  autoplay
                    ? {
                        delay: 4500,
                        disableOnInteraction: false,
                      }
                    : false
                }
                navigation={false}
                modules={[Autoplay]}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  992: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  1199: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                }}
                className="testimonials w-full !overflow-visible"
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <motion.div
                      className="testimonials-card-item pb-4 max-w-[371px] w-full"
                    >
                      <h4 className="project-title mb-6 capitalize md:mb-5 sm:mb-4 text-mono-100 text-center sm:text-left text-[24px] sm:!text-[18px] font-primary font-light leading-[120%] tracking-[1.2px]">
                        {testimonial.ProjectTitle}
                      </h4>
                      <div className="testimonials-cont-box relative max-w-[371px] h-[476px] w-full rounded-[4px] overflow-hidden">
                        <div className="testimonials-modal-item max-w-[371px] h-[476px] relative rounded-[4px] overflow-hidden">
                          {testimonial.isVideo ? (
                            <video
                              preload="auto"
                              src={`/images/testimonials/${testimonial.projectModalVideo}`}
                              autoPlay={true}
                              muted={true}
                              playsInline={true}
                              controls={false}
                              loop={true}
                              className="z-0 w-full h-full object-cover"
                            ></video>
                          ) : (
                            <Image
                              src={`/images/testimonials/${testimonial.projectModalImage}`}
                              alt="testimonials client modal image"
                              width={371}
                              height={476}
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>
                        <div className="testimonials-overly-cont absolute top-0 left-0 w-full h-full flex flex-col justify-end items-start px-[24px] py-[32px]">
                          <div className="content">
                            <p className="authore-name mb-4 text-mono-50 text-[14px] text-left font-accent font-normal leading-[150%]">
                              {testimonial.clientName}
                            </p>
                            <div className="testimonials-retting flex sm:!flex-row items-center gap-4">
                              {testimonial.rating && (
                                <ul className="retting-lists flex sm:!flex-row items-center gap-2">
                                  {renderRatingStars(testimonial.rating)}
                                </ul>
                              )}
                              <div className="trusted-provider">
                                <a href="/">
                                  <Image
                                    src={`/images/testimonials/${testimonial.rettingProvider}`}
                                    alt="rettings trusted provider"
                                    width={16}
                                    height={16}
                                  />
                                </a>
                              </div>
                            </div>
                            {testimonial.clientWord && (
                              <p className="testimonials-words mt-2 text-mono-50 text-[16px] text-left font-accent font-normal leading-[150%]">
                                “{testimonial.clientWord}”
                              </p>
                            )}
                            {testimonial.audioFile && (
                              <div className="audio-testi-word-box !flex items-center gap-4 mt-4">
                                {isPlaying === testimonial.audioFile ? (
                                  <button
                                    className="pause-audio !border-0 hover:!bg-transparent focus:!bg-transparent !p-0"
                                    onClick={() => handleAudioPause()}
                                  >
                                    <Image
                                      src="/images/pause-button.png"
                                      alt="audio pause button"
                                      width={24}
                                      height={24}
                                    />
                                  </button>
                                ) : (
                                  <button
                                    className="play-audio !border-0 hover:!bg-transparent focus:!bg-transparent !p-0"
                                    onClick={() =>
                                      handleAudioPlay(testimonial.audioFile)
                                    }
                                  >
                                    <Image
                                      src="/images/audio-play-button.svg"
                                      alt="audio play button"
                                      width={24}
                                      height={24}
                                    />
                                  </button>
                                )}
                                <div className="audio-wave-sound-box">
                                  <Image
                                    src="/images/audio-waves.svg"
                                    alt="audio sound waves"
                                    width={203}
                                    height={31}
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <ul className="categoy-list md:flex-wrap mt-4 sm:mt-3 gap-4 flex sm:!flex-row md:*:items-center justify-start">
                        {testimonial.categoryItems.map((category, catIndex) => (
                          <li key={catIndex} className="category-items">
                            <a
                              href="/"
                              className="p-2 rounded-full border border-mono-100 text-[12px] font-normal font-accent leading-[150%]"
                            >
                              {category}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSec;
