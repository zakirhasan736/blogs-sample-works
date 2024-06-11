"use client"
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const AboutBanner = () => {
  return (
    <section className="about-banner-section h-[100vh] pt-[163px] pb-[64px]">
      <Image
        src="/images/about-us-banner-img.svg"
        alt="aboutus banner image"
        width={1920}
        height={851}
        className="absolute inset-0 z-0 w-full h-full object-cover sm:hidden sm:object-top"
      />
      <Image
        src="/images/about-us-banner-img-mobo.svg"
        alt="aboutus banner image"
        width={1440}
        height={851}
        className="absolute inset-0 z-0 w-full h-full object-cover hidden sm:block sm:object-top"
      />

      <div className="custom-container h-full">
        <div className="about-banner-wrapper flex flex-col justify-end h-full">
          <div className="about-banner-cont-box relative z-50">
            <motion.h1
              className="banner-title mb-6 font-primary font-normal max-w-[750px] w-full text-[40px] md:text-[38px] sm:text-[36px] text-white tracking-[2px] leading-[120%]"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Eliminating poor human experiences in the digital space
            </motion.h1>
            <motion.p
              className="banner-desc text-white max-w-[781px] text-[18px] sm:text-[16px] leading-[180%] font-normal font-accent"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              While Premium looks different for each brand, product and service,
              it’s the mindset we consider to be the standard. The only
              sustainable one.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
