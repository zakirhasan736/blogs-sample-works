"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, ease: "easeOut" },
  },
};

const fadeInChildVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const expandWidthVariants = {
  hidden: { width: "0%", opacity: 0 },
  visible: {
    width: "100%",
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

interface HomeBannerProps {}

const HomeBanner: React.FC<HomeBannerProps> = () => {
  return (
    <motion.section className="home-banner-section home-banner-section-v3 bg-no-repea relative h-screen">
      <div className="overlay"></div>
      {/* Background Video */}
      <video
        src="/images/hero.mov"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 w-full h-full object-cover sm:object-right-top"
      />
      <div className="custom-container h-full">
        {/* Content */}
        <div className="absolute bottom-[118px] sm:bottom-[61px] text-white z-10">
          <motion.h1 className="mb-5">
            Where Every Pixel <br /> Tells a Particular Story
          </motion.h1>
          <motion.p>
            We forge sustained marketing success for businesses by genuinely
            grasping <br /> the essence of human engagement. Specialist in
            designing bespoke digital <br /> strategies for brands across all
            sectors and companies across the globe.
          </motion.p>
          <Link href="/contacts">
            <button className="lbtn">Let's talk</button>
          </Link>
        </div>
        <Image
          src="/images/agency.svg"
          alt="brand"
          width={139}
          height={68}
          className="absolute bottom-[37px] right-4 z-10 sm:hidden"
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
