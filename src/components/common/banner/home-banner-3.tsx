"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface HomeBannerProps {}


const HomeBanner: React.FC<HomeBannerProps> = () => {
 

  return (
    <motion.section className="home-banner-section home-banner-section-v3 bg-no-repea relative h-[94vh]">
      <div className="overlay"></div>
      {/* Background Video */}
      <video
        preload="auto"
        src="/images/hero.mov"
        autoPlay={true}
        muted={true}
        playsInline={true}
        controls={false}
        loop={true}
        className="absolute inset-0 z-0 w-full h-full object-cover sm:object-right-top"
      />
      <div className="custom-container h-full">
        {/* Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0},
          }}
          transition={{
            duration: 1,
            ease: "easeIn",
          }}
          className="absolute bottom-[118px] text-white z-10"
        >
          <h1 className="text-![14px] seo-h1 uppercase mb-1">
            London-based digital marketing agency
          </h1>
          <p className="h1 mb-5">
            Where Every Pixel <br /> Tells a Particular Story
          </p>
          <p className="mt-5">
            We forge sustained marketing success for businesses by genuinely
            grasping <br /> the essence of human engagement. Specialist in
            designing bespoke digital <br /> strategies for brands across all
            sectors and companies across the globe.
          </p>
          <Link href="/contacts">
            <button className="lbtn">Let's talk</button>
          </Link>
        </motion.div>
        <Image
          src="/images/agency.svg"
          alt="brand"
          width={139}
          height={68}
          className="absolute bottom-[37px] right-4 z-10"
        />
        <Link
          href="https://network.byparticular.com/"
          target="_blank"
          className="absolute bottom-[373px] right-0 sm:hidden z-10"
        >
          <Image
            src="/images/network.svg"
            alt="brand"
            width={126}
            height={69}
            className="w-full h-full"
          />
        </Link>
        
      </div>
     
    </motion.section>


  );
};

export default HomeBanner;
