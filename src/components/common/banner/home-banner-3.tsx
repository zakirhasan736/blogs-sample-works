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
    <motion.section
      className="home-banner-section home-banner-section-v3 relative"
      style={{ height: "80vh" }}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 z-0 w-full h-full object-cover"
      >
        <source src="/images/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="custom-container">
        {/* Content */}
        <div className="absolute bottom-[118px] text-white">
          <motion.h1>
            Where Every Pixel <br /> Tells a Particular Story
          </motion.h1>
          <motion.p>
            We forge sustained marketing success for businesses by genuinely
            grasping <br /> the essence of human engagement. Specialist in
            designing bespoke digital <br /> strategies for brands across all
            sectors and companies across the globe.
          </motion.p>
          <button className="lbtn">Let's talk</button>
        </div>
        <Image src="/images/agency.png" alt="brand" width={139} height={68} className="absolute bottom-[37px] right-4"/>
      </div>
    </motion.section>
  );
};

export default HomeBanner;