"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface HomeBannerProps {}

const Banner: React.FC<HomeBannerProps> = () => {
  return (
    <section className="soulfull-banner bg-[url('/images/metisse-hero.png')] bg-cover relative h-screen">
      <div className="custom-container">
        {/* Content */}
        <div className="absolute bottom-[48px] text-white">
          <h1>Metisse</h1>
          <h4>Redefining Watch Design</h4>
        </div>
      </div>
    </section>
  );
};

export default Banner;
