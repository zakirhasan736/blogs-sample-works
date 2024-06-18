"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface HomeBannerProps {}

const HomeBanner: React.FC<HomeBannerProps> = () => {
  return (
    <motion.section className="home-banner-section home-banner-section-v3 bg-no-repea relative h-screen">
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
        <div className="absolute bottom-[118px] text-white z-10">
          <motion.h1
            className="text-![14px] seo-h1 uppercase mb-1"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            London-based digital marketing agency
          </motion.h1>
          <motion.p
            className="h1 mb-5"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Where Every Pixel <br /> Tells a Particular Story
          </motion.p>
          <motion.p
            className="mt-5"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            We forge sustained marketing success for businesses by genuinely
            grasping <br /> the essence of human engagement. Specialist in
            designing bespoke digital <br /> strategies for brands across all
            sectors and companies across the globe.
          </motion.p>
          <Link href="/contacts">
            <motion.button
              className="lbtn"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Let's talk
            </motion.button>
          </Link>
        </div>
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
