"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface HomeBannerProps {}

const Banner: React.FC<HomeBannerProps> = () => {
  return (
    <section className="soulfull-banner bg-[url('/images/burn-hero.png')] bg-cover relative h-screen">
      <div className="custom-container">
        {/* Content */}
        <div className="absolute bottom-[48px] text-white">
          <h1 className="mb-6">Burn-Hard</h1>
          <h4>Making Waves In The Fitness Industry</h4>
        </div>
      </div>
    </section>
  );
};

export default Banner;
