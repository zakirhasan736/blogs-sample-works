"use client";
import React from "react";
import { motion } from "framer-motion";

interface HomeBannerProps {}

const Banner: React.FC<HomeBannerProps> = () => {
  return (
    <section className="soulfull-banner bg-[url('/images/metisse-hero.png')] bg-cover relative h-screen">
      <div className="custom-container">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
          className="absolute bottom-[48px] text-white"
        >
          <h1 className="mb-6">Metisse</h1>
          <h4>Redefining Watch Design</h4>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
