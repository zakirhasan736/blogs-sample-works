"use client";

import React from "react";
import { motion } from "framer-motion";
import { Image, Link } from "@packages/packages";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import PortfolioSlideData from "@data/portfolioSliderData/PortfolioSlideData.json";

const PortfolioSec = () => {

  return (
    <section className="portfolio pt-[64px] sm:pt-8 pb-[106px] sm:pb-[53px] bg-[#E1E4E8]">
      <div className="custom-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          transition={{
            duration: 1,
            ease: "easeIn"
          }}
          className="mb-[47px] sm:mb-[35px] sm:flex-col sm:items-start sm:gap-5"
        >
          <div className="section-title-box flex sm:!flex-row justify-between mb-2">
            <h3 className="text-[#181725]">Particular Portfolio</h3>
          </div>
          <p className="text-[#000]">
            We pioneer what's next, combining creativity, tech innovation and
            data.
          </p>
        </motion.div>
      </div>
      <div
        className="portfolio-card-item-box"
      >
        <div className="custom-container-full max-w-[1440px] w-full mx-auto pl-[140px] laptop-m:pl-[30px] md:pl-[20px] sm:pl-4">
          <div className="portfolio-card-slide-container pb-4 !overflow-hidden">
            <div className="portfolio-card-item-wrapper max-w-[1056px] md:max-w-[500px] sm:max-w-[280px] w-full ml-0">
              <Swiper
                spaceBetween={10}
                freeMode={true}
                // autoplay={{
                //   delay: 6000,
                //   disableOnInteraction: false,
                // }}
                navigation={true}
                modules={[FreeMode, Autoplay]}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 16,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  992: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  1199: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                }}
                className="portfolios w-full !overflow-visible"
              >
                {PortfolioSlideData.map((portfolio, index) => (
                  <SwiperSlide key={index}>
                    <Link href={`/${portfolio.link}`} className="!text-white">
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                          visible: { opacity: 1 },
                          hidden: { opacity: 0 },
                        }}
                        transition={{
                          duration: 1,
                          ease: "easeIn",
                          delay: index * 0.5,
                        }}
                        className="portfolio-card-item max-w-[344px] w-full relative"
                      >
                        <div className="portfolio-card-img rounded-[4px] max-w-[344px] w-full max-h-[424px] h-full">
                          <Image
                            src={`/images/portfolio/${portfolio.cardImg}`}
                            alt="portfolio thumbnail image"
                            className="card-image rounded-[4px] w-full h-full"
                            width={344}
                            height={424}
                          />
                        </div>
                        <div className="portfolio-card-cont absolute top-0 left-0 w-full h-full flex flex-col">
                          <div className="card-logo py-6 px-[6px] bg-white max-w-[75px] w-full h-[66px] rounded-tl-[4px]">
                            {portfolio.cardImgLogo ? (
                              <Image
                                src={`/images/portfolio/${portfolio.cardImgLogo}`}
                                alt="portfolio project brand logo"
                                width={62}
                                height={17}
                              />
                            ) : null}
                          </div>
                          <div className="portfolio-info mt-auto w-full px-4 py-[24px]">
                            <h4 className="card-subtitle uppercase font-secondary text-[14px] sm:text-[11px] font-normal tracking-[2.1px] mb-[9px] leading-[16px]">
                              {portfolio.cardSubTitle}
                            </h4>
                            <h5 className="card-title sm:text-[12px] text-[24px] text-left text-white font-primary font-bold tracking-[2.1px] uppercase leading-[120%]">
                              {portfolio.cardTitle}
                            </h5>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
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

export default PortfolioSec;
