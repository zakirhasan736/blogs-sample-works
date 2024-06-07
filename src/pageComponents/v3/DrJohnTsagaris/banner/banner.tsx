"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from 'framer-motion';

interface HomeBannerProps {}

const Banner: React.FC<HomeBannerProps> = () => {
  return (
    <section className="soulfull-banner bg-[url('/images/john-hero.png')] bg-cover relative h-screen">
      <div className="custom-container">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
          className="absolute bottom-[48px] text-white"
        >
          <h1 className="mb-6">Dr John Tsagaris</h1>
          <h4>A Digital Transformation Project</h4>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
