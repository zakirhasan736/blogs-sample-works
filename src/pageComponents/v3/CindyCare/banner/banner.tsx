"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface HomeBannerProps {}

const Banner: React.FC<HomeBannerProps> = () => {
  return (
    <section className="soulfull-banner bg-[url('/images/cindy-hero.png')] bg-cover relative h-screen">
      <div className="custom-container">
        {/* Content */}
        <div className="absolute bottom-[48px] text-white">
          <h1 className="mb-6">CindyCare</h1>
          <h4>The perfect alternative to a care home.</h4>
        </div>
      </div>
    </section>
  );
};

export default Banner;
